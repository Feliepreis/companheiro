
import { Component, OnInit } from '@angular/core';
import { CompanheiroService } from 'src/app/shared/service/companheiro.service';

@Component({
  selector: 'app-companheiro-list',
  templateUrl: './companheiro-list.component.html',
  styleUrls: ['./companheiro-list.component.css']
})
export class CompanheiroListComponent implements OnInit {
  companheiros: any;
  racas: any;
  breed_id: any=1;

constructor(private companheiroService: CompanheiroService) { }

  ngOnInit(): void {
    this.getCompanheiro()
    this.getRacas()
  }
  getCompanheiro() {
    this.companheiroService.getCompanheiro(this.breed_id).subscribe(res => this.companheiros = res)
  }
  getRacas() {
    this.companheiroService.getRacas().subscribe(res => this.racas = res)
  }

}
