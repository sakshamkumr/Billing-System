package com.saksham.Billing.controller;

import com.razorpay.RazorpayException;
import com.saksham.Billing.io.PaymentRequest;
import com.saksham.Billing.io.RazorpayOrderResponse;
import com.saksham.Billing.service.OrderService;
import com.saksham.Billing.service.RazorpayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final RazorpayService razorpayService;

    private final OrderService orderService;
    @PostMapping("/create-order")
    @ResponseStatus(HttpStatus.CREATED)
    public RazorpayOrderResponse createRazorpayOrder(@RequestBody PaymentRequest request)  throws RazorpayException {
        return razorpayService.createOrder(request.getAmount(), request.getCurrency());
    }



}
