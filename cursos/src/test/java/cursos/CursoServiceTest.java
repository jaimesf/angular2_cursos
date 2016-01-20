package cursos;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.dto.CursoDTO;
import com.angular2.cursos.persistence.dao.CursoDao;
import com.angular2.cursos.persistence.dao.ProfesorDao;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;
import com.angular2.cursos.service.CursoService;

/**
 * Test para servicio de cursos
 * @author Jaime Sánchez Force
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:spring-servlet.xml" })
public class CursoServiceTest {
	
	@Autowired
	CursoService cursoService;
	
	@Autowired
	CursoDao cursoDao;

	@Autowired
	ProfesorDao profesorDao;
	
	@Test
	@Transactional
    public void testSelectAllProfesores()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
         
        List<Profesor> profesores = cursoService.getAllProfesores();
        Assert.assertTrue(profesores.size()>0);
    }
	
	@Test
	@Transactional
    public void testCreateCursoActivo()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
		
		CursoDTO cursoDTOToInsert = new CursoDTO();
		cursoDTOToInsert.setActivo(true);
		cursoDTOToInsert.setHoras(1);
		cursoDTOToInsert.setNivel("Avanzado");
		cursoDTOToInsert.setProfesorId(testProfesor.getId());
		cursoDTOToInsert.setTitulo("Titulo de prueba");
		
		Curso inserted = cursoService.createCurso(cursoDTOToInsert);
         
        List<Curso> cursosActivos = cursoService.getCursosActivos();
        Assert.assertEquals(inserted.getId(), cursosActivos.get(cursosActivos.size()-1).getId());
    }
	
	@Test
	@Transactional
    public void testCreateCursoInactivo()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
		
		CursoDTO cursoDTOToInsert = new CursoDTO();
		cursoDTOToInsert.setActivo(false);
		cursoDTOToInsert.setHoras(1);
		cursoDTOToInsert.setNivel("Avanzado");
		cursoDTOToInsert.setProfesorId(testProfesor.getId());
		cursoDTOToInsert.setTitulo("Titulo de prueba");
		
		Curso inserted = cursoService.createCurso(cursoDTOToInsert);
         
        List<Curso> cursosActivos = cursoService.getCursosActivos();
        boolean encontrado = false;
        for(Curso cursoActivo : cursosActivos){
        	if(cursoActivo.getId()==inserted.getId())
        		encontrado = true;
        }
        Assert.assertFalse(encontrado);
    }

}
