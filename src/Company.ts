import faker from "faker";
import { Mappable } from "./CustomMap";

//Create a company with name, catch phrase and location
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  // content to be displayed on the marker, onclick
  markerContent(): string {
    return `
    <h1>Company Name : ${this.companyName}</h1>
    <h3>Catch Phrase : ${this.catchPhrase}</h3>
    `;
  }
}
