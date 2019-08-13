import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Card extends Component {
    render() {
        return (
            <div className='col s12 m4 l4'>
                  <div className="row">
                    <div className="col s12 m12 l12">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={ this.props.data.img } alt='category'/>
                            </div>
                            <div className="card-action center">
                                <Link to={`/profile/${this.props.data.name}`} style={{ color: '#EE6E73'}}>{this.props.data.name}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
