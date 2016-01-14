package com.angular2.cursos.persistence.dao;

import java.util.List;

import com.angular2.cursos.persistence.model.Profesor;

public interface ProfesorDao {

	public List<Profesor> selectAll();
	
}
