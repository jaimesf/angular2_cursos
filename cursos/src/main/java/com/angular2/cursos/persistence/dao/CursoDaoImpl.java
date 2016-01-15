package com.angular2.cursos.persistence.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.persistence.model.Curso;


@Repository("cursoDao")
@Transactional(propagation = Propagation.REQUIRED)
public class CursoDaoImpl implements CursoDao{

	@PersistenceContext
	private EntityManager entityManager;

	@Transactional
	public void insert(Curso curso) {
		entityManager.persist(curso);
	}

	@Transactional
	public List<Curso> selectAll() {
		
		TypedQuery<Curso> query = entityManager.createQuery("SELECT c FROM Curso c JOIN FETCH c.profesor", Curso.class);

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
