package com.generation.spaceProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.generation.spaceProject.Entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	
	Users findByEmailAndPassword(String email, String password);

}
