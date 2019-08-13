import React, { Component } from 'react'
import Card from '../components/Card'
// import DataHome from '../asset/index.json'
import axios from 'axios'

export class Home extends Component {
    state = {
        DataHome : []
    }
    getDataHome() {
        axios
        .get('http://localhost:3003/home')
        .then(({ data }) => {
            this.setState({
                DataHome: data
            })
        })
        .catch((err) => {
          console.log('err', err)
        })

    }
    componentDidMount() {
        this.getDataHome()
    }

    render() {
        const { DataHome } = this.state
        return (
            <div className='container'>
                <div className='row'>
                    {
                        DataHome.data && DataHome.data.map((data, i) => (
                            <Card data={ data } key={i} />
                        ))
                    }    
                </div>
          </div>
          )
    }
}

export default Home
