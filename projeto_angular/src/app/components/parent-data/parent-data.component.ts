import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent {
  @Input() name: String = '';
  @Input() userData!: {email: String, role: String}; //! -> diz para o ts que o dado sera inicado 


  constructor (){}

  ngOnInit(): void {}
}
