import {Component} from "@angular/core"
import {BaseNodeComponent} from "@jsplumbtoolkit/browser-ui-angular"
import {uuid } from "@jsplumbtoolkit/browser-ui"

@Component({
  template:`<div class="jtk-chatbot-test" data-jtk-target="true">
    <div class="jtk-delete" (click)="removeNode()"></div>
    {{obj['message']}}
    <div class="jtk-test-add" (click)="addChoice()"></div>
    <choice-option *ngFor="let choice of obj['choices']" [obj]="choice" [parent]="this"></choice-option>
  </div>`
})
export class TestComponent extends BaseNodeComponent {

  addChoice() {
    this.toolkit.setSelection(this.toolkit.addPort(this.getNode(), {
      id:uuid(),
      label:"Test"
    }))
  }

}
