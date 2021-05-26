export class Patients {
    patient_id: string;
    name: string;
    dob: string;
    gender: string;
    phone_number: string;
    date_created: string;

    constructor(patient_id, name,dob,gender,phone_number, date_created){
        this.patient_id=patient_id;
        this.name=name;
        this.dob=dob;
        this.gender=gender;
        this.phone_number=phone_number;
        this.date_created=date_created;
    }
}