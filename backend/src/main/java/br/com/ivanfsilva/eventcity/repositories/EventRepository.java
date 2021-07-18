package br.com.ivanfsilva.eventcity.repositories;

import br.com.ivanfsilva.eventcity.entities.Event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
