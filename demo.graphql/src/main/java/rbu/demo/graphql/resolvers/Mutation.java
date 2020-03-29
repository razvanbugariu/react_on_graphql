package rbu.demo.graphql.resolvers;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import rbu.demo.graphql.entities.House;
import rbu.demo.graphql.repositories.HouseRepository;

@Component
public class Mutation implements GraphQLMutationResolver {

    private HouseRepository houseRepository;

    @Autowired
    public Mutation(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    public House saveHouse(int number, String familyName) {
        House house = new House(number, familyName);
        return houseRepository.save(house);
    }
}
