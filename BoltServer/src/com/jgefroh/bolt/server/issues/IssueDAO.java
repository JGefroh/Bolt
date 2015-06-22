package com.jgefroh.bolt.server.issues;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.TypedQuery;

import com.jgefroh.bolt.server.core.BoltGenericDAO;

@Stateless
public class IssueDAO extends BoltGenericDAO {

    public List<Issue> getIssuesForProject(String projectUUID) {
        StringBuilder jpql = new StringBuilder();
        jpql.append("select I from Issue I");
        jpql.append(" where I.projectUUID = :projectUUID");
        
        TypedQuery<Issue> query = getEntityManager().createQuery(jpql.toString(), Issue.class);
        query.setParameter("projectUUID", projectUUID);
        
        return query.getResultList();
    }

}
