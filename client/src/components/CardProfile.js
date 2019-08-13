import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Card extends Component {
    state = {
        ImageErr: false,
        ImageDefault: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0HDQ4HBwcNDQcNDQ0HDw0HDQ8IDQ8NFREbFhURExMYHSggGBolGxcTITEhJykrLi4uFx8zODMsNygtLjABCgoKDQ0NFQ0NFSsZFR0rKysrKy0rKysrKysrKy0tKystKys3KysrNysrKysrKystKysrKysrKysrKystKysrK//AABEIAK4BIgMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QALBABAAIAAwYFBAMBAAAAAAAAAAECAxEhBBITMTKxUVJTcZEiQWFyQoGhFP/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4OgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg6AAAAAAAAAAAAAAAAABy1nkhxa+pX5gExDi19SvzCVbRbptE+2oOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjN610teIn8zEOcWvqV+YYdo67e6sGva8SJrFa2iddd2c2R2tZvO7WNWqmyR/OdfxoDIt2W+7bWcomJic9IaLbJWeWcf6zYuDOFz1r4g3cWvqV+YOJX1K/MM8Tg/eO6OLwt2eHH16eINohhdNf1jsmAAAAAAAAAAAAAAAAAAAAAAAAAAAADzto67e6tZtHXb3VojbslN2u/POdf6U420TacqzlT8aZtOD9WHGXlyefMZaTz5KqdMW1dYtP96ttZjHrrHPSfd57bscZVzn7zmDHaN2Zr4Tk4njTna0x4ygiPSwumv6x2TQwumv6x2TVQAAAAAAAAAAAAcAdAAAAAAAAAAAAAB520ddvdW0Y+BabTatc4nXRXwL+TsiLdkxt36LTp9pW42zxifVE5W/GrLwL+TsspGLTSInLwnKVVOmyZdVs48I0WY+LGFG7XqyyiI+yqZxp0yy9soVTg3nnSc/eAVCzgX8nY/wCe/k7IjdhdNf1jsmjSN2IrPOIiElUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEf/9k='
    }

    onError() {
        this.setState({
            ImageErr: true
        })
    }

    render() {
        return (
            <div className='col s12 m4 l4'>
                  <div className="row">
                    <div className="col s12 m12 l12">
                    <div className="card hoverable">
                        <div className="card-image"  style={{ height: '170px'}}>
                        {
                            !this.state.ImageErr &&
                            <img
                                onError={this.onError.bind(this)}
                                src={ this.props.data.img }
                                alt='profile'
                            />
                        }
                        {
                            this.state.ImageErr &&
                            <img src={ this.state.ImageDefault } alt='profile'/>
                        }
                        </div>
                        <div className="card-action center">
                        <Link to={`/profile/${this.props.category}/${this.props.data.id}`} style={{ color: '#EE6E73'}}>{this.props.data.name}</Link>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
