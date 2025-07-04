package com.saksham.Billing.io;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequests {
    private String name;
    private String description;

    @JsonProperty("bgcolor")
    private String bgColor;

}