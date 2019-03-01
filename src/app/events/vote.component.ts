import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'upvote',
    template: `
    <div class='votingContainer pointable' (click)='handleClick()'>
      <div class='well'>
        <i [style.color]='colorHeart' class='glyphicon glyphicon-heart'></i>
        <div class='badge badge-inverse'>
        <div>{{count}}</div>
        </div>
      </div>
    </div>
    `
})

export class VoteComponent {
    @Input() set voted(val) {
        this.colorHeart = val ? 'red' : 'white';
    }
    @Input() count: number;
    @Output() vote = new EventEmitter();
    colorHeart: string;


    handleClick() {
        this.vote.emit({});
    }
     
}

