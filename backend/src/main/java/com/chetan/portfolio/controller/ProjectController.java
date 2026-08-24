package com.chetan.portfolio.controller;

import com.chetan.portfolio.model.PagedResponse;
import com.chetan.portfolio.model.Project;
import com.chetan.portfolio.service.ProjectService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProjectController {

    private static final Logger log = LoggerFactory.getLogger(ProjectController.class);

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/api/projects")
    public PagedResponse<Project> getProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        log.info("GET /api/projects page={} size={}", page, size);
        return projectService.getProjects(page, size);
    }
}
