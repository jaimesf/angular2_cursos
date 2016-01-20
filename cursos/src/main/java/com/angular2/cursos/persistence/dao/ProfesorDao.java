package com.angular2.cursos.persistence.dao;

import java.util.List;

import com.angular2.cursos.persistence.model.Profesor;

/**
 * Dao de acceso a profesores en base de datos
 * @author Jaime Sánchez Force
 *
 */
public interface ProfesorDao {

	public void insert(Profesor profesor);
	
	public Profesor selectById(long id);
	
	public List<Profesor> selectAll();
	
}
