System.register(['angular2/platform/browser', './cursos.component', 'angular2/http'], function(exports_1) {
    var browser_1, cursos_component_1, http_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (cursos_component_1_1) {
                cursos_component_1 = cursos_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(cursos_component_1.CursosComponent, [http_1.HTTP_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=bootcursos.js.map