package br.com.ivanfsilva.eventcity.services;

import br.com.ivanfsilva.eventcity.dto.EventDTO;
import br.com.ivanfsilva.eventcity.entities.City;
import br.com.ivanfsilva.eventcity.entities.Event;
import br.com.ivanfsilva.eventcity.repositories.EventRepository;
import br.com.ivanfsilva.eventcity.services.exceptions.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;

@Service
public class EventService {

    @Autowired
    private EventRepository repository;

    @Transactional
    public EventDTO update(Long id, EventDTO dto) {
        try {
            Event entity = repository.getOne(id);
            entity.setName(dto.getName());
            entity.setCity(new City(7L, "Tatooine"));
            entity.setDate(dto.getDate());
            entity.setUrl(dto.getUrl());
            entity = repository.save(entity);
            return new EventDTO(entity);
        } catch (EntityNotFoundException e) {
            throw new ResourceNotFoundException("id não encontrado " + id);
        }
    }
}
