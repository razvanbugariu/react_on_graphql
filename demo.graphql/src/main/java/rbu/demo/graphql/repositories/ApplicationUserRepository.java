package rbu.demo.graphql.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import rbu.demo.graphql.entities.ApplicationUser;

public interface ApplicationUserRepository extends JpaRepository<ApplicationUser, Long> {
    ApplicationUser findByUsername(String username);
}