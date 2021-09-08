package net.guides.springboot2.crud.controller;

import net.guides.springboot2.crud.exception.ResourceNotFoundException;
import net.guides.springboot2.crud.model.Todo;
import net.guides.springboot2.crud.repository.TodoRepository;
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
public class TodoController {
	@Autowired
	private TodoRepository todoRepository;

	@GetMapping("/todos")
	public List<Todo> getAllTodos() {
		return todoRepository.findAll();
	}

	@GetMapping("/todos/{id}")
	public ResponseEntity<Todo> getTodoById(@PathVariable(value = "id") Long todoId)
			throws ResourceNotFoundException {
		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));
		return ResponseEntity.ok().body(todo);
	}

	@PostMapping("/todos")
	public Todo createTodo(@Valid @RequestBody Todo todo) {
		return todoRepository.save(todo);
	}

	@PutMapping("/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable(value = "id") Long todoId,
			@Valid @RequestBody Todo todoDetails) throws ResourceNotFoundException {
		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));


		todo.setIsDone(todoDetails.getIsDone());
		todo.setValue(todoDetails.getValue());
		final Todo updatedTodo = todoRepository.save(todo);
		return ResponseEntity.ok(updatedTodo);
	}

	@DeleteMapping("/todos/{id}")
	public Map<String, Boolean> deleteTodo(@PathVariable(value = "id") Long todoId)
			throws ResourceNotFoundException {
		Todo todo = todoRepository.findById(todoId)
				.orElseThrow(() -> new ResourceNotFoundException("Todo not found for this id :: " + todoId));

		todoRepository.delete(todo);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
