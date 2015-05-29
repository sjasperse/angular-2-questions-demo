import {ComponentAnnotation as Component, ViewAnnotation as View, bootstrap} from 'angular2/angular2';

export class QuestionStore {
	questions: Array<string>;
	
	constructor() {
		this.questions =[];
	}
}