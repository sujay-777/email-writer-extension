package com.email.emailwriter.dto;


import lombok.Data;

@Data
public class EmailRequest {

    private String emailContent;
    private String tone;

}
