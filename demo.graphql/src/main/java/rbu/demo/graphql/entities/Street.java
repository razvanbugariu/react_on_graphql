package rbu.demo.graphql.entities;

import javax.persistence.*;

@Entity
public class Street {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "street_id")
    private Long id;

    @Column(unique = true)
    private String streetName;
    private String townName;

    public Street() {
    }

    public Street(String streetName, String townName) {
        this.streetName = streetName;
        this.townName = townName;
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
