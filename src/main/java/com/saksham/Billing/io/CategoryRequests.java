package com.saksham.Billing.io;


import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class CategoryRequests {
    private String name;
    private String description;
    private String bgColor;

}