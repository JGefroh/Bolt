package com.jgefroh.bolt.server.data;

public class Data {
    private int id;
    private String label;
    private String value;
    
    public static Data create(int id, String label, String value) {
        Data data = new Data();
        data.setId(id);
        data.setLabel(label);
        data.setValue(value);
        return data;
    }
    
    public int getId() {
        return id;
    }
    
    public void setId(int id) {
        this.id = id;
    }
    
    
    public String getLabel() {
        return label;
    }
    
    public void setLabel(String label) {
        this.label = label;
    }
    
    
    public String getValue() {
        return value;
    }
    
    public void setValue(String value) {
        this.value = value;
    }
}
