!function(e){var o={};function t(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var a in e)t.d(n,a,function(o){return e[o]}.bind(null,a));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=60)}({60:function(e,o){!function(e){if(e("#dokan-geolocation-product-location").length){p.prototype.onAdd=function(e){var o=this;this._map=e;var t=document.createElement("i");t.className="fa fa-search";var n=document.createTextNode("Search Map"),a=document.createElement("button");a.type="button",a.appendChild(t),a.appendChild(n),a.addEventListener("click",(function(e){e.preventDefault();var t=document.getElementById(o._mapId).getElementsByClassName("mapboxgl-ctrl-top-left")[0];t.className=t.className+" show-geocoder"}));var r=document.createElement("div");return r.className="mapboxgl-ctrl mapboxgl-ctrl-group dokan-mapboxgl-ctrl",r.appendChild(a),this._container=r,this._container},p.prototype.onRemove=function(){this._container.parentNode.removeChild(this._container),this._map=void 0};var o,t,n,a,r,l,d,c,i=e("#_dokan_geolocation_use_store_settings"),s={};i.on("change",(function(){e("#dokan-geolocation-product-location-no-store-settings").toggleClass("dokan-hide"),e("#dokan-geolocation-product-location").toggleClass("dokan-hide"),i.is(":checked")||o||g()}));var u=e("#dokan-geolocation-product-location").find(".locate-icon");navigator.geolocation?u.on("click",(function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,n=e.coords.longitude;c.setLngLat([n,t]),o.setCenter([n,t]),f({latitude:t,longitude:n})}))})):u.addClass("dokan-hide"),i.is(":checked")||g(),e("#dokan-map-add").on("input",(function(e){f({address:e.target.value})}))}function p(e){this._mapId=e}function g(){n="dokan-geolocation-product-location-map",t=e('[name="_dokan_geolocation_mapbox_access_token"]').val(),a=e('[name="_dokan_geolocation_product_dokan_geo_latitude"]'),r=e('[name="_dokan_geolocation_product_dokan_geo_longitude"]'),l=e("#_dokan_geolocation_product_location"),s={latitude:a.val(),longitude:r.val(),address:l.val(),zoom:12},mapboxgl.accessToken=t,(o=new mapboxgl.Map({container:n,style:"mapbox://styles/mapbox/streets-v10",center:[s.longitude,s.latitude],zoom:s.zoom})).addControl(new mapboxgl.NavigationControl),o.addControl(new p(n),"top-left"),o.on("load",(function(){d=new MapboxGeocoder({accessToken:mapboxgl.accessToken,mapboxgl:mapboxgl,zoom:o.getZoom(),placeholder:"Search Address",marker:!1,reverseGeocode:!0}),o.addControl(d,"top-left"),d.setInput(s.address),d.on("result",(function(e){var t=e.result,n=t.center,a=t.place_name;c.setLngLat(n),o.setCenter([n[0],n[1]]),f({address:a,latitude:n[1],longitude:n[0]})}))})),c=new mapboxgl.Marker({draggable:!0}).setLngLat([s.longitude,s.latitude]).addTo(o).on("dragend",m)}function m(){var t=d.geocoderService.client.origin,n=d.geocoderService.client.accessToken,a=c.getLngLat().wrap().lng,r=c.getLngLat().wrap().lat;o.setCenter([a,r]),f({latitude:r,longitude:a});var l=t+"/geocoding/v5/mapbox.places/"+a+"%2C"+r+".json?access_token="+n+"&cachebuster="+ +new Date+"&autocomplete=true";d._inputEl.disabled=!0,d._loadingEl.style.display="block",jQuery.ajax({url:l,method:"get"}).done((function(t){t.features&&(d._typeahead.update(t.features),e(o._controlContainer).find(".mapboxgl-ctrl-top-left").addClass("show-geocoder"))})).always((function(){d._inputEl.disabled=!1,d._loadingEl.style.display=""}))}function f(e){s=Object.assign(s,e),a.val(s.latitude),r.val(s.longitude),l.val(s.address)}}(jQuery)}});