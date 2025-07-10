package com.saksham.Billing.service;

import com.saksham.Billing.io.UserRequest;
import com.saksham.Billing.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest userRequest);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
