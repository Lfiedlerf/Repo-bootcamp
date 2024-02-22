<script>
  function initMap() {
    // Coordenadas de la ubicación
    var myLatLng = {lat: -33.41872, lng: -70.60189}; // Aquí va: Latitud y longitud

    // Opciones del mapa
    var mapOptions = {
      zoom: 15, // Nivel de zoom
      center: myLatLng // Centro del mapa
    };

    // Crear el mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Crear marcador en la ubicación
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'REDFENIX'
    });
  }
</script>

<!-- Incluir la API de Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFTp3W7N7hFDU7uT-jd1HGK9JsxclN1JU&callback=initMap" async defer></script>