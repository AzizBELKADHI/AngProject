import { Injectable } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Utilisateur } from '../model/Utilisateur';
import { AuthControl } from 'app/pages/login/control/auth.control';


declare var swal: any;

@Injectable()
export class ResetControl {

  data: any = null;
  user = new Utilisateur(null, null, null, null, null, null, null, null, null, null);


  constructor(private auth: AuthService) { }
  logged: boolean = false;

  public isLogged(): boolean {
    return this.logged;
  }


  public reset(email: string) {
    this.auth.readMail('send-mail/mail?email', email).subscribe(
      data => this.data = data,
      err => {
        console.log(err)
        swal({
          type: 'error',
          title: 'Adresse email introuvable',
          text: 'Vous avez saisi une adresse email inexistante',
          confirmButtonColor: '#D4101C',
          confirmButtonText: 'OK'
        });
      },
      () => {
        if (this.data != null) {

          swal({
            type: 'success',
            title: 'Mot de passe récupéré',
            html: 'Vous recevrez votre mot de passe à cette adresse email: ' + email,
            confirmButtonColor: '#2e7d32',
            confirmButtonText: 'OK'
          });
          console.log(this.data);
          this.user.pseudo = this.data.pseudo;
          this.user.mdp = this.data.mdp;
          console.log("*** COMPTE DU FRONT ***");
          console.log('Username :' + this.user.pseudo);
          console.log('Password :' + this.user.mdp);
        }
      }

    );

  }

}