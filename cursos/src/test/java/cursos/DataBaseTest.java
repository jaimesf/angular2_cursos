package cursos;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.persistence.dao.CursoDao;
import com.angular2.cursos.persistence.dao.ProfesorDao;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

/**
 * Test para acceso a base de datos
 * @author Jaime Sánchez Force
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ "classpath:spring-servlet.xml" })
public class DataBaseTest {

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
         
        List<Profesor> profesores = profesorDao.selectAll();
        Assert.assertTrue(profesores.size()>0);
    }
	
	@Test
	@Transactional
    public void testInsertProfessor()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
         
        List<Profesor> profesores = profesorDao.selectAll();
        Assert.assertEquals(testProfesor.getId(), profesores.get(profesores.size()-1).getId());
    }
	
	@Test
	@Transactional
    public void testSelectProfessorById()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
         
        Profesor profesorById = profesorDao.selectById(testProfesor.getId());
        Assert.assertEquals(testProfesor.getId(), profesorById.getId());
    }
	
	
	@Test
	@Transactional
	public void testInsertCursoActivo() throws Exception {
		
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez 2");
		
		Curso cursoTest = new Curso();
		cursoTest.setActivo(true);
		cursoTest.setHoras(12);
		cursoTest.setNivel("Alto");
		cursoTest.setTitulo("Titulo del test");
		cursoTest.setProfesor(testProfesor);
		
		cursoDao.insert(cursoTest);
		List<Curso> cursos = cursoDao.selectByActivo(true);
		
		Assert.assertEquals(cursoTest.getId(), cursos.get(cursos.size()-1).getId());
		
		

	}
	
	@Test
	@Transactional
	public void testInsertCursoInactivo() throws Exception {
		
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez 2");
		
		Curso cursoTest = new Curso();
		cursoTest.setActivo(false);
		cursoTest.setHoras(12);
		cursoTest.setNivel("Alto");
		cursoTest.setTitulo("Titulo del test");
		cursoTest.setProfesor(testProfesor);
		
		cursoDao.insert(cursoTest);
		List<Curso> cursos = cursoDao.selectByActivo(true);
		
		Assert.assertNotEquals(cursoTest.getId(), cursos.get(cursos.size()-1).getId());

	}
	
	
}
