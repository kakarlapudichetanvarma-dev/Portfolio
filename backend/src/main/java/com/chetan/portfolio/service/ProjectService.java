package com.chetan.portfolio.service;

import com.chetan.portfolio.model.PagedResponse;
import com.chetan.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final List<Project> projects = List.of(
            new Project(
                    "PRJ-01",
                    "RADIUS — Real-Time Chat Platform",
                    "Spring Boot microservices chat application with a React/TypeScript frontend: presence, communities, and real-time messaging over WebSocket/STOMP.",
                    List.of("Spring Boot", "Spring Security/JWT", "React", "TypeScript",
                            "Kafka", "Redis", "PostgreSQL", "Eureka", "Docker"),
                    List.of(
                            "Real-time chat communication",
                            "AI integration",
                            "Communities and group chats",
                            "File sharing",
                            "Online presence"
                    ),
                    "ACTIVE"
            ),
            new Project(
                    "PRJ-02",
                    "Hospital Management System — Backend",
                    "Spring Boot microservices backend for hospital operations — patient care, prescriptions, and billing across nine independently deployable services behind an API Gateway with Eureka discovery.",
                    List.of("Spring Boot", "Spring Security/JWT", "MySQL", "RabbitMQ",
                            "Razorpay", "Eureka", "Bean Validation"),
                    List.of(
                            "JWT-secured endpoints across all services with centralized auth at the API Gateway",
                            "RabbitMQ for async inter-service messaging between appointment, medical-history, and invoice flows",
                            "Razorpay payment integration for invoice and billing",
                            "Request validation with structured error responses, centralized logging, and paginated list endpoints across all services"
                    ),
                    "ACTIVE"
            )
    );

    public PagedResponse<Project> getProjects(int page, int size) {
        int fromIndex = Math.min(page * size, projects.size());
        int toIndex = Math.min(fromIndex + size, projects.size());
        List<Project> pageContent = projects.subList(fromIndex, toIndex);
        return new PagedResponse<>(pageContent, page, size, projects.size());
    }
}
