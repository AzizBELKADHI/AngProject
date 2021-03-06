import { Component, OnInit, OnChanges, AfterViewInit } from '@angular/core';
// import initWizard = require('../../../../assets/js/init/initWizard.js');
import { Utilisateur } from './../pages/login/model/Utilisateur';
import { AuthControl } from "./../pages/login/control/auth.control";
import { Router } from "@angular/router";
import { AuthService } from './../pages/login/service/auth.service';
import { Injectable } from '@angular/core';
declare var $: any;
declare var swal: any;



interface FileReaderEventTarget extends EventTarget {
    result: string
}
interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}
@Component({
    moduleId: module.id,
    selector: 'compte-cmp',
    templateUrl: 'compte.component.html'
})
@Injectable()
export class CompteComponent implements OnInit, OnChanges, AfterViewInit {
    statusCode: number;
    currentUser: Utilisateur;
    av: Blob;

    constructor(public router: Router, private auth: AuthService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    data: any = null;

    pass: string;
    pseudo: string;
    nom: string;
    prenom: string;
    email: string;
    avatar: Blob 

    pass2: string;
    pseudo2: string;
    nom2: string;
    prenom2: string;
    email2: string;
    avatar2: Blob;







    public update() {

        if (this.nom == null) {
            this.nom2 = this.currentUser.nom;
        } else {
            this.nom2 = this.nom;
        }
        if (this.prenom == null) {
            this.prenom2 = this.currentUser.prenom;
        } else {
            this.prenom2 = this.prenom;
        }
        if (this.email == null) {
            this.email2 = this.currentUser.email;
        } else {
            this.email2 = this.email;
        }
        if (this.pseudo == null) {
            this.pseudo2 = this.currentUser.pseudo;
        } else {
            this.pseudo2 = this.pseudo;
        }
        if (this.pass == null) {
            this.pass2 = this.currentUser.mdp;
        } else {
            this.pass2 = this.pass;
        }
        if (this.avatar == null) {
            this.avatar2 = this.currentUser.avatar;
        } else {
            this.avatar2 = this.avatar;
        }


        console.log(this.email2);
        console.log(this.pseudo2);
        console.log(this.pass2);
        console.log(this.avatar2)

        let user = new Utilisateur(this.currentUser.id, this.nom2, this.prenom2, this.email2, null, this.pseudo2, this.pass2, null, null, this.avatar2);
        this.auth.update('pages/login', user)
            .subscribe(successCode => {
                this.statusCode = successCode;
                /*  swal({
                      title:'Mise ?? jour des donn??es',
                      html:
                      '<p class="text-muted text-recuperer" align="center">Si vous souhaitez mettre ?? jour vos donn??es, veuillez confirmer et vous allez vous redirigez vers la page Authentification </p><br>',    
                      type: 'warning',
                      showCancelButton: true,
                      confirmButtonText:'Confirmer',
                      cancelButtonText: 'Annuler',
                      confirmButtonColor: '#2e7d32',
                      cancelButtonColor: '#D4101C',
                      width: '450px',
                      showLoaderOnConfirm: true,  
                      preConfirm: (email) => {
                          return new Promise((resolve) => {
                            setTimeout(() => {
                              resolve()
                              this.router.navigate(['pages/login']);
                            }, 1000)
                          })
                        }   
                      })  */

            },
                errorCode => this.statusCode = errorCode);
    }

    onFileChanged(event) {
        if (event.target.files && event.target.files[0]) {
            let file = event.target.files[0];
            let base64: string = null;

            if (/^image\//.test(file.type)) {
                let reader = new FileReader();
                reader.onload = (e: any) => {
                    console.log(e.target)
                    base64 = e.target.result
                    let img = base64.split(',')[1];
                    let blob = new Blob([img], { type: 'image/jpg' })

                    this.avatar2 = blob;
                    console.log(this.avatar2)

                    let fr = new FileReader()
                    fr.onload = (event: any) => {
                        console.log(event.target)
                    }
                    fr.readAsDataURL(blob)
                    console.log(blob)
                }
                reader.readAsDataURL(file);

            }
        }
    }


    readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e: FileReaderEvent) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }


    ngOnInit() {
        // Code for the Validator
        var $validator = $('.wizard-card form').validate({
            rules: {
                firstname: {
                    required: false,
                    minlength: 3
                },
                lastname: {
                    required: false,
                    minlength: 3
                },
                email: {
                    required: false,
                    minlength: 3,
                }
            },

            errorPlacement: function (error, element) {
                $(element).parent('div').addClass('has-error');
            }
        });

        // Wizard Initialization
        $('.wizard-card').bootstrapWizard({
            'tabClass': 'nav nav-pills',
            'nextSelector': '.btn-next',
            'previousSelector': '.btn-previous',
            /*
                        onNext: function(tab, navigation, index) {
                            var $valid = $('.wizard-card form').valid();
                            if(!$valid) {
                                $validator.focusInvalid();
                                return false;
                            }
                        },
            */
            onInit: function (tab, navigation, index) {

                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100 / $total;
                var $wizard = navigation.closest('.wizard-card');

                var $display_width = $(document).width();

                if ($display_width < 600 && $total > 3) {
                    $width = 50;
                }

                navigation.find('li').css('width', $width + '%');
                var $first_li = navigation.find('li:first-child a').html();
                var $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
                $('.wizard-card .wizard-navigation').append($moving_div);

                //    this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;

                var $current = index + 1;

                if ($current == 1) {
                    move_distance -= 8;
                } else if ($current == total_steps) {
                    move_distance += 8;
                }

                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

                });

                $('.moving-tab').css('transition', 'transform 0s');
            },

            /*   onTabClick : function(tab, navigation, index){
   
                   var $valid = $('.wizard-card form').valid();
   
                   if(!$valid){
                       return false;
                   } else{
                       return true;
                   }
               },*/

            onTabShow: function (tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1;

                var $wizard = navigation.closest('.wizard-card');

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $($wizard).find('.btn-next').hide();
                    $($wizard).find('.btn-finish').show();
                } else {
                    $($wizard).find('.btn-next').show();
                    $($wizard).find('.btn-finish').hide();
                }

                var button_text = navigation.find('li:nth-child(' + $current + ') a').html();

                setTimeout(function () {
                    $('.moving-tab').text(button_text);
                }, 150);

                var checkbox = $('.footer-checkbox');

                if (index !== 0) {
                    $(checkbox).css({
                        'opacity': '0',
                        'visibility': 'hidden',
                        'position': 'absolute'
                    });
                } else {
                    $(checkbox).css({
                        'opacity': '1',
                        'visibility': 'visible'
                    });
                }

                // this.refreshAnimation($wizard, index);
                var total_steps = $wizard.find('li').length;
                var move_distance = $wizard.width() / total_steps;
                var step_width = move_distance;
                move_distance *= index;

                var $current = index + 1;

                if ($current == 1) {
                    move_distance -= 8;
                } else if ($current == total_steps) {
                    move_distance += 8;
                }

                $wizard.find('.moving-tab').css('width', step_width);
                $('.moving-tab').css({
                    'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                    'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

                });
            }
        });


        // Prepare the preview for profile picture
        $("#wizard-picture").change(function () {

            this.readURL(this);
        });

        $('[data-toggle="wizard-radio"]').click(function () {
            console.log('click');

            var wizard = $(this).closest('.wizard-card');
            wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
            $(this).addClass('active');
            $(wizard).find('[type="radio"]').removeAttr('checked');
            $(this).find('[type="radio"]').attr('checked', 'true');
        });

        $('[data-toggle="wizard-checkbox"]').click(function () {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).find('[type="checkbox"]').removeAttr('checked');
            } else {
                $(this).addClass('active');
                $(this).find('[type="checkbox"]').attr('checked', 'true');
            }
        });

        $('.set-full-height').css('height', 'auto');

    }

    ngOnChanges() {
        var input = $(this);
        var target: EventTarget;
        if (input.files && input.files[0]) {
            var reader: any = new FileReader();

            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    ngAfterViewInit() {
        $('.wizard-card').each(function () {

            var $wizard = $(this);
            var index = $wizard.bootstrapWizard('currentIndex');
            // this.refreshAnimation($wizard, index);

            var total_steps = $wizard.find('li').length;
            var move_distance = $wizard.width() / total_steps;
            var step_width = move_distance;
            move_distance *= index;

            var $current = index + 1;

            if ($current == 1) {
                move_distance -= 8;
            } else if ($current == total_steps) {
                move_distance += 8;
            }

            $wizard.find('.moving-tab').css('width', step_width);
            $('.moving-tab').css({
                'transform': 'translate3d(' + move_distance + 'px, 0, 0)',
                'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

            });

            $('.moving-tab').css({
                'transition': 'transform 0s'
            });
        });
    }
}
