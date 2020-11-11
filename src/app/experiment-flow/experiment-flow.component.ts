import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-experiment-flow',
  templateUrl: './experiment-flow.component.html',
  styleUrls: ['./experiment-flow.component.scss']
})
export class ExperimentFlowComponent implements OnInit {

  legalAccept: boolean;
  nusp: number;

  themeList: string[] = [
    "Inteligência Artificial", "Rede Neural", "Redes de Computadores", "Aprendizado de Máquina", "Máquinas Térmicas",
    "Economia", "Agricultura de Precisão", "Microeletrônica", "Construção Civil", "Recursos Hídricos",
    "Empreendedorismo", "Visão Computacional", "Probabilidade", "Medicina", "Aeronáutica"
  ]

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log("register user")
    let record = {};
    record['nusp'] = this.nusp;
    record['legal_accept'] = this.legalAccept;
    this.loginService.addUser(record).then(resp => {
      //console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
