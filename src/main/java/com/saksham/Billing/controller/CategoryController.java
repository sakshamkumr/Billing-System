package com.saksham.Billing.controller;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;
import com.saksham.Billing.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController

@RequiredArgsConstructor

public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping("/admin/categories")
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestPart("category") String categoryString,
                                        @RequestPart("file")MultipartFile file) {
        ObjectMapper objectMapper = new ObjectMapper();
        CategoryRequests request = null;
        try{
            request = objectMapper.readValue(categoryString,CategoryRequests.class);
            return categoryService.add(request,file);
        }catch(JsonProcessingException ex){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Exception occured while passing the Json" + ex.getMessage());
        }

    }
    @GetMapping
    public List<CategoryResponse> fetchCategories() {
        return categoryService.read();
    }


    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/admin/categories/{categoryId}")
    public void remove(@PathVariable String categoryId) {
        try{
            categoryService.delete(categoryId);
        }catch (Exception e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND,e.getMessage());
        }
    }

}
