package com.jgefroh.bolt.server.issues;

import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;


@RequestScoped
@Path("/issues")
public class IssueEndpoint {
    
    @Inject private IssueManager issueManager;
    
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Issue save(final Issue issue) {
        return issueManager.save(issue);
    }
    
    @DELETE
    @Path("/{issueId}")
    public void delete(@PathParam("issueId") final int issueId, @QueryParam("projectUUID") final String projectUUID) {
        issueManager.delete(projectUUID, issueId);
    }
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Issue> getIssues(@QueryParam("projectUUID") final String projectUUID) {
        return issueManager.getIssues(projectUUID);
    }
    
    @POST
    @Path("/{issueId}/status/next")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Issue nextStatus(@PathParam("issueId") final int issueId) {
        return issueManager.nextStatus(issueId);
    }
    
    @POST
    @Path("/{issueId}/status/previous")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Issue previousStatus(@PathParam("issueId") final int issueId) {
        return issueManager.previousStatus(issueId);
    }
}