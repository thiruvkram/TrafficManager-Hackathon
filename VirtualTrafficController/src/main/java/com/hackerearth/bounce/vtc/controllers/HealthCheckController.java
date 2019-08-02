package com.hackerearth.bounce.vtc.controllers;

import java.util.Hashtable;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;

@RestController
@RequestMapping("/")
public class HealthCheckController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<String> testController() {
        /*
         * Method for checking in browser
         * Add the health parameters also
         */
        logger.info("/test controller");
        Map<String, String> properties = new Hashtable<>();
        properties.put("Name", "Traffic Controller");
        properties.put("Health", "Controller is OK");
        return new ResponseEntity<>(new Gson().toJson(properties),
                    HttpStatus.OK);
    }
}
