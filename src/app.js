import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';
import {QuestionForm} from 'question/QuestionForm'

@Component({
	selector: 'app'
})
@View({
	template: `
		<h1>Hey, here's the form</h1>
		<question-form></question-form>
	`,
	directives: [QuestionForm]
	
})
export class App {
	
}

bootstrap(App);