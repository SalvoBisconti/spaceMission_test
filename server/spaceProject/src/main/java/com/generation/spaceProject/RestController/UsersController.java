package com.generation.spaceProject.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.generation.spaceProject.Entity.Users;
import com.generation.spaceProject.Repository.UsersRepository;
import com.generation.spaceProject.Service.UsersService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/users")
public class UsersController {
	
	@Autowired
	UsersService usersService;
	
	@Autowired
	private UsersRepository usersRepo;
	
	
	
	@GetMapping
	public ResponseEntity<List<Users>> getAllUsers () {
		try {
            List<Users> users = usersService.getAll();

            return new ResponseEntity<>(users, HttpStatus.OK);

        } catch (DataAccessException e) {

            System.err.println("Errore findAll");
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
	
	
	
	
	@PostMapping("/login")
	public ResponseEntity<Map<String, Object>> userControl(@RequestBody Map<String, String> payload) {
	    Map<String, Object> response = new HashMap<>();
	    String email = payload.get("email");
	    String password = payload.get("password");
	    Users user = usersRepo.findByEmailAndPassword(email, password);
	    if (user != null) {
	        response.put("exists", true);
	        response.put("utente", user);
	    } else {
	        response.put("exists", false);
	    }
	    return new ResponseEntity<>(response, HttpStatus.OK);
	}
	}


