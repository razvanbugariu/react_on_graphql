package rbu.demo.graphql.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private int number;
    private String familyName;

    public House() {
    }

    public House(int number, String familyName) {
        this.number = number;
        this.familyName = familyName;
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
}
