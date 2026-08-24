package com.chetan.portfolio.model;

import java.util.List;

public class Project {

    private String code;
    private String name;
    private String summary;
    private List<String> stack;
    private List<String> highlights;
    private String status;

    public Project() {
    }

    public Project(String code, String name, String summary, List<String> stack,
                    List<String> highlights, String status) {
        this.code = code;
        this.name = name;
        this.summary = summary;
        this.stack = stack;
        this.highlights = highlights;
        this.status = status;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public List<String> getStack() {
        return stack;
    }

    public void setStack(List<String> stack) {
        this.stack = stack;
    }

    public List<String> getHighlights() {
        return highlights;
    }

    public void setHighlights(List<String> highlights) {
        this.highlights = highlights;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
