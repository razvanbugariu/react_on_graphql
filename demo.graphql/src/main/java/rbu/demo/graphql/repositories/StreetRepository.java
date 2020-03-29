package rbu.demo.graphql.repositories;

import org.springframework.data.repository.CrudRepository;
import rbu.demo.graphql.entities.Street;

public interface StreetRepository extends CrudRepository<Street, Long> {
}
