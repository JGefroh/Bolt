package com.jgefroh.bolt.server.issues;

import javax.ejb.Stateless;
import javax.persistence.TypedQuery;

import com.jgefroh.bolt.server.core.BoltGenericDAO;

@Stateless
public class IssueIdSequenceDAO extends BoltGenericDAO {

    public IssueIdSequence getSequence(String projectUUID) {
        StringBuilder jpql = new StringBuilder();
        jpql.append("select S from IssueIdSequence S");
        jpql.append(" where S.projectUUID = :projectUUID");
        
        TypedQuery<IssueIdSequence> query = getEntityManager().createQuery(jpql.toString(), IssueIdSequence.class);
        query.setParameter("projectUUID", projectUUID);
        
        return query.getResultList().isEmpty() ? null : query.getResultList().get(0);
    }

}
