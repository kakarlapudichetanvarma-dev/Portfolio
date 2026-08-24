package com.chetan.portfolio.controller;

import com.chetan.portfolio.dto.ContactRequest;
import com.chetan.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping("/api/contact")
    public ResponseEntity<Map<String, String>> submitContact(@Valid @RequestBody ContactRequest request) {
        log.info("POST /api/contact from {}", request.getEmail());
        contactService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("status", "received"));
    }
}
