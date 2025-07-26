package com.saksham.Billing.service;

import com.razorpay.RazorpayException;
import com.saksham.Billing.io.RazorpayOrderResponse;

public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;


}
