// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
  
.controller('MapCtrl', function($scope,$http){
  
    var markersData = [
       {
          lat: 28.602560,
          lng: 77.344102,
          name: "noida",
          address1:"Noida, Uttar Pradesh 201301",
          Commodity : "'Wheat",
          Price :  1200
       },
       {
          lat: 28.669131,
          lng: 77.454757,
          name: "Ghaziabad",
          address1:"Ghaziabad, Uttar Pradesh",
          Commodity : "Wheat",
          Price : 1300
       },
       {
          lat: 28.759357,
          lng: 77.506575,
          name: "Muradabad",
          address1:"Moradabad, Uttar Pradesh 244001",
          Commodity : "Wheat",
          Price : 1100
       },
       {
        lat: 28.736217,
        lng: 77.778525,
        name:"Hapur",
        address1:"Hapur Mandi , Uttar Pradesh",
        Commodity : "Wheat",
        Price : 1250
       } 
    ];

    var infoWindow;

function initialize() {
   var mapOptions = {
      center: new google.maps.LatLng(20.5937 , 78.9629),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   map = new google.maps.Map(document.getElementById('map'), mapOptions);            

   // a new Info Window is created
    infoWindow = new google.maps.InfoWindow();

 // navigator.geolocation.getCurrentPosition(function(pos){
   //           map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
     //        map.setZoom(16);
       //  }); 

  var GeoMarker = new GeolocationMarker(map);
          
  displayMarkers();


   // Event that closes the Info Window with a click on the map
   google.maps.event.addListener(map, 'click', function() {
      infoWindow.close();
   });

   // Finally displayMarkers() function is called to begin the markers creation
}
google.maps.event.addDomListener(window, 'load', initialize);

      var input = /** @type {HTMLInputElement} */  (document.getElementById('searchmarket'));
    
       


   function call(){
        if (input.value == "Ghaziabad") {
          displayMarkers();
          console.log('markers');
         }else{
                   console.log('no');
         };
  }


function displayMarkers(){

   // this variable sets the map bounds according to markers position
   var bounds = new google.maps.LatLngBounds();
   
   // for loop traverses markersData array calling createMarker function for each marker 
   for (var i = 0; i < markersData.length; i++){

      var latlng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
      var name = markersData[i].name;
      var address1 = markersData[i].address1;
      var Commodity = markersData[i].Commodity;
      var Price = markersData[i].Price;

      createMarker(latlng, name, address1, Commodity, Price);



      // marker position is added to bounds variable
      bounds.extend(latlng);  
   }

   // Finally the bounds variable is used to set the map bounds
   // with fitBounds() function
   map.fitBounds(bounds);
}

function createMarker(latlng, name, address1 , Commodity ,Price){
   var marker = new google.maps.Marker({
      map: map,
      position: latlng,
      animation: google.maps.Animation.DROP,
      title: name
   });

   // This event expects a click on a marker
   // When this event is fired the Info Window content is created
   // and the Info Window is opened.
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         Commodity + '<br />' +
         Price + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);

      google.maps.event.addListener(marker, 'click', function() {
      
      // Creating the content to be inserted in the infowindow
      var iwContent = '<div id="iw_container">' +
            '<div class="iw_title">' + name + '</div>' +
         '<div class="iw_content">' + address1 + '<br />' +
         Commodity + '<br />' +
         Price + '</div></div>';
      
      // including content to the Info Window.
      infoWindow.setContent(iwContent);

      // opening the Info Window in the current map and at the current marker location.
      infoWindow.open(map, marker);
   });


  }

});


