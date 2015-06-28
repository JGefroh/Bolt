package com.jgefroh.bolt.server.issues;

import java.util.Arrays;
import java.util.List;

import javax.ejb.Stateless;
import javax.inject.Inject;

import com.jgefroh.bolt.server.data.Status;


@Stateless
public class IssueManager {
    @Inject private IssueDAO issueDAO;
    @Inject private IssueIdGenerator issueIdGenerator;
    
    public Issue save(final Issue issue) {
        if (isNew(issue)) {
            return create(issue);
        }
        else {
            return update(issue);
        }
    }
    
    private boolean isNew(final Issue issue) {
        return issue.getId() == null;
    }
    
    private Issue create(final Issue issueToCreate) {
        Issue issue = Issue.create(issueToCreate);
        issue.setIssueId(generateIssueId(issueToCreate.getProjectUUID(), "ITEM"));
        return issueDAO.update(issue);
    }
    
    private Issue update(final Issue issue) {
        Issue existingIssue = issueDAO.get(Issue.class, issue.getId());
        if (existingIssue == null || !isMatch(existingIssue.getProjectUUID(), issue.getProjectUUID())) {
            throw new IllegalArgumentException("Unable to create Issue.");
        };
        existingIssue.update(issue);
        return existingIssue;
    }
    
    private String generateIssueId(String projectUUID, String prefix) {
        return issueIdGenerator.generate(projectUUID, prefix);
    }
    
    private boolean isMatch(final String uuid1, final String uuid2) {
        if (uuid1 == null || uuid2 == null) {
            return true;
        }
        return uuid1.equals(uuid2);
    }
    
    public void delete(final String projectUUID, final int issueId) {
        Issue existingIssue = issueDAO.get(Issue.class, issueId);
        if (existingIssue != null && isMatch(existingIssue.getProjectUUID(), projectUUID)) {
            issueDAO.delete(Issue.class, issueId);
        }
        else {
            throw new IllegalArgumentException("Unable to delete issue.");
        }
    }
    
    public List<Issue> getIssues(final String projectUUID) {
        return issueDAO.getIssuesForProject(projectUUID);
    }

    public Issue nextStatus(int issueId) {
        Issue issue = issueDAO.get(Issue.class, issueId);
        Status status = Status.valueOf(issue.getStatus());
        int statusPosition = status.ordinal();
        if (statusPosition != Status.values().length - 1 && statusPosition != -1) {
            issue.setStatus(Status.values()[statusPosition + 1].getValue());
        }
        return issue;
    }

    public Issue previousStatus(int issueId) {
        Issue issue = issueDAO.get(Issue.class, issueId);
        Status status = Status.valueOf(issue.getStatus());
        int statusPosition = status.ordinal();
        if (statusPosition != 0) {
            issue.setStatus(Status.values()[statusPosition - 1].getValue());
        }
        return issue;
    }
}
