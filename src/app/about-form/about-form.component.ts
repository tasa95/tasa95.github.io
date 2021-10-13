import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-about-form',
  templateUrl: './about-form.component.html',
  styleUrls: ['./about-form.component.scss']
})
export class AboutFormComponent implements OnInit {


  tiles: Tile[] = [
    {text: 'Narwhal', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Logo', cols: 1, rows: 4, color: 'lightgreen'},
    {text: '1.35.2', cols: 3, rows: 1, color: 'lightpink'},
    {text: 'Medex 240 allée Jacques Monod 69800 Saint-Priest Cedex - France ', cols: 3, rows: 1, color: '#DDBDF1'},
    {text: 'UID : (01)020005140100789', cols: 3, rows: 1, color: '#D1AD11'},
  ];


  supportForm: FormGroup = this.formBuilder.group ({
    guerbetSales: '',
    technicalSupport: '',
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  submit(): void {

  }

}
