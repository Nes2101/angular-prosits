import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  username: string = 'Mohamed';

  count = signal<number>(0);

  imgUrl: string = 'https://www.ideematic.com/wp-content/uploads/2018/02/angular-js.png';

  onSave(): void {
    alert("Saved!");
  }

  increment(){
    this.count.update((val) => val + 1);
  }

 students=[
    {id:1, name:'Mohamed', age:20},
    {id:2, name:'Ali', age:22},
    {id:3, name:'Sara', age:21},
  ] ;
}
