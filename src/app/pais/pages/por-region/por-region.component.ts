import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  // styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'AL'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {
    if (region === this.regionActiva) { return; }
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
      // .subscribe(paises => { console.log(paises); });
      .subscribe(paises => this.paises = paises);

    //TODO hacer el llamado al sericio

  }

}
