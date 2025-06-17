package com.saksham.Billing.service;

import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CategoryService {

    CategoryResponse add(CategoryRequests request, MultipartFile file);

    List<CategoryResponse> read();

    void delete(String categoryId);
}
