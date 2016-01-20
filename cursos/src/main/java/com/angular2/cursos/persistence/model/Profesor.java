package com.angular2.cursos.persistence.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Representa un profesor en la base de datos
 * @author seJaime Sánchez Forcetag
 *
 */
@Entity
@Table(name = "profesor")
public class Profesor implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -5211528486433559590L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "nombre_apellidos")
	private String nombreApellidos;

	public Profesor() {
		super();
	}
	
	public Profesor(String nombreApellidos) {
		super();
		this.nombreApellidos = nombreApellidos;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getNombreApellidos() {
		return nombreApellidos;
	}

	public void setNombreApellidos(String nombreApellidos) {
		this.nombreApellidos = nombreApellidos;
	}
	
	

}
