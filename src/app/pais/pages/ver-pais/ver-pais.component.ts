import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  // const url: string = "https://api.countrylayer.com/v2/alpha/PER";
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais => this.pais = pais);

  }

  // ngOnInit(): void {

  // this.activatedRoute.params
  //   // .subscribe(params => { // param completo
  //   .subscribe(({ id }) => { // param desestructurado
  //     console.log(id);
  //
  //     this.paisService.verPaisPorCodigo(id)
  //       .subscribe(pais => {
  //         console.log(pais)
  //       })
  // })

  //}

}
