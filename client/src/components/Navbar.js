import React, { Component } from 'react'
import KlobLogo from '../kloblogo.png'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav>
                    <div className="nav-wrapper">
                        <img style={{ height: '45px', marginLeft: '10px', marginTop: '1%' }} src={KlobLogo} alt="logo" />
                    </div>
                </nav>                
            </>
        )
    }
}

export default Navbar
