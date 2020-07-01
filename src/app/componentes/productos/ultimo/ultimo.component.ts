import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'work-ultimo',
  templateUrl: './ultimo.component.html',
  styleUrls: ['./ultimo.component.scss']
})
export class UltimoComponent implements OnInit {

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
