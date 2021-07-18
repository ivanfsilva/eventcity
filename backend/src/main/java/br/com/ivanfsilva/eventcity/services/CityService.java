package br.com.ivanfsilva.eventcity.services;

import br.com.ivanfsilva.eventcity.dto.CityDTO;
import br.com.ivanfsilva.eventcity.entities.City;
import br.com.ivanfsilva.eventcity.repositories.CityRepository;
import br.com.ivanfsilva.eventcity.services.exceptions.DatabaseException;
import br.com.ivanfsilva.eventcity.services.exceptions.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CityService {

    @Autowired
    private CityRepository repository;

    @Transactional(readOnly = true)
    public List<CityDTO> findAllCities() {
        List<City> list = repository.findAll(Sort.by("name"));
        return list.stream().map(c -> new CityDTO(c)).collect(Collectors.toList());
    }

    public void delete(Long id) {
        try {
            repository.deleteById(id);
        } catch (EmptyResultDataAccessException e) {
            throw new ResourceNotFoundException("id não encontrado " + id);
        } catch (DataIntegrityViolationException e) {
            throw new DatabaseException("Integridade violada");
        }
    }
}
