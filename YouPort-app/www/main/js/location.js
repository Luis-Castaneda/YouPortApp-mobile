    var x = document.getElementById("demo");
    var geo = document.getElementById("coordinates");
 //   var locationLL = {lat: 10.144144, lng: -64.677812}; // barcelona
    var locationLL = {
        lat: geo.getAttribute("data-lat"),
        lng: geo.getAttribute("data-lng")
        }; 
    var locationInit = {lat: 0, lng: 0};

    var urlGeo = "https://maps.googleapis.com/maps/api/geocode/json?latlng="+locationLL.lat+","+locationLL.lng+"&key=AIzaSyB6SDV9DN3IWviu9k9fz62Tcd8-t-1552I";
    var citiesByProvinciaUrl = "http://localhost:18080/ServerPHP-YouPort-app/controlYouPort/company-by-city.php?provincia=";
    var companiesByIdMenu="http://localhost:8080/ServerPHP-YouPort-app/controlYouPort/submenu-by-idMenu.php?idMenu=";


    var infoLocation = "";
    var datax = [];
    var statusx = false;
    var x = document.getElementById("ubicacion");

    var vecesEjecucion=0;



    var eventx = "event";
    /*************************UBICACION DE GPS**********************/

    var updateLocationText = function(){

        document.getElementById("ubicacion").innerHTML = "Usted se encuentra en: "+infoLocation;

        geo.setAttribute("data-lat",locationLL.lat);
        geo.setAttribute("data-lng",locationLL.lng);

     //   alert(geo.getAttribute("data-lat") + " "+ locationLL.lat);
    //    alert(geo.getAttribute("data-lng") + " "+ locationLL.lng);
        
        /*locationLL.lat = position.coords.latitude;
        locationLL.lng = position.coords.longitude;*/
    }


function getLocation() {
    
    if (navigator.geolocation && vecesEjecucion === 0) {
        vecesEjecucion++;
        return navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Listo geo";
    }
    infoLocation = "";
}

function showPosition(position) {
    consolex("\n\n | llamando 8 showPosition(position) ");
    var locationLLShowPosition = {lat: 0, lng: 0};
    locationLL.lat = position.coords.latitude;
    locationLL.lng = position.coords.longitude;
    
  /*  x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    */
    infoLocation = locationLL.lat + "," + locationLL.lng;
    //updateLocationText();
    infoLocation = "";
    return locationLL;
}

/*************************FIN DE UBICACION DE GPS**********************/


/********************INICIO DE UBICACION POR GEOINVERSO *****************/


    var consolex = function(texto){
       // console.debug(texto);
      
    };


var geoAtTheMoment = function(){
   /*     consolex("\n| Coordenadas hasta el momento: ");
        consolex("\n| locationLLShowPosition.lat: "+locationLL.lat);
        consolex("\n| locationLLShowPosition.lng: "+locationLL.lng);*/
    return locationLL;
    }



function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }


function determineCity(event){


           consolex("veces de ejecucion: "+vecesEjecucion++);


            consolex("click locationTestButton");
        getLocation();
         geoAtTheMoment();
        
        
            $.get(
                urlGeo, 
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


        /*document.getElementById("ubicacion").innerHTML = "Usted se encuentra en: "+infoLocation;*/
        updateLocationText();
        //consolex("infoLocation: "+ infoLocation);    
    }




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


//NO SIRVE
jQuery.when(getLocation()).done(determineCity(eventx));
//jQuery.when(determineCity).done();
    
/********************FIN DE UBICACION POR GEOINVERSO *****************/

/*document.getElementById("ubicacionDiv")
    .addEventListener("click", determineCity);*/
/* NO ELIMINAR
jQuery("#ubicacionButton").click(function(event){
        event.stopPropagation();
        consolex("The span element was clicked.");
    });
*/







//$(document).ready(function(){
//    consolex("llamando la funcion ready!!!");
    
   // geoAtTheMoment();
  
//});


















