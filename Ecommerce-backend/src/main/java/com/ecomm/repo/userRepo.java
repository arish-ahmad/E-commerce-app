package com.ecomm.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ecomm.entity.User;




@Repository
public interface userRepo extends JpaRepository<User,Long> {
	
	@Query(value = "SELECT u.role FROM users u WHERE u.username = ?1 and u.password = ?2", nativeQuery = true)
	public String findRole(String username,String password);
	
	public User findByUsername(String username);

}
