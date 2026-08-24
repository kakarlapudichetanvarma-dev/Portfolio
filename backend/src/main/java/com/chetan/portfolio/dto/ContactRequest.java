package com.chetan.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequest {

    @NotBlank(message = "name is required")
    @Size(max = 120, message = "name must be under 120 characters")
    private String name;

    @NotBlank(message = "email is required")
    @Email(message = "email must be a valid address")
    private String email;

    @NotBlank(message = "message is required")
    @Size(max = 2000, message = "message must be under 2000 characters")
    private String message;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
