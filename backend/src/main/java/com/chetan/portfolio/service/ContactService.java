package com.chetan.portfolio.service;

import com.chetan.portfolio.dto.ContactRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.time.Instant;

@Service
public class ContactService {

    private static final Logger log = LoggerFactory.getLogger(ContactService.class);
    private static final Path LOG_FILE = Paths.get("data", "contacts.log");

    public synchronized void save(ContactRequest request) {
        String entry = String.format(
                "[%s] %s <%s>: %s%n",
                Instant.now(), request.getName(), request.getEmail(), request.getMessage()
        );

        try {
            Files.createDirectories(LOG_FILE.getParent());
            Files.writeString(
                    LOG_FILE,
                    entry,
                    StandardOpenOption.CREATE,
                    StandardOpenOption.APPEND
            );
            log.info("Contact message received from {}", request.getEmail());
        } catch (IOException e) {
            log.error("Failed to persist contact message from {}", request.getEmail(), e);
        }
    }
}
