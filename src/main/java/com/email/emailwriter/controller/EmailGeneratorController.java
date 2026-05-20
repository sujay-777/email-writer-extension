package com.email.emailwriter.controller;


import com.email.emailwriter.dto.EmailRequest;
import com.email.emailwriter.service.EmailGeneratorService;
import jakarta.annotation.security.DenyAll;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class EmailGeneratorController {


    private final EmailGeneratorService emailGeneratorService;

    @PostMapping("/generate")
    public ResponseEntity<?> generateEmail(@RequestBody EmailRequest emailRequest){
        String response = emailGeneratorService.generateEmailReply(emailRequest);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }



}
