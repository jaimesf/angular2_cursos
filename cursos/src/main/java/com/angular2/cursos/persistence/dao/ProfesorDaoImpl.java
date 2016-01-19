package com.angular2.cursos.persistence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.persistence.model.Profesor;

@Repository("profesorDao")
@Transactional(propagation = Propagation.REQUIRED)
public class ProfesorDaoImpl implements ProfesorDao {

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public List<Profesor> selectAll() {
		TypedQuery<Profesor> query = entityManager.createQuery("SELECT p FROM Profesor as p", Profesor.class);
		List<Profesor> profesores = (List<Profesor>) query.getResultList();
		return profesores;
	}

	public EntityManager getEntityManager() {
		return entityManager;
	}

	public void setEntityManager(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@Override
	public void insert(Profesor profesor) {
		entityManager.persist(profesor);

	}

	@Override
	public Profesor selectById(long id) {
		return entityManager.find(Profesor.class, id);
	}

}
