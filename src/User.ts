import { CustomMap, Mappable } from "./CustomMap";
import faker from "faker";

//Create a user with name and location
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
  // content to be displayed on the marker, onclick
  markerContent(): string {
    return `
    <h2>Name : ${this.name}</h2>
    `;
  }
}
