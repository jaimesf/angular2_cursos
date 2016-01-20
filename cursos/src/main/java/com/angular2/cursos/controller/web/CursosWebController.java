package com.angular2.cursos.controller.web;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Controlador que entrega la base para angular 2
 * @author Jaime Sánchez Force
 *
 */
@Controller
public class CursosWebController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String cursos(ModelMap model) {
		return "cursos";
	}
	
	
	
	
}
