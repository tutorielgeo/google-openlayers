

var view = new ol.View({
  center: ol.proj.transform([7.18500,43.70216], 'EPSG:4326', 'EPSG:3857'),
  zoom: 10
});




var map = new ol.Map({
  layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
  target: 'map',
  view: view
});


function GetLocation() {
            var geocoder = new google.maps.Geocoder();
            var address = document.getElementById("txtAddress").value;
            geocoder.geocode({ 'address': address }, function (results, status) {
            
                    var latitude = results[0].geometry.location.lat();
                    var longitude = results[0].geometry.location.lng();
                    

		var coord = [longitude,latitude];
		var centre = ol.proj.transform(coord, 'EPSG:4326', 'EPSG:3857');
		var map2 = view.setCenter(centre);
		var zoom2 =view.setZoom(18);

		  });
          
		}; 
 
 
	