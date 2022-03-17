import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angel';
  age = 22;
  image = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person = {
    name: 'Luis',
    age: 26,
    avatar: 'https://source.unsplash.com/random'
  }

  toogleButton() {
    this.btnDisabled = !this.btnDisabled
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
