package com.jgefroh.bolt.server.data;


public enum IssueType implements DataEnum {
    TECHNICAL_DEFECT("Technical Defect"),
    REQUIREMENTS_DEFECT("Requirements Defect"),
    FEATURE("Feature"),
    CHANGE_REQUEST("Change Request"),
    TWEAK("Tweak"),
    TASK("Task");
    
    private String label;
    
    private IssueType(final String label) {
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
