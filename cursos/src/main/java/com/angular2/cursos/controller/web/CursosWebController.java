package com.angular2.cursos.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CursosWebController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String cursos(ModelMap model) {
		return "cursos";
	}
	
	@RequestMapping(value = "/nuevocurso", method = RequestMethod.GET)
	public String nuevoCurso(ModelMap model) {
		return "nuevocurso";
	}
	
	
}
