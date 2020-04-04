package rbu.demo.graphql;

import com.github.javafaker.Faker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import rbu.demo.graphql.entities.House;
import rbu.demo.graphql.entities.Street;
import rbu.demo.graphql.repositories.HouseRepository;
import rbu.demo.graphql.repositories.StreetRepository;

import javax.annotation.PostConstruct;
import java.util.Arrays;

@Component
public class PreloadDataComponent {

    @Autowired
    private HouseRepository houseRepository;
    @Autowired
    private StreetRepository streetRepository;

    @PostConstruct
    public void loadDate() {
        System.out.println("Loading streets....");

        Street street1 = new Street(new Faker().address().streetName(), "BugariuVille");
        Street street2 = new Street(new Faker().address().streetName(), "BugariuVille");

        streetRepository.saveAll(Arrays.asList(street1, street2));

        System.out.println("Successfully louded streets");

        System.out.println("Loading some house....");

        House house1 = new House(1, new Faker().name().lastName(), street1);
        House house2 = new House(2, new Faker().name().lastName(), street1);
        House house3 = new House(3, new Faker().name().lastName(), street2);
        House house4 = new House(4, new Faker().name().lastName(), street2);
        House house5 = new House(5, new Faker().name().lastName(), street2);

        houseRepository.saveAll(Arrays.asList(house1, house2, house3, house4, house5));

        System.out.println("Successfully loaded houses");

    }
}
