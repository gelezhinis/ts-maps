import { faker } from "@faker-js/faker";

import {Point} from './CustomMap';

export class User implements Point {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.fullName();
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  };

  markerContent(): string {
    return `<h1>User name: ${this.name}</h1>`;
  };
}