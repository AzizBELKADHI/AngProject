import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Utilisateur } from './model/Utilisateur';
import { AuthControl } from './control/auth.control';
import { AdminLayoutComponent } from '../../layouts/admin/admin-layout.component';
import { ResetControl } from './control/reset.control';


declare var $:any;
declare var swal:any;

@Component({
    moduleId:module.id,
    selector: 'login-cmp',
    templateUrl: './login.component.html'})

export class LoginComponent implements OnInit{
    test : Date = new Date();
    
    constructor(private user:AuthControl,private res:ResetControl) {
     
     }

    
    username:string;
    password:string;
   

    // fonction
    checkFullPageBackgroundImage(){
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if(image_src !== undefined){
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container); }};



   
 // espace travaill
    ngOnInit(){
        this.checkFullPageBackgroundImage();
        setTimeout(function(){
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }


    // fonction login
    login() {
        this.user.login(this.username,this.password);
    } 
    
   

 // button oublie
    showSwal(type){

        if(type == 'MDP_OUBLIE'){
            swal({
                title:'Récupérer votre mot de passe',
                input: 'email',
                html:
                '<p class="text-muted text-recuperer" align="center">Entrer votre adresse courriel qui a été utilisée lors de la création de votre compte pour récupérer votre mot de passe oublié</p><br>',
                showCancelButton: true,
                confirmButtonText:'Envoyer',
                confirmButtonColor: '#133659',
                cancelButtonText: 'Annuler',
                cancelButtonColor: '#D4101C',
                width: '450px',
                showLoaderOnConfirm: true,  
                preConfirm: (email) => {
                    return new Promise((resolve) => {
                      setTimeout(() => {
                        this.res.reset(email);
                        resolve()
                      }, 10)
                    })
                  }   
                })
                  .catch(swal.noop)
                } 
        }




}

