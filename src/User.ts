// Need type definition file from DefinitelyTyped
// e.g. npm install @types/(library)
// npm i @types/faker

// Can access faker index.d.ts type definition file by holding
// down ctrl and clicking faker below
import faker from 'faker';
import { Mappable } from './CustomMap';

// Our User class implements Mappable interface.
// This tells TypeScript that we want every User that we
// create to satisfy the requirements of Mappable interface.
// This enables TypeScript to notify with error if the
// interface requirements are not met.
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

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}
