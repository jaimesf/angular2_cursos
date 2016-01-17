<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

  <head>
    <title>Angular 2 QuickStart</title>

	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="css/estilos.css">

    <!-- 1. Load libraries -->
    <script src="js/node_modules/angular2/bundles/angular2-polyfills.js"></script>
    <script src="js/node_modules/systemjs/dist/system.src.js"></script>
    <script src="js/node_modules/rxjs/bundles/Rx.js"></script>
    <script src="js/node_modules/angular2/bundles/angular2.dev.js"></script>

    <!-- 2. Configure SystemJS -->
    <script>
        System.config({
          packages: {
            js: {
              format: 'register',
              defaultExtension: 'js'
            }
          }
        });
        System.import('js/bootcursos')
              .then(null, console.error.bind(console));
      </script>

  </head>

  <!-- 3. Display the application -->
  <body>
    <cursos-activos>Loading...</cursos-activos>
  </body>

</html>