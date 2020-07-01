import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'work-intermedio',
  templateUrl: './intermedio.component.html',
  styleUrls: ['./intermedio.component.scss']
})
export class IntermedioComponent implements OnInit {

  public isLogged = false;

  constructor(private autenticar: LoginService) { }

  ngOnInit(): void {
    this.autenticar.ObtenerUsuario().subscribe(auth => {
      if(auth){
        this.isLogged = true;
      }else{
        this.isLogged = false;
      }
    });
  }

  onClickLogout(){
    
  }

}
