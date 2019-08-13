const DataIndex = require('../index.json')
const DataComunity = require('../community.json')
const DataEducational = require('../educational.json')
const DataCompany = require('../company.json')

class DataController {
    static welcome(req, res) {
        res.status(200).json({
            message: 'Welcome to klob server'
        })
    }

    static getIndex(req, res) {
        res.status(200).json(DataIndex)
    }

    static getComunity(req, res) {
        res.status(200).json(DataComunity)
    }

    static getEducational(req, res) {
        res.status(200).json(DataEducational)
    }

    static getCompany(req, res) {
        res.status(200).json(DataCompany)
    }

}

module.exports = DataController