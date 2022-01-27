import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import api from '../api'
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css'
import 'leaflet/dist/leaflet.css';
import '../style'
 
// Ana Sayfa

var myIcon = L.icon({ // ilgil url'den alınan marker png'nin tanınması ve özellikleri
  iconUrl: 'https://www.iconpacks.net/icons/2/free-parking-sign-icon-2526-thumb.png',
  iconSize: [37, 45],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
});


const position = [41.035, 29.059] // Harita başlangıç için ilk lokasyonun değişkene atanması

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {    //  State'e yüklenecek yapılar
      isAdmin: false, // Admin giriş yaptı mı kontrolü için (HENÜZ ÇALIŞMAMAKTA!)
      parks: [],    // listelenmiş parklar
      isLoading: false, // yükleniyor ekranı
    }
  }
  componentDidMount = async () => {   // gerekli componentler mount edildikten sonra yapılacaklar
    this.setState({ isLoading: true })

    await api.getAllParks()   //  await yapısı ile parkların tamamını yüklenilmesi
      .then(parks => {
        this.setState({
          parks: parks.data.data,   
          isLoading: false,
        })
      })
  }
  render() {  // Yüklemeler tamamlandıktan sonra haritanın render edilmesi
    const { parks } = this.state  // bu state'te yer alan tüm parklar
    return (
      <MapContainer center={position} zoom={10} scrollWheelZoom={true}>   {/* Haritanın yerleşeceği çerçeve ve özellikleri */}
        <TileLayer  // Haritaya ait tile'ların yüklenmesi (osm) 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Katkı için atıf 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/> 
        <MarkerClusterGroup className="customcluster">  {/* Marker gruplandıran komponent (leaflet kütüphanesinden)*/}
        {parks.map(park => {  // map Park objelerini parçala ve içeriklerini aşağıda return ile kullan
          return (
            L.Icon.Default.mergeOptions, // Defaul leaflet pin gerekirse
            <Marker position={[park.latitude, park.longitude]} icon={myIcon} >
              <Popup className="custom-popup">  {/* Popup'a yazılacak verilerin park'tan seçilmesi ve yazımı */}
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
