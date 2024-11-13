import {Component, inject} from '@angular/core';
import {ViacepService} from './viacep.service';
import {Endereco} from './endereco';

@Component({
  selector: 'app-viacep',
  standalone: true,
  imports: [],
  templateUrl: './viacep.component.html',
  styleUrl: './viacep.component.css'
})
export class ViacepComponent {

  private cep!: string;
  private viaCepService = inject(ViacepService);


  onConsultaCep() {
    this.cep = '85900180';
    this.viaCepService.consultarCep(this.cep).subscribe(
      {
        next: (endereco:Endereco)=> {
          console.log(endereco);
        },
        error: (error: any) => {
          console.error(error);
        }
      }
    )
  }
}
