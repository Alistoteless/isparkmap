import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
// Park ekleme sayfası
const Title = styled.h1.attrs({
    className: 'h2',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 11%;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
// Park eklenmeden önce boş state'in hazırlanması
class ParksInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 0,
            name: '',
            address: '',
            parkType: '',
            parkTypeDescription: '',
            capacity: 0,
            workingHours: '',
            district: '',
            longitude: 0,
            latitude: 0
        }
    }
    // seçilen id ile işlem yapılması için 
    handleInputChange = async event => {
        this.setState({ [event.target.id]: event.target.value })
    }
    // Park ekleme yapısı
    handleIncludePark = async () => {
        const { id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude } = this.state
        const inspark = { id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude }
        
        await api.insertPark(inspark).then(res => { // Park eklenirken asenkron beklenen yapı
            window.alert(`Park Yeri başarıyla eklendi!`)
            this.setState({
                id: 0,
                name: '',
                address: '',
                parkType: '',
                parkTypeDescription: '',
                capacity: 0,
                workingHours: '',
                district: '',
                longitude: 0,
                latitude: 0
            })
        })
    }

    // Aşağıdaki inputlara göre eklenecek parkın render'ı
    render() {
        const { id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude } = this.state
        
        return (
            <Wrapper>
                <Title>Yeni Otopark Ekle</Title>

                <Label>ID: </Label>
                <InputText
                    type="number"
                    id="id"
                    value={id}
                    onChange={this.handleInputChange}
                />
                <Label>Park Yeri Adı:</Label>
                <InputText
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.handleInputChange}
                />

                <Label>Lokasyon Adı:</Label>
                <InputText
                    type="text"
                    id="address"
                    value={address}
                    onChange={this.handleInputChange}
                />

                <Label>Park Tipi:</Label>
                <InputText
                    type="text"
                    id="parkType"
                    value={parkType}
                    onChange={this.handleInputChange}
                />

                <Label>Park Tipi Tanımı:</Label>
                <InputText
                    type="text"
                    id="parkTypeDescription"
                    value={parkTypeDescription}
                    onChange={this.handleInputChange}
                />

                <Label>Kapasite: </Label>
                <InputText
                    type="number"
                    id="capacity"
                    value={capacity}
                    onChange={this.handleInputChange}
                />


                <Label>Çalışma Saatleri: </Label>
                <InputText
                    type="text"
                    id="workingHours"
                    value={workingHours}
                    onChange={this.handleInputChange}
                />

                <Label>Semt: </Label>
                <InputText
                    type="text"
                    id="district"
                    value={district}
                    onChange={this.handleInputChange}
                />

                <Label>Boylam: </Label>
                <InputText
                    type="number"
                    id="longitude"
                    placeholder='30.12312312'
                    value={longitude}
                    onChange={this.handleInputChange}
                />

                <Label>Enlem: </Label>
                <InputText
                    type="number"
                    id="latitude"
                    placeholder='41.12312312'
                    value={latitude}
                    onChange={this.handleInputChange}
                />

                <Button onClick={this.handleIncludePark}>Park Yeri Ekle</Button>
                <CancelButton href={'/parks/list'}>İptal Et</CancelButton>
            </Wrapper>
        )
    }
}

export default ParksInsert
