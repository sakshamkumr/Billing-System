package com.saksham.Billing.service.impl;

import com.saksham.Billing.entity.CategoryEntity;
import com.saksham.Billing.io.CategoryRequests;
import com.saksham.Billing.io.CategoryResponse;
import com.saksham.Billing.repository.CategoryRepository;
import com.saksham.Billing.repository.ItemRepository;
import com.saksham.Billing.service.CategoryService;
import com.saksham.Billing.service.FileUploadService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.Collections;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final FileUploadService fileUploadService;

    private final CategoryRepository categoryRepository;

    private final ItemRepository itemRepository;

    @Override
    public CategoryResponse add(CategoryRequests request, MultipartFile file) {
        String imgUrl = fileUploadService.uploadFile(file);
        CategoryEntity newCategory = convertToEntity(request);
        newCategory.setImageUrl(imgUrl);
        newCategory = categoryRepository.save(newCategory);
        return convertToResponse(newCategory);
    }

    @Override
    public List<CategoryResponse> read() {
        return categoryRepository.findAll()
                .stream()
                .map(categoryEntity -> convertToResponse(categoryEntity))
                .collect(Collectors.toList());
    }

    @Override
    public void delete(String categoryId) {
        CategoryEntity existingCategory = categoryRepository.findByCategoryId(categoryId)
                .orElseThrow(()-> new RuntimeException("Category not found" + categoryId));
        fileUploadService.deleteFile(existingCategory.getImageUrl());
        categoryRepository.delete(existingCategory);
    }


    private CategoryResponse convertToResponse(CategoryEntity newCategory) {
        Integer itemCount = itemRepository.countByCategoryId(newCategory.getId());
        return CategoryResponse.builder()
                .categoryId(newCategory.getCategoryId())
                .name(newCategory.getName())
                .description(newCategory.getDescription())
                .bgColor(newCategory.getBgColor())
                .imageUrl(newCategory.getImageUrl())
                .createdAt(newCategory.getCreatedAt())
                .updatedAt(newCategory.getUpdatedAt())
                .items(itemCount)
                .build();
    }

    private CategoryEntity convertToEntity(CategoryRequests request) {

        return CategoryEntity.builder()
                .categoryId(UUID.randomUUID().toString())
                .name(request.getName())
                .description(request.getDescription())
                .bgColor(request.getBgColor())
                .build();
    }
}
