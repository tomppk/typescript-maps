// Need type definition file from DefinitelyTyped
// e.g. npm install @types/(library)
// npm i @types/faker

// Can access faker index.d.ts type definition file by holding
// down ctrl and clicking faker below
import faker from 'faker';

export class User {
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
}
