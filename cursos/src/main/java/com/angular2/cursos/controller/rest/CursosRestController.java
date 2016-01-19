package com.angular2.cursos.controller.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.angular2.cursos.dto.CursoDTO;
import com.angular2.cursos.persistence.model.Curso;
import com.angular2.cursos.persistence.model.Profesor;
import com.angular2.cursos.service.CursoService;

@Controller
public class CursosRestController {

	@Autowired
	CursoService cursoService;
	
	
	@RequestMapping(value = "/getcursos", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public String getCursos(Model model)
    {
    	List<Curso> cursos = cursoService.getCursosActivos();
    	
    	
        model.addAttribute("cursos", cursos);
        
        return "jsonTemplate";
    }
	
	
	@RequestMapping(value = "/profesores", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.GET)
    public String getProfesores(Model model)
    {
    	List<Profesor> profesores = cursoService.getAllProfesores();
    	
    	
        model.addAttribute("profesores", profesores);
        
        return "jsonTemplate";
    }
	
	@RequestMapping(value = "/crearprofesor", produces = MediaType.APPLICATION_JSON_VALUE, method = RequestMethod.POST)
    public String crearCurso(@RequestBody CursoDTO curso,Model model)
    {
    	
    	Curso creado = cursoService.createCurso(curso);
    	if(creado.getId()!=0){
    		model.addAttribute("ok", true);
    	}else{
    		model.addAttribute("ok", false);
    	}
        
        return "jsonTemplate";
    }
	
	
}
