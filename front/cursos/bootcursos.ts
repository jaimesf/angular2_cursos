import {bootstrap} from 'angular2/platform/browser'
import {CursosComponent} from './cursos.component'
import {CursosService} from './cursos.service'
import { HTTP_PROVIDERS } from 'angular2/http'

bootstrap(CursosComponent,[HTTP_PROVIDERS, CursosService]);
