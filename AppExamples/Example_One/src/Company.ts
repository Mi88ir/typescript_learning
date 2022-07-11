import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    latitude: number;
    longitude: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      latitude: +faker.address.latitude(),
      longitude: +faker.address.longitude(),
    };
  }

  markerContent(): string {
    return `
    <div>
    <h1>Company name: ${this.companyName}</h1>
    <h3>Catchphrase: ${this.catchPhrase}</h3>
    </div>
    `;
  }

  color: string = "blue";
}
