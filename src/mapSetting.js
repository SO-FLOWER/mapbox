import mapboxStyle from './mapboxStyle';

export default {
  accessToken:
    'pk.eyJ1IjoiY2hlbmpzb24iLCJhIjoiY2trNHQwZDVxMWt2NzJ2b3RqaHR5d2RoMiJ9._NbA-tXJfzc6lPsCWa3viQ',
  // mapboxStyle: 'mapbox://styles/mapboxcny/ckb7bdc382icl1ipcvzt9btbs',
  offsetPitch: 89,
  mapboxStyle: mapboxStyle,
  interactive: true,
  container: 'map',
  minZoom: 11,
  maxZoom: 20,
};
