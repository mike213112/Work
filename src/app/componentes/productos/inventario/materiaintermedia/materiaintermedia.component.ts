import { LoginService } from './../../../../services/login.service';
import { Intermedio } from './../../../../models/producto/intermedio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-materiaintermedia',
  templateUrl: './materiaintermedia.component.html',
  styleUrls: ['./materiaintermedia.component.scss']
})
export class MateriaintermediaComponent implements OnInit {

  ListarIntemedia: Intermedio[];

  public isLogged = false;

  constructor(private login: LoginService) { }

  ngOnInit(): void {
    this.login.ObtenerUsuario().subscribe( auth => {
      if (auth) {
        this.isLogged = true;
      }else {
        this.isLogged = false;
      }
    });
  }

  onClickLogout() {

  }

}
