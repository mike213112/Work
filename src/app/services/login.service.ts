import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public afAuth: AngularFireAuth) { }

  Login(email: string, pass: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject(err));
    });
  }

  ObtenerUsuario(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  Logout(){
    return this.afAuth.auth.signOut();
  }


}
