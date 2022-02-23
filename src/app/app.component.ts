import { Component } from '@angular/core';

const template = `
  <div class="flex">
    <app-the-card title="hello" content="hello" headerTemplateName="heartHeader">
         <ng-template #custom let-title>
           <header class="custom-card__header">
            <span>❤</span> {{ title }}
           </header>
         </ng-template>
    </app-the-card>
    <app-the-card title="hello" content="hello"></app-the-card>
  </div>
`

const styles = [`
  .flex {
    display: flex;
    row-gap: 20px;
    flex-direction: column;
  }

  .custom-card__header {
    font-size: 1.2rem;
    text-transform: uppercase;
    border-bottom: 1px solid #000;
  }

  .custom-card__header>span {
    font-size: 1.2rem;
    color: red;
  }
  `
]

@Component({
  selector: 'app-root',
  template,
  styles
})
export class AppComponent {
  title = 'ng-template-outlet-example';
}

