import { faker } from "@faker-js/faker";

export class Company {
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
}
