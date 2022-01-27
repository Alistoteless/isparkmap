import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

class ParksUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleInputChange = async event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleUpdatePark = async () => {
        const { id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude} = this.state
        const inspark = {id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude }

        await api.updateParkById(id, inspark).then(res => {
            window.alert(`Park updated successfully`)
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const park = await api.getParkById(id)

        this.setState({ //id'ye ait güncellenecek verilerin atanması (ekrana basmak için)
            name: park.data.data.name,
            address: park.data.data.address,
            parkType: park.data.data.parkType,
            parkTypeDescription: park.data.data.parkTypeDescription,
            capacity: park.data.data.capacity,
            workingHours: park.data.data.workingHours,
            district: park.data.data.district,
            longitude: park.data.data.longitude,
            latitude: park.data.data.latitude,
            
        })
    }

    render() {
        const { id, name, address, parkType, parkTypeDescription, capacity, workingHours, district, longitude, latitude } = this.state
        return (
            <Wrapper>
                <Title> '{id}' ID numaralı Otopark Bilgilerini Düzenle</Title>
                <Label>ID:</Label>
                <InputText
                    type="text"
                    value={id}
                    disabled = {true}
                />

                <Label>Park Yeri Adı:</Label>
                <InputText
                    type="text"
                    id="name"
                    value={name}
                    onChange={this.handleInputChange}
                />
                <Label>Lokasyon Adı: </Label>
                <InputText
                    type="text"
                    id="address"
                    value={address}
                    onChange={this.handleInputChange}
                />

                <Label>Park Tipi: </Label>
                <InputText
                    type="text"
                    id="parkType"
                    value={parkType}
                    onChange={this.handleInputChange}
                />

                <Label>Park Tipi Tanımı: </Label>
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


                <Label>Çalışma Saatleri</Label>
                <InputText
                    type="text"
                    id="workingHours"
                    value={workingHours}
                    onChange={this.handleInputChange}
                />

                <Label>İlçe: </Label>
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
                <Button onClick={this.handleUpdatePark}>Update Park</Button>
                <CancelButton href={'/parks/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default ParksUpdate
