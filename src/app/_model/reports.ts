export class Reports {
    month: string;
    location_id: string;
    new_hypertensive: string;
    known_hypertensive: string;
    new_diabetic: string;
    known_diabetic: string;
    hypertensive_diabetic: string;

    constructor(month, location_id,new_hypertensive,known_hypertensive,new_diabetic, known_diabetic,hypertensive_diabetic){
        this.month=month;
        this.location_id=location_id;
        this.new_hypertensive=new_hypertensive;
        this.known_hypertensive=known_hypertensive;
        this.new_diabetic=new_diabetic;
        this.known_diabetic=known_diabetic;
        this.hypertensive_diabetic=hypertensive_diabetic;
    }
}