export class Patients {
    patient_id: string;
    name: string;
    dob: string;
    gender: string;
    phone_number: string;
    date_created: string;
    encounter_datetime: string;
    location_id: string;
    encounter_datetime_min: string;

    constructor(patient_id, name,dob,gender,phone_number, date_created,encounter_datetime,location_id,encounter_datetime_min){
        this.patient_id=patient_id;
        this.name=name;
        this.dob=dob;
        this.gender=gender;
        this.phone_number=phone_number;
        this.date_created=date_created;
        this.encounter_datetime=encounter_datetime;
        this.location_id=location_id;
        this.encounter_datetime_min=encounter_datetime_min;
    }
}