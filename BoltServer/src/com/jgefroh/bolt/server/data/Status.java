package com.jgefroh.bolt.server.data;


public enum Status implements DataEnum {
    HOLD("On Hold"),
    BACKLOG("Backlog"),
    DEVELOPMENT("Development"),
    STAGING("Staging"),
    TESTING("Testing"),
    DONE("Done");
    
    private String label;
    
    private Status(final String label) {
        this.label = label;
    }
    
    @Override
    public int getId() {
        return this.ordinal();
    }
    
    @Override
    public String getLabel() {
        return this.label;
    }

    @Override
    public String getValue() {
        return this.name();
    }
}
