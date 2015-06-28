package com.jgefroh.bolt.server.issues;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.jgefroh.bolt.server.projects.Project;

@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String issueId;
    private String title;
    private String description;
    private String assignee;
    private String status;
    private Integer storyPoints;
    private Long estimatedTimeInMs;
    private String projectUUID;
    private String type;
    

    public static Issue create(final Issue issueFields) {
        Issue issue = new Issue();
        issue.setProjectUUID(issueFields.getProjectUUID());
        issue.setTitle(issueFields.getTitle());
        issue.setDescription(issueFields.getDescription());
        issue.setAssignee(issueFields.getAssignee());
        issue.setEstimatedTimeInMs(issueFields.getEstimatedTimeInMs());
        issue.setStoryPoints(issueFields.getStoryPoints());
        issue.setStatus(issueFields.getStatus() ==  null ? "BACKLOG" : issueFields.getStatus());
        issue.setType(issueFields.getType());
        return issue;
    }


    public void update(final Issue issueFields) {
        setTitle(issueFields.getTitle());
        setDescription(issueFields.getDescription());
        setAssignee(issueFields.getAssignee());
        setStoryPoints(issueFields.getStoryPoints());
        setEstimatedTimeInMs(issueFields.getEstimatedTimeInMs());
        setStatus(issueFields.getStatus());
        setType(issueFields.getType());
    }
            
    public Integer getStoryPoints() {
        return storyPoints;
    }

    
    public void setStoryPoints(Integer storyPoints) {
        this.storyPoints = storyPoints;
    }

    
    public Long getEstimatedTimeInMs() {
        return estimatedTimeInMs;
    }

    
    public void setEstimatedTimeInMs(Long estimatedTimeInMs) {
        this.estimatedTimeInMs = estimatedTimeInMs;
    }

    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    public String getIssueId() {
        return issueId;
    }
    
    public void setIssueId(String issueId) {
        this.issueId = issueId;
    }
    
    public String getTitle() {
        return title;
    }
    
    public void setTitle(String title) {
        this.title = title;
    }
    
    public String getDescription() {
        return description;
    }
    
    public void setDescription(String description) {
        this.description = description;
    }
    
    public String getAssignee() {
        return assignee;
    }
    
    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }
    
    public String getStatus() {
        return status;
    }
    
    public void setStatus(String status) {
        this.status = status;
    }
    
    
    public String getProjectUUID() {
        return projectUUID;
    }
    
    public void setProjectUUID(String projectUUID) {
        this.projectUUID = projectUUID;
    }
    
    
    public String getType() {
        return type;
    }
    
    public void setType(String type) {
        this.type = type;
    }
}
