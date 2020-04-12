package rbu.demo.graphql.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import rbu.demo.graphql.entities.House;
import rbu.demo.graphql.repositories.HouseRepository;

import java.util.List;

@RestController
public class HouseController {

    private HouseRepository houseRepository;

    @Autowired
    public HouseController(HouseRepository houseRepository) {
        this.houseRepository = houseRepository;
    }

    @GetMapping("/houses")
    public Iterable<House> getHouses() {
        return houseRepository.findAll();
    }

    @GetMapping(value = "/houses/byStreet/{streetId}")
    public List<House> getHousesByStreetId(@PathVariable Long streetId) {
        return houseRepository.findByStreetId(streetId);
    }
}
