package com.saksham.Billing.io;



import lombok.Builder;
import lombok.Data;

import java.sql.Timestamp;
@Builder
@Data
public class CategoryResponse {

    private String categotyId;
    private String name;
    private String description;
    private String imageUrl;
    private String bgColor;

    private Timestamp createdAt;
    private Timestamp updatedAt;
}
