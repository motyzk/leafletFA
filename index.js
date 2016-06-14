var mymap = L.map('mapid').setView([32.066667,34.783333], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,' +
                 ' <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © ' +
                 '<a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibW90eXprIiwiYSI6ImNpcGY5OWpleTAwMHV2bW0wbXc1b2ZycDcifQ.emYLG7_i8O13KMO5JPfXfg',

}).addTo(mymap);

L.marker([32.066667,34.783333], {
    title: "shiran's place"
}).addTo(mymap);