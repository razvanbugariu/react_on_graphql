package rbu.demo.graphql.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import rbu.demo.graphql.entities.House;
import rbu.demo.graphql.entities.Street;
import rbu.demo.graphql.repositories.HouseRepository;
import rbu.demo.graphql.repositories.StreetRepository;

@Component
public class Mutation implements GraphQLMutationResolver {

    private HouseRepository houseRepository;
    private StreetRepository streetRepository;

    @Autowired
    public Mutation(HouseRepository houseRepository, StreetRepository streetRepository) {
        this.houseRepository = houseRepository;
        this.streetRepository = streetRepository;
    }

    public House saveHouse(int number, String familyName, Long streetId) {
        Street street = streetRepository.findById(streetId).orElseThrow(IllegalArgumentException::new);
        House house = new House(number, familyName, street);
        return houseRepository.save(house);
    }
}
