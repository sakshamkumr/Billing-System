package com.saksham.Billing.service;

import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;

import java.util.List;

public interface CategoryService {

    CategoryResponse add(CategoryRequests request);

    List<CategoryResponse> read();


}
