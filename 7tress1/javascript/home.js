$('#bologna-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })
  
        window.onload = function () {
            document.getElementById('button').onclick = function () {
                document.getElementById('modalOverlay').style.display = 'none'
            };
        };
    // Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  