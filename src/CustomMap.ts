// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // Instance of class Map. Property googleMap cannot be
  // accessed outside of this class
  private googleMap: google.maps.Map;

  // Takes as argument HTML <div> element id where to render
  // map. Creating a new Map instance first argument <div>,
  // second config object to set some options to map
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  // Adds marker to the location of a mappable.
  // Adds event listener when clicked creates and displays
  // info window. open() first argument reference to our map
  // instance and second argument our marker where we want
  // to show info window
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
