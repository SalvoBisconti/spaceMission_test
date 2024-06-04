package com.generation.spaceProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.generation.spaceProject.Entity.Users;
import com.generation.spaceProject.Repository.UsersRepository;

@Service
public class UsersService {
	
	@Autowired
	UsersRepository usersRepo;
	
	
	public List<Users> getAll() {
		List<Users> user = usersRepo.findAll();
		return user;
	}
	
	

}
