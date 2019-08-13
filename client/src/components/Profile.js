import React, { Component } from 'react'
import CardProfile from '../components/CardProfile'
import DataCompany from '../asset/company.json'
import DataCommunity from '../asset/community.json'
import DataEducation from '../asset/educational.json'

export class Profile extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    {/* {JSON.stringify(this.props.match.params.profilename)} */}
                    {
                        this.props.match.params.profilename === 'company'
                        && 
                        <>
                        {
                            DataCompany ? DataCompany.data.map((data, i) => (
                                <CardProfile data={ data } key={i} />
                            )) : ''
                        }
                        </>
                    }
                    {
                        this.props.match.params.profilename === 'educational'
                        && 
                        <>
                        {
                            DataEducation ? DataEducation.data.map((data, i) => (
                                <CardProfile data={ data } key={i} />
                            )) : ''
                        }
                        </>
                    }
                    {
                        this.props.match.params.profilename === 'community'
                        && 
                        <>
                        {
                            DataCommunity ? DataCommunity.data.map((data, i) => (
                                <CardProfile data={ data } key={i} />
                            )) : ''
                        }
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default Profile
