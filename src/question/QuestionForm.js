import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap, For} from 'angular2/angular2';
import {QuestionStore} from './QuestionStore';

@Component({
	selector: 'question-form',
	injectables: [QuestionStore]
})
@View({
	template: `
		<input #my-question type="text" />
		<button (click)="askQuestion(myQuestion.value)"> Ask away</button>
		<ul>
			<li *for="#q of questionStore.questions">{{ q }}</li>
		</ul>
	`,
	directives: [For]
})
export class QuestionForm {
	questionStore: QuestionStore;
	
	constructor(qs:QuestionStore) {
		this.questionStore = qs;
	}
	
	askQuestion(question: string) {
		this.questionStore.questions.push(question);
	}
}