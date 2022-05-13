import { Component, OnInit } from '@angular/core';
import { CalendrierService, Appointment } from 'app/calendrier/calendrier.service';
import { DxSchedulerModule, DxTemplateModule, DxCheckBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
declare var swal: any;
declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'calendrier-cmp',
	templateUrl: 'calendrier.component.html',
	styleUrls: ['./calendrier.component.css'],
	providers:[CalendrierService]
})

export class CalendrierComponent implements OnInit{
    appointmentsData: Appointment[];
    currentDate: Date = new Date();


	constructor(service: CalendrierService) {
        this.appointmentsData = service.getAppointments();
    }
    showToast(event, value, type) {
        notify(event + " \"" + value + "\"" + " tâche", type, 800);
    }

    onAppointmentAdded(e) {
        this.showToast("Ajout", e.appointmentData.text, "success");
    }

    onAppointmentUpdated(e) {
        this.showToast("Modification", e.appointmentData.text, "info");
    }

    onAppointmentDeleted(e) {
        this.showToast("Suppression", e.appointmentData.text, "warning");
    }
    ngOnInit(){}
}
