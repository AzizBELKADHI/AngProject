import { Injectable } from "@angular/core";

export class Appointment {
    text: string;
    startDate: Date;
    endDate: Date;
    allDay?: boolean;
    recurrenceRule?: string;
}

let appointments: Appointment[] = [];    

@Injectable()
export class CalendrierService {
    getAppointments(): Appointment[] {
        return appointments;
    }
}
