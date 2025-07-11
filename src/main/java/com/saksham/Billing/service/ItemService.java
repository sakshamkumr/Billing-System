package com.saksham.Billing.service;

import com.saksham.Billing.io.ItemRequest;
import com.saksham.Billing.io.ItemResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ItemService {

    ItemResponse add(ItemRequest request , MultipartFile file);

    List<ItemResponse> fetchItems();

    void deleteItem(String itemId);
}
