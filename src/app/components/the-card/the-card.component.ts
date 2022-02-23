import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  Input,
  OnInit, QueryList,
  TemplateRef, ViewChild,
  ViewChildren
} from '@angular/core';
import {Template} from "@angular/compiler/src/render3/r3_ast";

@Component({
  selector: 'app-the-card',
  templateUrl: './the-card.component.html',
  styleUrls: ['./the-card.component.css']
})
export class TheCardComponent implements OnInit, AfterViewInit {
  private templates: {name: string, template: TemplateRef<unknown>}[] = []
  template!: TemplateRef<any>

  @Input() title: string = 'DEFAULT TITLE';
  @Input() content: string = 'default content';
  @Input() headerTemplateName: string | undefined;

  // @ts-ignore
  @ContentChild('defaultHeader') defaultHeader: TemplateRef<unknown>;

  // @ts-ignore
  @ContentChildren(TemplateRef, {static: true, read: TemplateRef}) children: QueryList<TemplateRef>[]

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // @ts-ignore
    this.children.map((query: TemplateRef<unknown>) => {
      // @ts-ignore
      const name = query._declarationTContainer.localNames[0]

      if(name === this.headerTemplateName) {
        this.template = query
      }
      // @ts-ignore
      //this.templates.push({name: query._declarationTContainer.localNames[0], template: query})
    })
  }

  get getTemplate(): TemplateRef<unknown> {
    const _template = this.templates.find((template) => template.name === this.headerTemplateName)
    debugger;

    if(!_template) {
      return this.defaultHeader
    }
    // @ts-ignore
    return _template.template
  }
}
