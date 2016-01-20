package com.angular2.cursos.service;

import java.util.List;

import com.angular2.cursos.dto.CursoDTO;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

/**
 * Servicio para los cursos
 * @author Jaime Sánchez Force
 *
 */
public interface CursoService {

	public List<Curso> getCursosActivos();
	
	public Curso createCurso(CursoDTO curso);
	
	public List<Profesor> getAllProfesores();
	
}
