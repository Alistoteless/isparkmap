import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <Link to="/login" className="nav-link">
                        <button>Admin Giriş</button>
                </Link>
            </Wrapper>
        )
    }
}

export default Logo
