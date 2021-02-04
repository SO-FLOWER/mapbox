import React from 'react'
import './mapbox.css'
import './mapbox-gl.css'
import mapboxgl from 'mapbox-gl';
// import mapSetting from './mapSetting'

let geojson = {
    'type': 'FeatureCollection',
        'features': [
        {
        'type': 'Feature',
        'properties': {
            'message': '撒点',
            'iconSize': [60, 60]
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [115.94859921511177, 29.663841226158738]
            }
        },
        {
        'type': 'Feature',
        'properties': {
            'message': '城市',
            'iconSize': [50, 50]
            },
        'geometry': {
            'type': 'Point',
            'coordinates': [115.994483, 29.666233]
            }
        },
        {
        'type': 'Feature',
        'properties': {
            'message': '道路',
            'iconSize': [40, 40]
            },
        'geometry': {
            'type': 'Point',
            'coordinates': [115.977109, 29.686071]
            }
        }
        ]
    }
// let mapboxStyle={}
class Map extends React.Component {
  constructor() {
    super();
    // mapboxStyle=mapSetting.mapboxStyle
  
    this.state = {
    }
  }

  componentDidMount() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlbmpzb24iLCJhIjoiY2trNHQwZDVxMWt2NzJ2b3RqaHR5d2RoMiJ9._NbA-tXJfzc6lPsCWa3viQ';
    
    const map = new mapboxgl.Map({
        container: 'map',
        // style:{
        //     "version": 8,
        //     "name": "Mapbox Streets",
        //     "sprite": "mapbox://sprites/mapbox/streets-v8",
        //     "glyphs": "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
        //     "sources": {
        //         "osm-tiles": {
        //             "type": "raster",
        //             "tiles": [
        //             "http://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
        //             ],
        //             "tileSize": 256
        //         }
        //     },
        //   "layers":[{
        //       "id": "123",
        //        "type": "raster",
        //        "source": "osm-tiles",
        //        "source-layer": "osmtiles"
        //   }]
        // },
        style: 'mapbox://styles/chenjson/ckk6axuje0j5j17qbgniv792v',
        center: [115.94859921511177,29.663841226158738], //地图中心经纬度
        zoom: 14, //缩放级别
        minZoom: 9,
        maxZoom: 19,
        pitch: 45,
        bearing: -17.6,
        scrollZoom: true,
    });

    geojson.features.forEach(function (marker) {
        var el = document.createElement('div');
        var sp = document.createElement('div');

        sp.innerHTML=marker.properties.message;
        sp.style.fontSize = 40 + 'px';
        sp.style.color = '#fff'

        el.className = 'marker';
        el.style.backgroundImage =
        'url(https://placekitten.com/g/' +
        marker.properties.iconSize.join('/') +
        '/)';
        el.style.width = marker.properties.iconSize[0] + 'px';
        el.style.height = marker.properties.iconSize[1] + 'px';
         
        el.addEventListener('click', function () {
        window.alert(marker.properties.message);
        });
         
        // add marker to map
        new mapboxgl.Marker(sp,el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        });

    // Set options
    // var marker = new mapboxgl.Marker().setLngLat([115.94859921511177, 29.663841226158738]).addTo(map);
    
    // map.addSource("polygon", createGeoJSONCircle([115.94859921511177, 29.663841226158738], 0.5));

    // map.addLayer({
    //     "id": "polygon",
    //     "type": "fill",
    //     "source": "polygon",
    //     "layout": {},
    //     "paint": {
    //         "fill-color": "blue",
    //         "fill-opacity": 0.6
    //     }
    // });
    // var nav = new mapboxgl.NavigationControl();
    // map.addControl(nav, 'top-left');
  }

  render() { 
    return (
      <div>
        <div id='map' style={{ position: 'absolute',top:0,bottom:0,width:'100%'}} />
      </div>
    );
  }
}

export default Map;