import React, { Component } from 'react'
import axios from 'axios'

export class ProfileDetail extends Component {
    state = {
        DataProfileDetail: '',
        ImageErr: false,
        ImageDefault: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HDQ4HBwcNDQcNDQ0HDw0HDQ8IDQ8NFREbFhURExMYHSggGBolGxcTITEhJykrLi4uFx8zODMsNygtLjABCgoKDQ0NFQ0NFSsZFR0rKysrKy0rKysrKysrKy0tKystKys3KysrNysrKysrKystKysrKysrKysrKystKysrK//AABEIAK4BIgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QALBABAAIAAwYFBAMBAAAAAAAAAAECAxEhBBITMTKxUVJTcZEiQWFyQoGhFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg6AAAAAAAAAAAAAAAAABy1nkhxa+pX5gExDi19SvzCVbRbptE+2oOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjN610teIn8zEOcWvqV+YYdo67e6sGva8SJrFa2iddd2c2R2tZvO7WNWqmyR/OdfxoDIt2W+7bWcomJic9IaLbJWeWcf6zYuDOFz1r4g3cWvqV+YOJX1K/MM8Tg/eO6OLwt2eHH16eINohhdNf1jsmAAAAAAAAAAAAAAAAAAAAAAAAAAAADzto67e6tZtHXb3VojbslN2u/POdf6U420TacqzlT8aZtOD9WHGXlyefMZaTz5KqdMW1dYtP96ttZjHrrHPSfd57bscZVzn7zmDHaN2Zr4Tk4njTna0x4ygiPSwumv6x2TQwumv6x2TVQAAAAAAAAAAAAcAdAAAAAAAAAAAAAB520ddvdW0Y+BabTatc4nXRXwL+TsiLdkxt36LTp9pW42zxifVE5W/GrLwL+TsspGLTSInLwnKVVOmyZdVs48I0WY+LGFG7XqyyiI+yqZxp0yy9soVTg3nnSc/eAVCzgX8nY/wCe/k7IjdhdNf1jsmjSN2IrPOIiElUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEf/9k='
    }

    getDataProfileDetail() {
        axios
        .get(`http://localhost:3003/${this.props.match.params.profilename}`)
        .then(({ data }) => {
            this.setState({
                DataProfileDetail: data.data.filter(el => (el.id === this.props.match.params.profiledetail ))
            })
        })
        .catch((err) => {
          console.log('err', err)
        })

    }

    onError() {
        this.setState({
            ImageErr: true
        })
    }

    componentDidMount() {
        this.getDataProfileDetail()
    }

    render() {
        const { DataProfileDetail, ImageDefault, ImageErr } = this.state
        return (
            <div className='container'>
                <div className='row'>
                    <div className="col s12 m8 offset-m2 l8 offset-l2">
                        <div className="card hoverable">
                            <div className="card-image">
                                {
                                    !ImageErr && DataProfileDetail &&
                                    <img
                                        onError={this.onError.bind(this)}
                                        src={ DataProfileDetail && DataProfileDetail[0].img }
                                        alt='category'
                                    />                                    
                                }
                                {
                                    ImageErr &&
                                    <img src={ ImageDefault } alt='category'/>
                                }
                            </div>
                            <div className="card-content center">
                                <span style={{ color: '#EE6E73'}} className="card-title">{ DataProfileDetail && (DataProfileDetail[0].name).toUpperCase() }</span>
                                <p style={{ color: '#EE6E73'}}>{ DataProfileDetail && DataProfileDetail[0].desc }</p>
                            </div>
                        </div>
                    </div>
                    {/* {JSON.stringify(this.state.DataProfileDetail[0])} */}
                </div>
            </div>
        )
    }
}

export default ProfileDetail
