package com.angular2.cursos.dto;


/**
 * Data Transfer Object utilizado en el alta de un nuevo curso
 * @author Jaime Sánchez Force
 *
 */
public class CursoDTO {

	private long id;

	private String titulo;
	private String nivel;
	private int horas;
	private boolean activo;
	private long profesorId;

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

	public boolean isActivo() {
		return activo;
	}

	public void setActivo(boolean activo) {
		this.activo = activo;
	}

	public long getProfesorId() {
		return profesorId;
	}

	public void setProfesorId(long profesorId) {
		this.profesorId = profesorId;
	}

}
