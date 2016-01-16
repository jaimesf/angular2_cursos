package com.angular2.cursos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.angular2.cursos.persistence.dao.CursoDao;
import com.angular2.cursos.persistence.dao.ProfesorDao;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

@Service
public class CursoServiceImpl implements CursoService{

	@Autowired
	CursoDao cursoDao;
	
	@Autowired
	ProfesorDao profesorDao;
	
	@Override
	public List<Curso> getAllCursos() {
		return cursoDao.selectAll();
	}

	@Override
	public Curso createCurso() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Profesor> getAllProfesores() {
		// TODO Auto-generated method stub
		return profesorDao.selectAll();
	}

	

}
