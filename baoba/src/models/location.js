export class Location {
    id;
    biome;
    region;
    latitude;
    longitude;
    infrastructesRisk;
    pupolationAffected;

    constructor(id, biome, region, latitude, longitude, infrastructesRisk, pupolationAffected) {
        this.id = id;
        this.biome = biome;
        this.region = region;
        this.latitude = latitude;
        this.longitude = longitude;
        this.infrastructesRisk = infrastructesRisk;
        this.pupolationAffected = pupolationAffected;
    }

    
}