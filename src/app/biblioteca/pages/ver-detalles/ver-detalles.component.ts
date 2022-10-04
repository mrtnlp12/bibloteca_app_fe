import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ver-detalles',
  templateUrl: './ver-detalles.component.html',
  styleUrls: ['./ver-detalles.component.css'],
})
export class VerDetallesComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {}

  goBack() {
    this.location.back();
  }
}
