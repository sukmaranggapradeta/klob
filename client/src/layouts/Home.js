import React, { Component } from 'react'
import Card from '../components/Card'
import DataHome from '../asset/index.json'

export class Home extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {
                        DataHome ? DataHome.data.map((data, i) => (
                            <Card data={ data } key={i} />
                        )) : ''
                    }    
                </div>
          </div>
          )
    }
}

export default Home
