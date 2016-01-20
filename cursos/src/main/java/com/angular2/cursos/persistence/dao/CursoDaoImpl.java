package com.angular2.cursos.persistence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

/**
 * Implementacion de dao de acceso a cursos
 * @author Jaime Sánchez Force
 *
 */
@Repository("cursoDao")
@Transactional(propagation = Propagation.REQUIRED)
public class CursoDaoImpl implements CursoDao{

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public void insert(Curso curso) {
		Profesor toMerge = curso.getProfesor();
		toMerge = entityManager.merge(toMerge);
		curso.setProfesor(toMerge);
		entityManager.persist(curso);
	}

	@Transactional
	public List<Curso> selectByActivo(boolean activo) {
		
		TypedQuery<Curso> query = entityManager.createQuery("SELECT c FROM Curso c JOIN FETCH c.profesor where c.activo = "+activo, Curso.class);

		List<Curso> cursos =query.getResultList();
		return cursos;
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public Curso selectById(long id) {
		return entityManager.find(Curso.class, id);
	}

}
