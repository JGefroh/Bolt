package com.jgefroh.bolt.server.issues;

import javax.ejb.Stateless;
import javax.inject.Inject;


@Stateless
public class IssueIdGenerator {
    @Inject private IssueIdSequenceDAO sequenceDAO;
    
    public String generate(String projectUUID, String prefix) {
        IssueIdSequence sequence = sequenceDAO.getSequence(projectUUID);
        if (sequence == null) {
            sequence = IssueIdSequence.create(projectUUID, prefix);
            sequenceDAO.update(sequence);
        }
        return sequence.generate();
    }
}
