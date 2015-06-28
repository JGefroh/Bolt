package com.jgefroh.bolt.server.data;

import java.util.ArrayList;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;


@RequestScoped
@Path("/data")
public class DataEndpoint {
    
    
    @GET
    @Path("/statuses")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Data> getIssues() {
        return toList(Status.values());
    }
    
    @GET
    @Path("/issue-types")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Data> getIssueTypes() {
        return toList(IssueType.values());
    }
    
    private List<Data> toList(final DataEnum[] enums) {
        List<Data> enumList = new ArrayList<Data>();
        for (DataEnum value : enums) {
            enumList.add(Data.create(value.getId(), value.getLabel(), value.getValue()));
        }
        return enumList;
    }
    
}