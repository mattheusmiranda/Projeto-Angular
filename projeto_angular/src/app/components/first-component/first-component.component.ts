import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
  name: String = 'Matheus';
  age: number = 17;
  job = "Programador";
  hobbies = ["Pedalar", "Caminhar", "Andar de bike"];
  carro = {
    name: "Corolla",
    ano: 2017
  }

  constructor (){}

  ngOnInit(): void {}


}
