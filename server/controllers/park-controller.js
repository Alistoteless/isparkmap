const Park = require('../models/park-model')
const axios = require('axios')


createPark = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a park!',
        })
    }

    const park = new Park(body)

    if (!park) {
        return res.status(400).json({ success: false, error: err })
    }

    park
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: park.id,
                message: 'Park created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Park not created!',
            })
        })
}

updatePark = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }else {

        Park.findOneAndUpdate({ id: req.body.id }, body, (err, park) => {
        
            if(park && park.id){
                return res.status(200).json({
                    success: true,
                    id: park.id,
                    message: 'Park updated!',
                })
            } else if (err) {
                return res.status(404).json({
                    err,
                    message: 'Park not uptated!',
                })
            } else {
                return res.status(404).json({               
                    message: 'Park not updated!',
                })
            }
          
        })
    }
}

deletePark = async (req, res) => {
    await Park.findOneAndDelete({ id: req.params.id }, (err, park) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!park) {
            return res
                .status(404)
                .json({ success: false, error: `Park not found` })
        }

        return res.status(200).json({ success: true, data: park })
    }).catch(err => console.log(err))
}

getParkById = async (req, res) => {
    await Park.findOne({ id: req.params.id }, (err, park) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        return res.status(200).json({ success: true, data: park })
    }).catch(err => console.log(err))
}

getParks = async (req, res) => {
    await Park.find({}, (err, parks) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!parks.length) {
            return res
                .status(404)
                .json({ success: false, error: `Park not found` })
        }
        return res.status(200).json({ success: true, data: parks })
    }).catch(err => console.log(err))
}

fetchFromIspark = async (req, res) => {

    await Park.deleteMany({}, (err, result) => {
        console.log(result)
    })

    const remoteParksResponse = await axios.get('https://data.ibb.gov.tr/api/3/action/datastore_search?resource_id=f4f56e58-5210-4f17-b852-effe356a890c&limit=710')
    if (remoteParksResponse && remoteParksResponse.data && remoteParksResponse.data.result && remoteParksResponse.data.result.records && Array.isArray(remoteParksResponse.data.result.records) && remoteParksResponse.data.result.records.length > 0) {
        let parks = remoteParksResponse.data.result.records.map(p => {
            return {
                'id': p._id,
                'name': p.PARK_NAME,
                'address': p.LOCATION_NAME,
                'parkType': p.PARK_TYPE_ID,
                'parkTypeDescription': p.PARK_TYPE_DESC,
                'capacity': p.CAPACITY_OF_PARK,
                'workingHours': p.WORKING_TIME,
                'district': p.COUNTY_NAME,
                'longitude': p.LONGITUDE,
                'latitude': p.LATITUDE
            }
        })

        await Park.insertMany(parks, (err, parks) => {
            if (err) {
                return res.status(400).json({ success: false, error: err })
            } else if (parks && parks.length > 0)
                return res.status(200).json({ success: true, data: parks })
        })
    } else {
        return res.status(404).json({ success: false, error: `Couldn't fetch from Ispark'` })
    }
}


module.exports = {
    createPark,
    updatePark,
    deletePark,
    getParks,
    getParkById,
    fetchFromIspark,
}
