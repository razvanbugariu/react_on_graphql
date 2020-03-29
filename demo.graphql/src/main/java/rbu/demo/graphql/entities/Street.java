package rbu.demo.graphql.entities;

import rbu.demo.graphql.entities.House;

import javax.persistence.*;
import java.util.List;

@Entity
public class Street {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String streetName;
    private String townName;
    @OneToMany(fetch = FetchType.EAGER)
    private List<House> houses;

    public Street() {
    }

    public Street(String streetName, String townName, List<House> houses) {
        this.streetName = streetName;
        this.townName = townName;
        this.houses = houses;
    }

    public List<House> getHouses() {
        return houses;
    }

    public String getStreetName() {
        return streetName;
    }

    public String getTownName() {
        return townName;
    }

    public Long getId() {
        return id;
    }
}
