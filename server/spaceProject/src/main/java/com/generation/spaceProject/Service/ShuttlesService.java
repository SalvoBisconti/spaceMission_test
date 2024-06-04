package com.generation.spaceProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.generation.spaceProject.Entity.Shuttles;
import com.generation.spaceProject.Repository.ShuttlesRepository;

@Service
public class ShuttlesService {
	
	@Autowired
	ShuttlesRepository shuttlesRepo;
	
	public List<Shuttles> getAll() {
		   List<Shuttles> shuttles = shuttlesRepo.findAll();
		    return shuttles;
		}

	
	public void addShuttle(Shuttles shuttle) {
		shuttlesRepo.save(shuttle);
	}
	
	
}
