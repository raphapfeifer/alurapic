import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: "https://st.depositphotos.com/1020341/4233/i/450/depositphotos_42333899-stock-photo-portrait-of-huge-beautiful-male.jpg",
      description: "Leão"
    },
    {
      url:"https://cdn.cloudcoaching.com.br/wp-content/uploads/2019/01/os-tres-leoes-uma-historia-sobre-superacao-e-lideranca-1200x628.png.webp",
      description: "Leões"
    }
  ];
}
