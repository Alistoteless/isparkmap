import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})``

class Logo extends Component {
    render() {
        return (
            <Wrapper>
                <Link to="/login" className="nav-link">
                        <Button color="info">Yönetici Paneli</Button>
                </Link>
            </Wrapper>
        )
    }
}

export default Logo
