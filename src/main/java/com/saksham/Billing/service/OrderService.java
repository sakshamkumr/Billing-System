package com.saksham.Billing.service;


import com.saksham.Billing.io.OrderRequest;
import com.saksham.Billing.io.OrderResponse;
import com.saksham.Billing.io.PaymentVerificationRequest;
import java.time.LocalDate;
import java.util.List;

public interface OrderService {

    OrderResponse createOrder(OrderRequest request);

    void deleteOrder(String orderId);

    List<OrderResponse> getLatestOrders();

    OrderResponse verifyPayment(PaymentVerificationRequest request);

    Double sumSalesBYDate(LocalDate date);

    Long countByOrderDate(LocalDate date);

    List<OrderResponse> findRecentOrders();
}
