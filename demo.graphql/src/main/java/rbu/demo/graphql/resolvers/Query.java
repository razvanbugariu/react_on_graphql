package rbu.demo.graphql.resolvers;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import rbu.demo.graphql.entities.House;
import rbu.demo.graphql.entities.Street;
import rbu.demo.graphql.repositories.HouseRepository;
import rbu.demo.graphql.repositories.StreetRepository;

@Component
public class Query implements GraphQLQueryResolver {

    private StreetRepository streetRepository;
    private HouseRepository houseRepository;

    @Autowired
    public Query(HouseRepository houseRepository, StreetRepository streetRepository) {
        this.houseRepository = houseRepository;
        this.streetRepository = streetRepository;
    }

    public Iterable<Street> getStreets() {
        return streetRepository.findAll();
    }

    public Iterable<House> getHouses() {
        return houseRepository.findAll();
    }

    public House getHouseById(Long id) {
        return houseRepository.findById(id).get();
    }

    public long countHouses() {
        return houseRepository.count();
    }

    public long countStreets() {
        return streetRepository.count();
    }
}
