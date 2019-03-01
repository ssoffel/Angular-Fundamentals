import { Component } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
    <div class='well pointable' (click)='toggleVisibility()'>
    <button type='button' class='close'>&times;</button>
      <h4> 
       <ng-content select="[well-title]" ></ng-content>
      </h4>
      <ng-content *ngIf='isVisible' select='[well-body]'></ng-content>
    </div>
    `
    
})

export class CollapsibleWellComponent {
   
    isVisible: Boolean = true;


    toggleVisibility() {
        this.isVisible = !this.isVisible;
    }
}