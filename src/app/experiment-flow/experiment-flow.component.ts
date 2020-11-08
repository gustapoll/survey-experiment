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
