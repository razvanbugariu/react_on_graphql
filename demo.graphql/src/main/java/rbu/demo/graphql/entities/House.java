package rbu.demo.graphql.entities;

import javax.persistence.*;

@Entity
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "house_id")
    private Long id;
    @Column(unique = true)
    private int number;
    private String familyName;
    @ManyToOne(optional = false)
    @JoinColumn(name = "street_id")
    private Street street;

    public House() {
    }

    public House(int number, String familyName, Street street) {
        this.number = number;
        this.familyName = familyName;
        this.street = street;
    }

    public Long getId() {
        return id;
    }

    public int getNumber() {
        return number;
    }

    public String getFamilyName() {
        return familyName;
    }

    public Street getStreet() {
        return street;
    }
}
