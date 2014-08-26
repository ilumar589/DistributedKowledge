package org.distributed.knowledge.web.controllers;

import org.distributed.knowledge.services.AccountsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	private AccountsService accountService;

}
