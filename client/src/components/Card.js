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
                        <Link to={`/profile/${this.props.data.name}`}>{this.props.data.name}</Link>
                        {/* <a onClick={ () => this.showDetail(this.props.data) } style={{ color: '#EE6E73', alignItems: 'center'}}>{this.props.data.name}</a> */}
                        {/* { JSON.stringify(this.props.data) } */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
