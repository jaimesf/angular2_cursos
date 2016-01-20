<!DOCTYPE html>
<html>

<head>
<title>Angular 2 QuickStart</title>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
	crossorigin="anonymous">
<link rel="stylesheet" href="css/estilos.css">

<!-- 1. Load libraries -->
<script src="node_modules/es6-shim/es6-shim.js"></script>
<script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
<script src="node_modules/systemjs/dist/system.src.js"></script>
<script src="node_modules/rxjs/bundles/Rx.js"></script>
<script src="node_modules/angular2/bundles/angular2.dev.js"></script>
<script src="node_modules/ng2-table/ng2-table.js"></script>
<script src="node_modules/angular2/bundles/upgrade.dev.js"></script>
<script src="https://code.angularjs.org/tools/typescript.js"></script>
<script src="node_modules/angular2/bundles/http.dev.js"></script>



<!-- 2. Configure SystemJS -->
<script>
	System.config({
		packages : {
			rxjs : {
				defaultExtension : 'js'
			}, 
			cursos : {
				format : 'register',
				defaultExtension : 'js'
			},
			'ng2-bootstrap' : {},
			'ng2-table' : {}
		},
		map : {
			'ng2-bootstrap' : 'node_modules/ng2-bootstrap',
			'ng2-table' : 'node_modules/ng2-table',
			'rxjs' : 'node_modules/rxjs' // added this map section
		},
		paths : {
			'rxjs/operator/*' : 'node_modules/rxjs/add/operator/*.js',
			'rxjs/*' : 'node_modules/rxjs/*.js'
		}

	});
	System.import('cursos/bootcursos').then(null, console.error.bind(console));
</script>

</head>

<!-- 3. Display the application -->
<body>
	<cursos-activos>Loading...</cursos-activos>
</body>

</html>
