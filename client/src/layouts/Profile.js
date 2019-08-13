import React, { Component } from 'react'
import CardProfile from '../components/CardProfile'
// import DataCompany from '../asset/company.json'
// import DataCommunity from '../asset/community.json'
// import DataEducation from '../asset/educational.json'
import axios from 'axios'

export class Profile extends Component {
    state = {
        DataProfile: [],
    }

    getDataProfile() {
        axios
        .get(`http://localhost:3003/${this.props.match.params.profilename}`)
        .then(({ data }) => {
            this.setState({
                DataProfile: data
            })
        })
        .catch((err) => {
          console.log('err', err)
        })

    }

    componentDidMount() {
        this.getDataProfile()
    }

    render() {
        const { DataProfile } = this.state
        return (
            <div className='container'>
                <div className='row'>
                    {
                        <>
                        {
                            DataProfile.data && DataProfile.data.map((data, i) => (
                                <CardProfile data={ data } category= {this.props.match.params.profilename} key={i} />
                            ))
                        }
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default Profile
