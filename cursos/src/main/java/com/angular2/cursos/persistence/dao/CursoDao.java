package com.angular2.cursos.persistence.dao;

import java.util.List;

import com.angular2.cursos.persistence.model.Curso;

public interface CursoDao {

	public void insert(Curso curso);
	
	public Curso selectById(long id);
	
	public List<Curso> selectAll();
	
}
