package com.saksham.Billing.service;

import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;

public interface CategoryService {

    CategoryResponse add(CategoryRequests request);
}
