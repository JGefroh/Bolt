package com.jgefroh.bolt.server.core;

import java.util.logging.Logger;

import javax.enterprise.inject.Produces;
import javax.enterprise.inject.spi.InjectionPoint;


public class LoggerProducer {
    @Produces
    public Logger getLogger(final InjectionPoint point) {
      return Logger.getLogger(point.getClass().getSimpleName());
    }
 }
