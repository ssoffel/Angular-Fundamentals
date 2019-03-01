import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from './shared/event.model';
import { restrictedWords } from './shared/restricted-words.validator';
 
 

@Component({
    selector: 'create-session',
    templateUrl: './events-createSession.component.html',
    styles: [`
         em {float: right; color: #E05C65 }
        .error input { background-color: #E3C3C5; }
        .error select { background-color: #E3C3C5; }
        .error textarea { background-color: #E3C3C5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})

export class EventsCreateSessionComponent implements OnInit {
    newSessionForm: FormGroup;
    name;
    presenter;
    duration;
    level;
    abstract;
    @Output() saveEventSession =  new EventEmitter();
    @Output() cancelEventSession = new EventEmitter();
     

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(256), 
            restrictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract,
        })
    }
    handleSave(form) {
        let session: ISession = {
            id: undefined,
            name: form.name,
            presenter: form.presenter,
            duration: +form.duration,
            level: form.level,
            abstract: form.abstract,
            voters: []
        }
       
        this.saveEventSession.emit(session);
    }
  
    handleCancel() {
        this.cancelEventSession.emit();
    }
     

 } 