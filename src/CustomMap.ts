// import {User} from './User';
// import {Company} from './Company';

// Instructions on other class on how they can be an argument to 'addMarker'
export interface Point {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
     this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement, {
      zoom: 1, 
      center: {
        lat: 0,
        lng: 0
      }
    }); 
  };

  // addUserMarker(user: User): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: user.location.lat,
  //       lng: user.location.lng
  //     }  
  //   })
  // };

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng,
  //     }
  //   })
  // };


  // possible solution
  // addMarker(point: User | Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: point.location.lat,
  //       lng: point.location.lng
  //     }  
  //   });
  // };

  // best solution
  addMarker(point: Point) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: point.location.lat,
        lng: point.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div style="position: relative; background:white; padding:10px; border-radius:5px;">
            <button id="custom-close" style="position:sticky; top:0px; right:0px; border-color:grey; border-width:1px; font-weight:bold; background:white; color:black; padding:2px 5px; cursor:pointer; " onMouseOver="this.style.color='grey'" onMouseLeave="this.style.color='black'">Close</button>
            ${point.markerContent()}
          </div>
        `
      });

      infoWindow.open(this.googleMap, marker);

      google.maps.event.addListener(infoWindow, "domready", () => {
      const closeButton = document.getElementById("custom-close");
      if (closeButton) {
        closeButton.addEventListener("click", () => infoWindow.close());
      }
    });


    })
  };
}