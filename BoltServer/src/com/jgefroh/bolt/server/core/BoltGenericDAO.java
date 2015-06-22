package com.jgefroh.bolt.server.core;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import com.jgefroh.server.core.AbstractGenericDAO;

/**
 * @author Joseph Gefroh
 */
public class BoltGenericDAO extends AbstractGenericDAO {
    @PersistenceContext(unitName = "BoltDS") private EntityManager entityManager;
    
    @Override
    public EntityManager getEntityManager() {
        return entityManager;
    }
}
