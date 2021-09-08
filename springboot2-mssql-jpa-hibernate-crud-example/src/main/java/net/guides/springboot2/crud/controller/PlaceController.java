package net.guides.springboot2.crud.controller;

import net.guides.springboot2.crud.exception.ResourceNotFoundException;
import net.guides.springboot2.crud.model.Place;
import net.guides.springboot2.crud.repository.PlaceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PlaceController {
	@Autowired
	private PlaceRepository placeRepository;

	@GetMapping("/places")
	public List<Place> getAllPlaces() {
		return placeRepository.findAll();
	}

	@GetMapping("/places/{id}")
	public ResponseEntity<Place> getPlaceById(@PathVariable(value = "id") Long placeId)
			throws ResourceNotFoundException {
		Place place = placeRepository.findById(placeId)
				.orElseThrow(() -> new ResourceNotFoundException("Place not found for this id :: " + placeId));
		return ResponseEntity.ok().body(place);
	}

	@PostMapping("/places")
	public Place createPlace(@Valid @RequestBody Place place) {
		return placeRepository.save(place);
	}

	@PutMapping("/places/{id}")
	public ResponseEntity<Place> updatePlace(@PathVariable(value = "id") Long placeId,
			@Valid @RequestBody Place placeDetails) throws ResourceNotFoundException {
		Place place = placeRepository.findById(placeId)
				.orElseThrow(() -> new ResourceNotFoundException("Place not found for this id :: " + placeId));

		place.setComment(placeDetails.getComment());
		place.setCountry(placeDetails.getCountry());
		place.setName(placeDetails.getName());
		final Place updatedPlace = placeRepository.save(place);
		return ResponseEntity.ok(updatedPlace);
	}

	@DeleteMapping("/places/{id}")
	public Map<String, Boolean> deletePlace(@PathVariable(value = "id") Long placeId)
			throws ResourceNotFoundException {
		Place place = placeRepository.findById(placeId)
				.orElseThrow(() -> new ResourceNotFoundException("Place not found for this id :: " + placeId));

		placeRepository.delete(place);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
