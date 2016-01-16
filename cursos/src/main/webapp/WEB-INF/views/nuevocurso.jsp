<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Nuevo curso</title>

<link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/estilos.css">
</head>
<body>
	<header class="container">
	<h2>Añadir Curso</h2>
	</header>
	<div class="container">

		<div class="row">

			<div class="col-sm-4">
				<label for="activo">Activo</label>
			</div>
			<div class="col-sm-8">
				<input type="checkbox" name="activo" id="activo" />
			</div>
		</div>
		<div class="row">

			<div class="col-sm-4">
				<label for="profesor">Profesor</label>
			</div>
			<div class="col-sm-8">
				<select type="profesor" name="profesor" id="profesor">
				</select>
			</div>
		</div>
		<div class="row">

			<div class="col-sm-4">
				<label for="titulo">Título</label>
			</div>
			<div class="col-sm-8">
				<input type="text" name="titulo" id="titulo" />
			</div>
		</div>
		<div class="row">

			<div class="col-sm-4">
				<label for=""nivel"">Nivel</label>
			</div>
			<div class="col-sm-8">
				<select name="nivel" id="nivel">
					<option value="BASICO">Básico</option>
					<option value="INTERMEDIO">Intermedio</option>
					<option value="AVANZADO">Avanzado</option>
				</select>
			</div>
		</div>
		<div class="row">

			<div class="col-sm-4">
				<label for="horas">Horas</label>
			</div>
			<div class="col-sm-8">
				<input type="number" name="horas" id="horas" min="1" value="1" />
			</div>
		</div>

		<div class="row">
			<div class="col-sm-12">
				<a href="nuevocurso" class="btn btn-success" title="Nuevo Curso">
					Nuevo Curso</a>
			</div>
		</div>
</body>
</html>