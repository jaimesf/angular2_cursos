System.register(['angular2/platform/browser', './cursos.component'], function(exports_1) {
    var browser_1, cursos_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(cursos_component_1.CursosComponent);
        }
    }
});
//# sourceMappingURL=bootcursos.js.map