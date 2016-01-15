package com.angular2.cursos.persistence.dao;

import java.util.List;

import com.angular2.cursos.persistence.model.Profesor;

public interface ProfesorDao {

	public void insert(Profesor profesor);
	
	public Profesor selectById(long id);
	
	public List<Profesor> selectAll();
	
}
