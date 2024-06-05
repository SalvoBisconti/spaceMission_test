package com.generation.spaceProject.RestController;

import java.util.List;

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

import com.generation.spaceProject.Entity.Shuttles;
import com.generation.spaceProject.Service.ShuttlesService;

@CrossOrigin("*")
@RestController
@RequestMapping("api/shuttles")
public class ShuttlesController {
	
	@Autowired
	ShuttlesService shuttlesService;

	
	@GetMapping
    public ResponseEntity<List<Shuttles>> getAllShuttles(){
        try {
             List<Shuttles> shuttles = shuttlesService.getAll();

             return new ResponseEntity<>(shuttles, HttpStatus.OK);

         } catch (DataAccessException e) {

             System.err.println("Errore su getAll in shuttles");
             return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
         }
     }
    
    
    
	@PostMapping("/add") 
		public ResponseEntity<Shuttles> addShuttle(@RequestBody Shuttles shuttle){
		if(shuttle.getName() == null || shuttle.getMission().isEmpty()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);	
		}
		shuttlesService.addShuttle(shuttle);
		return new ResponseEntity<>(shuttle, HttpStatus.CREATED);
		}
}



