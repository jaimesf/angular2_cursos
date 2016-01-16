package com.angular2.cursos.service;

import java.util.List;

import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

public interface CursoService {

	public List<Curso> getAllCursos();
	
	public Curso createCurso();
	
	public List<Profesor> getAllProfesores();
	
}
