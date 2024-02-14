var map = L.map('map');
map.setView([-33.9419, 18.8614], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 25, minZoom: 15,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let LPRMarker = L.marker([-33.9419,18.8614]).addTo(map)
    .bindPopup('<h1> LPR Building </h1> <p> This is the old Laerskool Paul Roos building');


let HoofGebouMarker = L.marker([-33.941610,18.862611]).addTo(map)
.bindPopup("<h1> Main Building </h1> <p> This is the main Paul Roos building </p> <img class='popupimages' src='./images/test.jpg'/ height='150px'>");


let PRGCentre = L.marker([-33.942859, 18.861336]).addTo(map)
.bindPopup("<h1> PRG Centre </h1>");


let PRGNova = L.marker([-33.941120, 18.863475]).addTo(map)
.bindPopup("<h1> Nova Hostel </h1>");

let PRGSecunda = L.marker([-33.941348, 18.863656]).addTo(map)
.bindPopup("<h1> Secunda Hostel </h1>");

let PRGPrima = L.marker([-33.9405446163602, 18.86462771038144]).addTo(map)
.bindPopup("<h1> Prima Hostel </h1>");


//Current user location
 if (!navigator.geolocation.getCurrentPosition){
    console.log("Your browser doesn't support the geolocation feature");
 } else {
    setInterval(() => {
        navigator.geolocation.getCurrentPosition(getPosition)
    }, 5000)
    
 }

 var
 UserMarker, UserRadius;

 function getPosition(position){
 console.log(position);
 var lat = position.coords.latitude;
 var long = position.coords.longitude;
 var accuracy = position.coords.accuracy;

 console.log(lat, long, accuracy);

 if (UserMarker){
    map.removeLayer(UserMarker)
 }

 if (UserRadius){
    map.removeLayer(UserRadius)
 }

  UserMarker = L.marker([lat,long]).addTo(map);
  UserRadius = L.circle([lat, long], {radius: accuracy}).addTo(map);
 console.log("It should have added");
 }



 // //-33.941610, 18.862611

// L.Routing.control({
//   waypoints: [
//     L.latLng(-33.9419, 18.8614),
//     L.latLng(-33.941610,18.862611)
//   ]
// }).addTo(map);




// navigator.geolocation.watchPosition(success,error);
// let marker;

//  function success(pos){
   
//     const lat = pos.coords.latitude;
//     const lng = pos.coords.longtitude;
//     // const accuracy = pos.coords.accuracy;
    
//     marker = L.marker([lat, lng]).addTo(map);
//     alert("This code executed");
 

//  }

//  function error(err){
//     if (err.code === 1){
//         alert("Please allow geolocation access");
//     } else {
//         alert("Cannot get current location");
//     }
//  }

