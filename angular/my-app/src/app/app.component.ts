import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
  <div>
    {{title}}
    {{sayHello()}}
    <div>
  `,*/
  styles: [`
   div{
     background-color:#def
   }
  `]
})
export class AppComponent {
  title = 'my-first-app';
  active = false;
  name='john';

  sayHello(){
    return 'hi there';
  }
  
  changeNameHandler(e:any){
    this.name=e.target.value;
  }

  submit(){
    console.log('submitting form');
  }
}
