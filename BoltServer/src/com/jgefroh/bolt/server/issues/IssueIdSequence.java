package com.jgefroh.bolt.server.issues;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class IssueIdSequence {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    
    private String prefix;
    private int lastUsedId;
    private String projectUUID;

    public static IssueIdSequence create(String projectUUID, String prefix) {
        IssueIdSequence sequence = new IssueIdSequence();
        sequence.setPrefix(prefix);
        sequence.setProjectUUID(projectUUID);
        return sequence;
    }
    
    public String generate() {
        return prefix + '-' + (++lastUsedId);
    }
    
    public Integer getId() {
        return id;
    }
    
    public void setId(Integer id) {
        this.id = id;
    }
    
    
    public Integer getLastUsedId() {
        return lastUsedId;
    }
    
    public void setLastUsedId(Integer lastUsedId) {
        this.lastUsedId = lastUsedId;
    }
    
    
    public String getPrefix() {
        return prefix;
    }
    
    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }
    
    
    public String getProjectUUID() {
        return projectUUID;
    }
    
    public void setProjectUUID(String projectUUID) {
        this.projectUUID = projectUUID;
    }
}
