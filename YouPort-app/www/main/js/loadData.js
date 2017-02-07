/*
**Metodo obtiene todas las categorias , esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona  al html principal
* LC
*/
function categoriasMenuFill(){
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/categorias_menu.php";

//var urlPath = getUrlImage();
 
 $.getJSON(url,function(result){
 //console.log(result);
 // var ultimoRegistro = result.length - 1;
 //elimino todos los div creados dinamicamente
  $( ".categoria-creado" ).remove();
  
 $.each(result, function(i, field){
 var urlPath = field.Value_Parameter;
 var Id_Menu=field.Id_Menu;
 var Name=field.Name;
 var Description_Short=field.Description_Short;
 var Url_image;
 
 if(field.Url_Image_Normal == null || field.Url_Image_Normal == ''){
	 Url_image= urlPath + "6.jpg";
 }else{
	 Url_image= urlPath + field.Url_Image_Normal;
 }
 
 //var Url_image = "img/photos/icon_empresas_90x90.png";
 var Url_View=field.Url;
 //var Url_View="company-and-services.html";
 

 //if($("#"+ultimoRegistro).val() == null){
	 $("#list-categories").append("<div class='col-50 categoria-border categoria-creado' id='"+i+"' ><a href='"+Url_View+"' class='food-category' onclick='servicesFill();'><img src='"+Url_image+"' alt='"+Name+"'><div class='color-deeporange text-thiny'>"+Name+"</div><div class='text-extrat-thiny gray-text'>"+Description_Short+"</div></a></div>");
 //}			
 });
 });
 
	
}

/*
**Metodo obtiene todas las opciones de menu principal, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona  al html principal
* LC
*/
function principalMenuFill(){
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/principal_menu.php";

//var urlPath = getUrlImage();
 
 $.getJSON(url,function(result){
 //console.log(result);
 
// var ultimoRegistro = result.length - 1;
//elimino todos los div creados dinamicamente
  $( ".menu-principal-creado" ).remove();

 $.each(result, function(i, field){
 var urlPath = field.Value_Parameter;
 var Id_Menu=field.Id_Menu;
 var Name=field.Name;
 //var Description_Short=field.Description_Short;
 var Url_image_normal=urlPath + field.Url_Image_Normal;
 var Url_image_over= urlPath + field.Url_Image_Over;
 //var Url_image = "img/photos/icon_noticias_82x82_normal.png";
 var Url_View=field.Url;
 //var Url_View="company-and-services.html";
 
 //if($("#"+ultimoRegistro).val() == null){
	
	 $("#principal-menu").append("<div class='col-30 menu-principal-creado' id='"+i+"' ><a href="+Url_View+" class='principal-category' onclick=\"categoriasMenuFill(); submenu_by_idMenu('"+Id_Menu+"','"+Name+"'); company_details_YOUPORT(); \"><img src="+Url_image_normal+" alt='NOTICIAS' onmouseover=\"changeImageHover(this, '"+Url_image_over+"')\" onmouseout=\"changeImageUnHover(this, '"+Url_image_normal+"')\"><div class='color-principal-category'>"+Name+"</div></a></div>");
 //}
  
  
				
 });
 });
 
	
}


/*
**Metodo obtiene todos los servicios, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona la lista de empresas al html principal
* LC
*/
function servicesFill(){
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/services.php";
 

 
 $.getJSON(url,function(result){
// console.log(result);

// var ultimoRegistro = result.length - 1;
// var ultimoRegistroGrid = "grid_".concat(result.length - 1);

//elimino todos los div creados dinamicamente
  $( ".service-creado" ).remove();
  
 $.each(result, function(i, field){
 var urlPath = field.Value_Parameter;
 var Id_Services=field.Id_Services;
 var Name_Services=field.Name_Services;
 var Description_Short=field.Description_Short;
 var Url_Image;
 
 if(field.Url_Image == null || field.Url_Image == ''){
	 Url_Image=urlPath + "6.jpg";
 }else{
	 Url_Image=urlPath + field.Url_Image;
 }
 
 //var Url_Image = "img/photos/1.jpg";
  
 
 //if($("#"+ultimoRegistro).val() == null){
	 $("#list-services").append("<div class='restaurant service-creado' id='"+i+"'><div class='row'><div class='col-100'><div class='restaurant-img'><img src='"+Url_Image+"' alt='"+Name_Services+"'></div></div></div><div class='row'><div class='col-60'><h6>"+Name_Services+"</h6><div class='gray-text text-thiny'><a href=''>"+Description_Short+"</a></div></div><div class='col-40'><a href='company.html' class='button button-fill color-deeporange text-extrat-thiny' onclick=\"company_by_idservicesFill('"+Id_Services+"','"+Name_Services+"')\">ENTRAR</a></div></div></div>");
							   
 //}	
 //if($("#"+ultimoRegistroGrid).val() == null){ 
	$("#list-services-grid").append("<div class='col-50 service-creado'  id='grid_"+i+"'><div class='restaurant-grid'><img src='"+Url_Image+"' alt='"+Name_Services+"'><div class='max-height-40 min-height-40'><h6>"+Name_Services+"</h6></div><div class='gray-text text-thiny margin-bottom-10 max-height-18 min-height-18'><a href=''>"+Description_Short+"</a></div><a href='company.html' class='button button-fill color-deeporange text-extrat-thiny' onclick=\"company_by_idservicesFill('"+Id_Services+"','"+Name_Services+"')\">ENTRAR</a></div></div>");					
 //}						
 
 });
 });
	
}

/*
**Metodo obtiene los servicios que contemplan compañias con ofertas, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona la lista de empresas al html principal
* LC
*/
function servicesFillByOfertas(){
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/servicesByOfertas.php";
 
 //var urlPath = getUrlImage();
 
 $.getJSON(url,function(result){
// console.log(result);

 //var ultimoRegistro = result.length - 1;
 ///var ultimoRegistroGrid = "grid_".concat(result.length - 1);
 
 //elimino todos los div creados dinamicamente
  $( ".service-creado-oferta" ).remove();
  
 $.each(result, function(i, field){
 var urlPath = field.Value_Parameter;
 var Id_Services=field.Id_Services;
 var Name_Services=field.Name_Services;
 var Description_Short=field.Description_Short;
 var Url_Image;
 
 if(field.Url_Image == null || field.Url_Image == ''){
	 Url_Image=urlPath + "6.jpg";
 }else{
	 Url_Image= urlPath + field.Url_Image;
 }
 
 //var Url_Image = "img/photos/1.jpg";
  
 
 //if($("#"+ultimoRegistro).val() == null){
	 $("#list-services").append("<div class='restaurant service-creado-oferta' id='"+i+"'><div class='row'><div class='col-100'><div class='restaurant-img'><img src='"+Url_Image+"' alt='"+Name_Services+"'></div></div></div><div class='row'><div class='col-60'><h6>"+Name_Services+"</h6><div class='gray-text text-thiny'><a href=''>"+Description_Short+"</a></div></div><div class='col-40'><a href='companyByOfertas.html' class='button button-fill color-deeporange text-extrat-thiny' onclick=\"company_by_idservicesAndOfertasFill('"+Id_Services+"','"+Name_Services+"')\">ENTRAR</a></div></div></div>");
							   
 //}	
 //if($("#"+ultimoRegistroGrid).val() == null){ 
	$("#list-services-grid").append("<div class='col-50 service-creado-oferta'  id='grid_"+i+"'><div class='restaurant-grid'><img src='"+Url_Image+"' alt='"+Name_Services+"'><div class='max-height-40 min-height-40'><h6>"+Name_Services+"</h6></div><div class='gray-text text-thiny margin-bottom-10 max-height-18 min-height-18'><a href=''>"+Description_Short+"</a></div><a href='companyByOfertas.html' class='button button-fill color-deeporange text-extrat-thiny' onclick=\"company_by_idservicesAndOfertasFill('"+Id_Services+"','"+Name_Services+"')\">ENTRAR</a></div></div>");					
 //}						
 
 });
 });
	
}
/*
**Metodo obtiene las empresas basado en un  id de servicio, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona la lista de empresas al html principal
* LC
*/

function company_by_idservicesFill(id, name){
	
$("#idServices").val(id);
console.debug(id);
var provincial =geo.getAttribute("value");    

var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/company-by-idServices.php".concat("?idServices="+id).concat("&provincia=").concat(provincial);
 

consolex("\n | desde company_by_idservicesFill - infoLocation: "+ provincial);
consolex("\n | desde company_by_idservicesFill - url: "+ url);
var NameServices = name;
var entro = false;
$.getJSON(url,function(result){
	
 $.each(result, function(i, field){
entro = true;
 var urlPath =  field.Value_Parameter; 
 var NameCompany=field.Name;
 var idCompany=field.Id_Company;	
 var NameServices = field.Name_Services;
 var urlImage = urlPath + field.Url_Image;
 

 $("#list-company").append("<li><a href='company-details.html' onclick=\"company_details_by_idcompany('"+idCompany+"','"+NameCompany+"','"+urlImage+"')\" class='item-link'><div class='item-content'><div class='item-media'><img src='img/icon_categorias.svg'/></div><div class='item-inner'><div class='item-title text-small'>"+NameCompany+"</div></div></div></a></li>");		
	

 });

 $("#nameServices").append("<div class='max-height-30 min-height-30'>Empresas y servicios</div><div  class='max-height-18 min-height-18' style='font-size : 13px !important;' >"+NameServices+"</div>");
 if(!entro){
		$("#message-no-data").append("<div class='text-medium margin-bottom-15' style='margin-left: 20 px; margin-right : 20px; vertical-align:middle;'><p style = 'color: #DADADA; font-size : 13px; padding-top 10px; text-align:center; vertical-align:middle;'>Actualmente no disponemos de empresas cercanas a su localidad.</p><p style = 'color: #DADADA; font-size : 13px; padding-top 10px; text-align:center; vertical-align:middle;' >¡Disculpe las molestias!</p></div>");		
	}
    
 });

}








/*
**Metodo obtiene las empresas que tienen ofertas mediante un id de servicio, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona la lista de empresas al html principal
* LC
*/
function company_by_idservicesAndOfertasFill(id, name){
	
$("#idServices").val(id);
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/company-by-idServicesAndOfertas.php".concat("?idServices="+id);

var NameServices = name;
var entro = false;
//var urlPath = getUrlImage();

$.getJSON(url,function(result){
// console.log(result);
entro = true;
 $.each(result, function(i, field){
 var urlPath = field.Value_Parameter;
 var NameCompany=field.Name;
 var idCompany=field.Id_Company;
 var NameServices = field.Name_Services;
 var urlImage = urlPath + field.Url_Image;
 $("#list-company").append("<li><a href='company-details-ofertas.html' onclick=\"company_details_by_idcompanyAndOferta('"+idCompany+"','"+NameCompany+"','"+urlImage+"')\" class='item-link'><div class='item-content'><div class='item-media'><img src='img/icon_categorias.svg'/></div><div class='item-inner'><div class='item-title text-small'>"+NameCompany+"</div></div></div></a></li>");		
							
 });
 $("#nameServices").append("<div class='max-height-30 min-height-30'>Empresas y servicios</div><div  class='max-height-18 min-height-18' style='font-size : 13px !important;' >"+NameServices+"</div>");		
  if(!entro){
		$("#message-no-data").append("<div class='text-medium margin-bottom-15' style='margin-left: 20 px; margin-right : 20px; vertical-align:middle;'><p style = 'color: #DADADA; font-size : 13px; padding-top 10px; text-align:center; vertical-align:middle;'>Actualmente no disponemos de empresas cercanas a su localidad.</p><p style = 'color: #DADADA; font-size : 13px; padding-top 10px; text-align:center; vertical-align:middle;' >¡Disculpe las molestias!</p></div>");		
	}
 });
 
}

/*
**Metodo obtiene el submenu mediante el id del menu principal, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona la lista de submenu al html primcipal
* LC
*/
function submenu_by_idMenu(id, name){
	
$("#idMenu").val(id);
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/submenu-by-idMenu.php".concat("?idMenu="+id);

var NameMenu = name;

$.getJSON(url,function(result){
// console.log(result);
 $.each(result, function(i, field){
	 
 var NameSubMenu=field.NameSubMenu;
 var url = field.Url;
 var type_view = field.Id_Type_View;
 
 if(type_view == 1){
	$("#list-submenu").append("<li><a href='"+url+"' onclick='' class='item-link'><div class='item-content'><div class='item-media'><img src='img/icon_categorias.svg'/></div><div class='item-inner'><div class='item-title text-small'>"+NameSubMenu+"</div></div></div></a></li>");			 
 }else{
	 $("#list-submenu").append("<li><a href='"+url+"' onclick='servicesFillByOfertas();' class='item-link'><div class='item-content'><div class='item-media'><img src='img/icon_categorias.svg'/></div><div class='item-inner'><div class='item-title text-small'>"+NameSubMenu+"</div></div></div></a></li>");			 
 }
 
							
 });
 $("#nameMenu").append("<div  >"+NameMenu+"</div>");		
 });
 
}

/*
**Metodo obtiene los detalles de una compañia mediante el idCompany, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona a cada tab del html la informacion correspondiente
**La empresa, servicios, contactos, imagen de la empresa..
* LC
*/
function company_details_by_idcompany(id, name, image_url){
	
$("#idCompany").val(id);
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/company-details-by-idCompany.php".concat("?idCompany="+id);

 var NameCompany = name;
 var urlImage = image_url;

$.getJSON(url,function(result){
// console.log(result);

 $.each(result, function(i, field){
	 
 var idSection = field.Id_Section;
 var paragraph = field.Paragraph;
 var idCompany=field.Id_Company;
 var address = field.Address;
 var email = field.Email_Contact;
 var phone = field.Phone_Office_One;
 var fax =  field.Fax;
 var webSite = field.Web_Site;
 var enable = field.Enabled;
 
 if(idSection == 1){

	$("#tab1").append("<div class='content-block margin-top-15' style='text-align: justify'><p class='text-thiny'>"+paragraph+"</b></div>");			 
	
	 
 }else if(idSection == 2){
	 
	$("#tab2").append("<div class='content-block margin-top-15' style='text-align: justify'><p class='text-thiny'>"+paragraph+"</b></div>");	
 }else if(idSection == 3){
	 
	$("#tab3-inner").append("<ul><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_home_35x35.png'></div><div class='item-inner'><div class='item-text'>"+address+"</div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_phone_35x35.png' ></div><div class='item-inner'><div class='item-text'> <b>Telefono:</b>"+phone+"</div><div class='item-text'> <b>Fax:</b>"+fax+"</b></div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_arroba_35x35.png' ></div><div class='item-inner'><div class='item-text'><b>"+email+"</b></div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_web_35x35.png' ></div><div class='item-inner'><div class='item-text'><b>"+webSite+"</b></div></div></a></li></ul>");			 	 
	
	
 }
 						
 });
	$("#nameCompany").append(NameCompany);		
	$("#imageCompany").append("<img src='"+urlImage+"' >");		
 
 });
 
}





/*
**Metodo obtiene los detalles de la compañia  YOUPORT , esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona a cada elemento la informacion correspondiente
* LC
*/
function company_details_YOUPORT(){
	
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/company-details-YOUPORT.php";

var urlImage;
var nameCompany;
$.getJSON(url,function(result){
// console.log(result);

 $.each(result, function(i, field){
	 

 //var idCompany=field.Id_Company;
 var address = field.Address;
 var email = field.Email_Contact;
 var phone = field.Phone_Office_One;
 //var fax =  field.Fax;
 var webSite = field.Web_Site;
 //var enable = field.Enabled;
 nameCompany = field.Name;
 urlImage = field.Value_Parameter + field.Url_Image;


	$("#content-dinamic").append("<div class='item-text'><p><b>Teléfono : </b>"+phone+"</p><p><b>Email : </b> "+email+"</p><p><b>Dirección  : </b>"+address+"</p></div>");			 
					
 });
	$("#nameCompany").append(nameCompany);		
	$("#imageCompany").append("<img src='"+urlImage+"' >");		
 
 });
}



/*
**Metodo obtiene los detalles y OFERTA de una compañia mediante el idCompany, esto lo hace llamando a un servicio PHP
**luego de obtener la data adiciona a cada tab del html la informacion correspondiente
**OFERTAS, contactos, imagen de la empresa..
* LC
*/
function company_details_by_idcompanyAndOferta(id, name, image_url){
	
$("#idCompany").val(id);
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/company-details-by-idCompanyAndOfertas.php".concat("?idCompany="+id);

 var NameCompany = name;
 var urlImage = image_url;

$.getJSON(url,function(result){
// console.log(result);
var entro = 0;
 $.each(result, function(i, field){
	 
 var idCompany=field.Id_Company;
 var address = field.Address;
 var email = field.Email_Contact;
 var phone = field.Phone_Office_One;
 var fax =  field.Fax;
 var webSite = field.Web_Site;
 var ofertaName = field.Name_Promotion;
 var ofertaDescription = field.Description;
 var urlImageOferta = field.Url_Imagel;
 if(urlImageOferta != null && urlImageOferta != ''){
	urlImageOferta =  "<img src='".concat(urlImageOferta).concat("'/>");
 }

 if(entro == 0){
	$("#tab2-inner").append("<ul><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_home_35x35.png'></div><div class='item-inner'><div class='item-text'>"+address+"</div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_phone_35x35.png' ></div><div class='item-inner'><div class='item-text'> <b>Telefono:</b>"+phone+"</div><div class='item-text'> <b>Fax:</b>"+fax+"</b></div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_arroba_35x35.png' ></div><div class='item-inner'><div class='item-text'><b>"+email+"</b></div></div></a></li><li><a href='#' class='item-link item-content'><div class='item-media'><img src='img/photos/icon_web_35x35.png' ></div><div class='item-inner'><div class='item-text'><b>"+webSite+"</b></div></div></a></li></ul>");
	entro = entro + 1;	
 }
	
	$("#tab1").append("<div class='content-block margin-top-15' style='text-align: justify'><div class='item-inner'><div ><p class='text-thiny'><b class='item-text'>"+ofertaName+"</b></p></div></div><div class='item-inner'><div><p class='text-thiny'>"+ofertaDescription+"</p></div></div><div class='content-block margin-top-15' style='text-align: justify'><div class='item-media'>"+urlImageOferta+"</div></div></div><hr style='color: #0056b2;' />");			 	 
							
 });
	$("#nameCompany").append(NameCompany);		
	$("#imageCompany").append("<img src='"+urlImage+"' >");		
 
 });
 
}


function setServicesId(id){
	$("#idServices").val(id);
}

/*
**Metodo obtiene la url del directorio donde reposan las imagenes en el server
* LC
*/
function getUrlImage(){
var url="http://acordeit3797.cloudapp.net:9090/ServerPHP-YouPort-app/controlYouPort/url_image.php";


 $.getJSON(url,function(result){
 //console.log(result);
 
 $.each(result, function(i, field){
 
 var value=field.Value_Parameter;
 alert(value);
 return value;
 	
 });
 });
}


$("#list-services-p").bind('DOMNodeInserted', function(e) {
    var element = e.target;
	
	var id = $(element).attr('id');
    alert(element.nodeName);
	alert(id);
	alert($(element).text());
});



 // function onLoad() {
	 // alert("onLoad");
        // document.addEventListener("deviceready", onDeviceReady, false);
    // }

    // // Cordova is loaded and it is now safe to call Cordova methods
    // //
    // function onDeviceReady() {
        // // Register the event listener
		 // alert("onDeviceReady");
        // document.addEventListener("backbutton", onBackKeyDown, false);
    // }

    // // Handle the back button
    // //
    // function onBackKeyDown() {
		// alert("onBackKeyDown");
		// if($.mobile.activePage.is('#homepage')){
        // /* 
         // Event preventDefault/stopPropagation not required as adding backbutton
          // listener itself override the default behaviour. Refer below PhoneGap link.
        // */
        // //e.preventDefault();
        // navigator.app.exitApp();
    // }
    // else {
        // navigator.app.backHistory();
    // }
    // }


