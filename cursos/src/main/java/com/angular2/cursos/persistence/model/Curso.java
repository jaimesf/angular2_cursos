package com.angular2.cursos.persistence.model;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Representa un Curso en la base de datos
 * @author Jaime Sánchez Force
 *
 */
@Entity
@Table(name = "curso")
public class Curso implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 3520007943995079320L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private long id;
	
	@Column(name = "titulo")
	private String titulo;
	
	@Column(name = "nivel")
	private String nivel;
	
	@Column(name = "horas")
	private int horas;
	
	@Column(name = "activo")
	private boolean activo;
	
	@ManyToOne(targetEntity = Profesor.class, cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "profesor_id")
	private Profesor profesor;
	
	@Column(name = "nombre_archivo")
	private String nombreArchivo;
	
	@JsonIgnore
	@Lob
	@Column(name="documento_blob",length=10000000)
	private byte[] documento;

	
	public Curso() {
		super();
	}
	
	public Curso(String titulo, String nivel, int horas, boolean activo, Profesor profesor) {
		super();
		this.titulo = titulo;
		this.nivel = nivel;
		this.horas = horas;
		this.activo = activo;
		this.profesor = profesor;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public String getNivel() {
		return nivel;
	}

	public void setNivel(String nivel) {
		this.nivel = nivel;
	}

	public int getHoras() {
		return horas;
	}

	public void setHoras(int horas) {
		this.horas = horas;
	}

	public boolean getActivo() {
		return activo;
	}

	public void setActivo(boolean activo) {
		this.activo = activo;
	}

	public Profesor getProfesor() {
		return profesor;
	}

	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}

}
