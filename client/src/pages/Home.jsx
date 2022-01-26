import { MapTest } from '../components';
import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import api from '../api'
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css'
import 'leaflet/dist/leaflet.css';


var myIcon = L.icon({
  iconUrl: 'https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png',
  iconSize: [37, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});


const position = [41.035, 29.059]

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      parks: [],
      isLoading: false,
    }
  }
  componentDidMount = async () => {
    this.setState({ isLoading: true })

    await api.getAllParks()
      .then(parks => {
        this.setState({
          parks: parks.data.data,
          isLoading: false,
        })
      })
  }
  render() {
    const { parks } = this.state
    return (
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        /><MarkerClusterGroup>
        {parks.map(park => {
          return (
            L.Icon.Default.mergeOptions,

            <Marker position={[park.latitude, park.longitude]} icon={myIcon} >
              <Popup >
                ID: {park.id} <br/>
                Park Adı: {park.name} <br/>
                Lokasyon: {park.address} <br/>
                Park Tipi: {park.parkType} <br/>
                Park Tipi Tanımı: {park.parkTypeDescription} <br/>
                Kapasite: {park.capacity} <br/>
                Çalışma Saatleri: {park.capacity} <br/>
                Semt: {park.district} <br/>
                Enlem: {park.latitude} <br/>
                Boylam: {park.longitude}
              </Popup>
            </Marker>           
             
          )
        })}
        </MarkerClusterGroup>
      </MapContainer>)
  }
}

export default Home
