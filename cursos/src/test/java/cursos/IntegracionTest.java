package cursos;

import static org.hamcrest.Matchers.greaterThanOrEqualTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import com.angular2.cursos.persistence.dao.CursoDao;
import com.angular2.cursos.persistence.dao.ProfesorDao;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;

import net.minidev.json.JSONObject;

/**
 * Test de integracion para servicios ajax
 * @author Jaime Sánchez Force
 *
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration({ "classpath:spring-servlet.xml" })
public class IntegracionTest {

	@Autowired
	CursoDao cursoDao;

	@Autowired
	ProfesorDao profesorDao;

	

	@Autowired
	WebApplicationContext wac;
	@Autowired
	MockHttpSession session;
	@Autowired
	MockHttpServletRequest request;

	private MockMvc mockMvc;

	@Before
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
	}

	@Test
	@Transactional
	public void testSelectAllProfesores() throws Exception {

		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);

		mockMvc.perform(get("/profesores")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.profesores", hasSize(greaterThanOrEqualTo(1))));
		/*
		 * .andExpect(jsonPath("$.profesores[-1:].id",
		 * is((int)testProfesor.getId())));
		 * .andExpect(jsonPath("$.profesores[-1:].nombreApellidos",
		 * is(testProfesor.getNombreApellidos())));
		 */

	}

	@Test
	@Transactional
	public void testSelectAllCursosActivos() throws Exception {

		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");

		Curso cursoTest = new Curso();
		cursoTest.setActivo(true);
		cursoTest.setHoras(12);
		cursoTest.setNivel("Alto");
		cursoTest.setTitulo("Titulo del test");
		cursoTest.setProfesor(testProfesor);

		cursoDao.insert(cursoTest);

		mockMvc.perform(get("/getcursos")).andExpect(status().isOk())
				.andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.cursos", hasSize(greaterThanOrEqualTo(1))));
		/*
		 * .andExpect(jsonPath("$.cursos[-1:].id", is((int)cursoTest.getId())));
		 * .andExpect(jsonPath("$.cursos[-1:].titulo",
		 * is(cursoTest.getTitulo())));
		 */

	}

	@Test
	@Transactional
	public void testCreateCurso() throws Exception {

		Profesor testProfesor = new Profesor();
		testProfesor.setNombreApellidos("Jaime Sanchez");
		profesorDao.insert(testProfesor);

		JSONObject data = new JSONObject();
		data.put("titulo", "Titulo");
		data.put("horas", 12);
		data.put("activo", true);
		data.put("nivel", "Avanzado");
		data.put("profesorId", (int) testProfesor.getId());
		String datos = data.toJSONString();
		
		
		mockMvc.perform(post("/crearcurso").contentType(MediaType.APPLICATION_JSON_VALUE).content(datos.getBytes()))
				.andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(jsonPath("$.ok", is(true)));

	}

}
