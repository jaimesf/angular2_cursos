package cursos;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import com.angular2.cursos.persistence.dao.CursoDao;
import com.angular2.cursos.persistence.dao.ProfesorDao;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({ "classpath:spring-servlet.xml" })
public class DataBaseTest {

	@Autowired
	CursoDao cursoDao;

	@Autowired
	ProfesorDao profesorDao;

	@Test
	@Transactional
    public void testInsertProfessor()
    {
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);
         
        List<Profesor> profesores = profesorDao.selectAll();
        Assert.assertEquals(testProfesor.getNombreApellidos(), profesores.get(profesores.size()-1).getNombreApellidos());
    }
	
	
	@Test
	@Transactional
	public void testInsertCurso() throws Exception {
		
		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez 2");
		
		Curso cursoTest = new Curso();
		cursoTest.setActivo(true);
		cursoTest.setHoras(12);
		cursoTest.setNivel("Alto");
		cursoTest.setTitulo("Titulo del test");
		cursoTest.setProfesor(testProfesor);
		
		cursoDao.insert(cursoTest);
		List<Curso> cursos = cursoDao.selectAll();
		
		Assert.assertEquals(cursoTest.getTitulo(), cursos.get(cursos.size()-1).getTitulo());
		
		

	}
	
	
}
