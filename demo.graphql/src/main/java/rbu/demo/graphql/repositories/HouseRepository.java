package rbu.demo.graphql.repositories;

import org.springframework.data.repository.CrudRepository;
import rbu.demo.graphql.entities.House;

public interface HouseRepository extends CrudRepository<House, Long> {
}
