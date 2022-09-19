google.maps.event.addDomListener(window, 'load', init);
    
function init() 
{
  var mapOptions = 
  {
    zoom: 15,     
    scrollwheel: false,
    center: new google.maps.LatLng(40.7965272, 29.4403606), // Gebze - Kocaeli // TÜRKİYE 
    styles: [	
    {		
      featureType:'water',		
      stylers:[
        {
          color:'#F2F2F2'
        },

        {
          visibility:'on'
        }]	
    },  
    {		
      featureType:'landscape',		
      stylers:[
      {
        color:'#FFFFFF'
      }]	
    },
    {		
      featureType:'road',		
      stylers:[
      {
        saturation:-100
      },
      {
        lightness:45
      }]	
    },
    {		
      featureType:'road.highway',		
      stylers:[
        {
          visibility:'simplified'
        }]	
    },
    {		
      featureType:'road.arterial',		
      elementType:'labels.icon',		
      stylers:[
      {
        visibility:'off'
      }]	
    },
    {		
      featureType:'administrative',		
      elementType:'labels.text.fill',		
      stylers:[
      {
        color:'#ADADAD'
      }]	
    },
    {		
      featureType:'transit',		
      stylers:[
      {
        visibility:'off'
      }]	
    },
    {		
      featureType:'poi',		
      stylers:[
      {
        visibility:'off'
      }]	
    }]
  };

  // Get the HTML DOM element tha
  // We are using a div with id="map" seen below in the <body>
  var mapElement = document.getElementById('googlemaps');

  var map = new google.maps.Map(mapElement, mapOptions);
}

$(".rotate").textrotator(
  {
    animation: "fade", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
    separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
    speed: 2000 // How many milliseconds until the next word show.
  });