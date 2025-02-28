import {faker} from "@faker-js/faker";

import {Point} from './CustomMap';

export class Company implements Point {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    };
  } ;

  markerContent(): string {
    return `
            <div>
            <h1>Company: ${this.companyName}</h1>
            <h3>${this.catchPhrase}</h3>
            </div>
           `;
  };
}