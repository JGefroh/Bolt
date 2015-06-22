package com.jgefroh.bolt.server.sprints;

import java.util.Date;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.jgefroh.bolt.server.issues.Issue;
import com.jgefroh.bolt.server.projects.Project;

@Entity
public class Sprint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    
    private Date startDate;
    private Date endDate;
    
    private String name;
    
    @ManyToOne
    private Project project;
    
    @OneToMany
    private List<Issue> issues;

    
    public Integer getId() {
        return id;
    }

    
    public void setId(Integer id) {
        this.id = id;
    }

    
    public Date getStartDate() {
        return startDate;
    }

    
    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    
    public Date getEndDate() {
        return endDate;
    }

    
    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    
    public String getName() {
        return name;
    }

    
    public void setName(String name) {
        this.name = name;
    }

    
    public Project getProject() {
        return project;
    }

    
    public void setProject(Project project) {
        this.project = project;
    }

    
    public List<Issue> getIssues() {
        return issues;
    }

    
    public void setIssues(List<Issue> issues) {
        this.issues = issues;
    }
}
