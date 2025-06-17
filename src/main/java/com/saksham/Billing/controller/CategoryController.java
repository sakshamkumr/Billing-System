package com.saksham.Billing.controller;


import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;
import com.saksham.Billing.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CategoryResponse addCategory(@RequestBody CategoryRequests request) {
        return categoryService.add(request);
    }
    @GetMapping
    public List<CategoryResponse> fetchCategories() {
        return categoryService.read();
    }

}
