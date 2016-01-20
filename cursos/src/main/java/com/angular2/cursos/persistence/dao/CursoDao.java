package com.angular2.cursos.persistence.dao;

import java.util.List;

import com.angular2.cursos.persistence.model.Curso;

/**
 * Dao de acceso a cursos en base de datos
 * @author Jaime Sánchez Force
 *
 */
public interface CursoDao {

	public void insert(Curso curso);
	
	public Curso selectById(long id);
	
	public List<Curso> selectByActivo(boolean activo);
	
}
