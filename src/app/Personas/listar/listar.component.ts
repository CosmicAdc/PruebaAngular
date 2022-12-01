import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personas } from 'src/app/Domain/Personas';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  listaPersonas=new Array()
  personas: any;
  constructor(private router: Router, private personasService:ServicesService) { }


  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(){
    this.personas=this.personasService.getPersonasFire()
  }

  }
