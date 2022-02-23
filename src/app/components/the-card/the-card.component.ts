import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit,
  TemplateRef, ViewChild,
  ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-the-card',
  templateUrl: './the-card.component.html',
  styleUrls: ['./the-card.component.css']
})
export class TheCardComponent implements OnInit, AfterViewInit {

  @Input() title: string = 'DEFAULT TITLE';
  @Input() content: string = 'default content';
  @Input() headerTemplateName: string | undefined;

  // @ts-ignore
  @ContentChild('custom', {static: false}) customFields: TemplateRef<any>

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
  }
}
