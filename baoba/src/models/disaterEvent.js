export class DisaterEvent {
    id;
    type;
    severity;
    status;
    dateReported;
    lastUpdatred;
    description;

    constructor(id, type, severity, status, dateReported, lastUpdatred, description) {
        this.id = id;
        this.type = type;
        this.severity = severity;
        this.status = status;
        this.dateReported = dateReported;
        this.lastUpdatred = lastUpdatred;
        this.description = description;
    }

    //implementar relacionamento com Location
}