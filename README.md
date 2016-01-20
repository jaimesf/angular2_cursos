# angular2_example

Ejemplo de gestión básica de cursos, con spring, y Angular 2 en Typescript.

Pasos para su uso correcto:

* Ejecutar el archivo "createDatabase.sql" sobre la base de datos local.
* Ejecutar el archivo datos_iniciales.sql" sobre la base de datos creada en el punto anterior.
* Ejecutar el comando "mvn package" para empaquetar el proyecto correctamente.
* Desplegar el war generado en la carpeta target, en tomcat
* Iniciar la aplicación desde la url "http://localhost:8080/cursos"

Para el componente adicional de subida de archivos se puede usar Angular2 File Upload de https://valor-software.github.io/ng2-file-upload/
