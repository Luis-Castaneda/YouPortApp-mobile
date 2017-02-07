    var x = document.getElementById("demo");
    var geo = document.getElementById("coordinates");
 //   var locationLL = {lat: 10.144144, lng: -64.677812}; // barcelona
    var locationLL = {
        lat: geo.getAttribute("data-lat"),
        lng: geo.getAttribute("data-lng")
        }; 

    var locationInit = {lat: 41.385362, lng: 2.187886};

    var urlGeo = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
    var googleAPIKey = "&key=AIzaSyB6SDV9DN3IWviu9k9fz62Tcd8-t-1552I";
    var citiesByProvinciaUrl = "http://localhost:18080/ServerPHP-YouPort-app/controlYouPort/company-by-city.php?provincia=";
    var companiesByIdMenu="http://localhost:8080/ServerPHP-YouPort-app/controlYouPort/submenu-by-idMenu.php?idMenu=";


    var infoLocation = "";
    var datax = [];
    var statusx = false;
    var x = document.getElementById("ubicacion");

    var vecesEjecucion=0;



    var eventx = "event";
    /*************************UBICACION DE GPS**********************/

    var updateLocationText = function(showText){

        
        if(showText === true){
            document.getElementById("ubicacion").innerHTML = "Usted se encuentra en: "+infoLocation;
        }
        geo.setAttribute("data-lat",locationLL.lat);
        geo.setAttribute("data-lng",locationLL.lng);

     //   alert(geo.getAttribute("data-lat") + " "+ locationLL.lat);
    //    alert(geo.getAttribute("data-lng") + " "+ locationLL.lng);
        
        /*locationLL.lat = position.coords.latitude;
        locationLL.lng = position.coords.longitude;*/
    }


function getLocation() {
    
    if (navigator.geolocation) {
        vecesEjecucion++;
		geo.innerHTML = "Listo geo";
        return navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        geo.innerHTML = "No creo geo";
    }
    infoLocation = "";
}

function showPosition(position) {
    consolex("\n\n | llamando 8 showPosition(position) ");
    var locationLLShowPosition = {lat: 0, lng: 0};
    locationLL.lat = position.coords.latitude;
    locationLL.lng = position.coords.longitude;

    infoLocation = locationLL.lat + "," + locationLL.lng;
    updateLocationText(false);
    infoLocation = "";
    return locationLL;
}

/*************************FIN DE UBICACION DE GPS**********************/


/********************INICIO DE UBICACION POR GEOINVERSO *****************/


var consolex = function(texto){
      //  console.debug(texto);
    };


var geoAtTheMoment = function(){
    locationLL = {
        lat: geo.getAttribute("data-lat"),
        lng: geo.getAttribute("data-lng")
        }; 
    return locationLL;
    }


/**
* Funcion encargada de determinar en que ciudad esta ubicado el usuario
*
*/
function determineCity(event){


     consolex("veces de ejecucion: "+vecesEjecucion++);


    consolex("click locationTestButton");
    getLocation();
    geoAtTheMoment();
        
   
	
	
    var urlToGoogle = urlGeo.concat(locationLL.lat).concat(",").concat(locationLL.lng).concat(googleAPIKey);
    
        
            $.get(
                urlToGoogle, 
                function(data, status){
                    datax = data;
                    statusx = status;
                    consolex("Antes del whereIam");
                    whereIam();
                    
                    
                    geo.setAttribute('value',infoLocation);
                    
                   // lookForCompanies();
                    
                    
                  //  citiesByProvinciaUrl = citiesByProvinciaUrl+infoLocation;
                }//, lookForCompanies()
            );
      //  event.stopPropagation();
        
    return infoLocation;
    }



/*
* Funcion encargado de llamar el API de Google maps con las coorde
*/
function   whereIam(){
      consolex("llamando 24 whereIam al : "+ urlGeo);
        var myJSON = JSON.stringify(datax);
       // infoLocation = data.results[0].address_components[2].long_name;
            consolex("| myJSON: \n"+ myJSON
                          +"\n\n|  datax: "+datax
                          +"\n\n|  datax.length: "+ datax.length
                          +"\n\n| statusx: "+statusx);
        if(statusx === "success" 
           &&   datax.length != 0 
           && datax.results[0] !== undefined){
            consolex("\n|if(statusx === 'success' ){");
            
            infoLocation = datax.results[0].address_components[2].long_name;
        }
         
        if(statusx !==  "success" &&   datax.length != 0 ){
            consolex("\n|if(statusx !==  'success' &&   datax.length != 0 ){");
            infoLocation = datax.results[0].address_components[1].long_name;
        }


     
        updateLocationText(true);
     
    }



/*
* Funcion que inicializa el mapa de google
*/ 
var initMap = function() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('locationTest'), {
          center: locationLL,
          // Set mapTypeId to SATELLITE in order
          // to activate satellite imagery.
          mapTypeId: 'satellite',
          scrollwheel: false,
          zoom: 8
        });
      };


/*
* Funcion dummy para realizar busqueda filtrada de empresas
*/
var lookForCompanies = function(){
    
consolex("\n | llamando 30 lookForCompanies al : "+ citiesByProvinciaUrl+infoLocation);
    var companiesByProvinciaUrl = citiesByProvinciaUrl+infoLocation;
    
    $.get(companiesByProvinciaUrl, function(data, status){
       // citiesByProvinciaUrl = citiesByProvinciaUrl.concat(infoLocation);
        //companiesByProvinciaUrl = citiesByProvinciaUrl+infoLocation;
          consolex("llamando al 14: "+ companiesByProvinciaUrl);
	       // var myJSON = JSON.stringify(data);
            
            // document.getElementById("locationTest").innerHTML = infoLocation;
            consolex("infoLocation: "+ data);    
            
        });
    
    
    
    
};


/*
* Funcion que permite realizar el concatenamiento de la provincia en un URL
*/
var addGeoLocationToURL = function(url){
   
    var provincia =geo.getAttribute("value");    
    
    url = url.concat("&provincia=").concat(provincia)
    
   consolex("\n | desde addGeoLocationToURL - infoLocation: "+ provincia);
   consolex("\n | desde addGeoLocationToURL - url: "+ url);   
    
    return url;
}

var waitUntilGeoIsReady = function(){
	
	while(locationLL.lat === 10 && locationLL.lng === 10){
		geoAtTheMoment();
		setTimeout(function(){consolex('en espera que geo esta listo')},2000);
	}
	if(locationLL.lat !== 10 && locationLL.lng !== 10){
		determineCity(eventx);	
	}
}

/*
document.addEventListener("DOMContentLoaded", getLocation());
document.addEventListener("onCordovaReady", getLocation());
document.addEventListener("onPluginsReady", getLocation());*/
document.addEventListener("deviceready", getLocation());
//NO SIRVE
//jQuery.when(getLocation()).done(waitUntilGeoIsReady());
 


 


   
/********************FIN DE UBICACION POR GEOINVERSO *****************/


	//document.addEventListener('deviceready', function(){alert('dispositivo listo');});
//getLocation();















