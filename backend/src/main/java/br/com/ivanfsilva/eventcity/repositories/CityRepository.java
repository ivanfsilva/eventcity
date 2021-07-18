package br.com.ivanfsilva.eventcity.repositories;

import br.com.ivanfsilva.eventcity.entities.City;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {
}
