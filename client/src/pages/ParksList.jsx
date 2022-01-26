import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'
import { Button } from 'reactstrap'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    margin: 0 8%;
`

const Title = styled.h1.attrs({
    className: 'h2',
    
})``

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
    font-weight: 600;
    padding: 0 25%;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
    font-weight: 600;
    padding: 0 50%;
`

class UpdatePark extends Component {
    updatePark = event => {
        event.preventDefault()

        window.location.href = `/parks/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updatePark}>Düzenle</Update>
    }
}

class DeletePark extends Component {
    deletePark = event => {
        event.preventDefault()

        if (
            window.confirm(
                `${this.props.id} ID numaralı Park yerini kalıcı olarak silmek istiyor musunuz?`,
            )
        ) {
            api.deleteParkById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deletePark}>Sil</Delete>
    }
}

class ParksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            parks: [],
            columns: [],
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

    fetchFromIspark = async () => {
        this.setState({ isLoading: true })
        
        await api.deleteAll()
    
        await api.fetchFromIspark()
            .then(parks => {
                this.setState({
                    parks: parks.data.data,
                    isLoading: false,
                })
            })
    }

    render() {
        const { parks, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: 'id',
                filterable: true,
            },
            {
                Header: 'Park Yeri Adı',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Lokasyon Adı',
                accessor: 'address',
                filterable: true,
            },
            {
                Header: 'Park Tipi',
                accessor: 'parkType',
                filterable: true,
            },
            {
                Header: 'Park Tipi Tanımı',
                accessor: 'parkTypeDescription',
                filterable: true,
            },
            {
                Header: 'Kapasite',
                accessor: 'capacity',
                filterable: 'true'
            },
            {
                Header: 'Çalışma Saatleri',
                accessor: 'workingHours',
                filterable: true,
            },
            {
                Header: 'Boylam',
                accessor: 'longitude',
                filterable: true,
            },
            {
                Header: 'Enlem',
                accessor: 'latitude',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeletePark id={props.original.id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdatePark id={props.original.id} />
                        </span>
                    )
                },
            },
        ]


        let showTable = true
        if (!parks.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <Title>Kayıtlı Otoparklar Listesi</Title>
                <Button variant="contained" onClick={this.fetchFromIspark}>İBB Veritabanı ile Yenile</Button>
                {showTable && (
                    <ReactTable
                        data={parks}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={1000}
                        pageSize={1000}
                        showPageSizeOptions={false}
                        showPaginationBottom={false}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default ParksList
