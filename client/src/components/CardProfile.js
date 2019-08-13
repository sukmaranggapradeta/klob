import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Card extends Component {
    showDetail (value) {
        console.log(value)
    }
    render() {
        return (
            <div className='col s12 m4 l4'>
                  <div className="row">
                    <div className="col s12 m12 l12">
                    <div className="card">
                        <div className="card-image">
                        <img src={ this.props.data.img }/>
                        </div>
                        <div className="card-action">
                        <Link to={`/profile/detail/${this.props.data.name}`}>{this.props.data.name}</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
