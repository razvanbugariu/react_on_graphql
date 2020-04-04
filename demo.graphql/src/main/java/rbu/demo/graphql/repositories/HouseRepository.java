package rbu.demo.graphql.repositories;

import org.springframework.data.repository.CrudRepository;
import rbu.demo.graphql.entities.House;

import java.util.List;

public interface HouseRepository extends CrudRepository<House, Long> {
    List<House> findByStreetId(Long id);
}
