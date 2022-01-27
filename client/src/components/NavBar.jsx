import React, { Component } from 'react'
import styled from 'styled-components'
import Admin from './Admin'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container',
})`
    height: 100px;
`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
`
// Navbar itemi ve üzerinde yer alacaklar
class NavBar extends Component {
    render() {
        return (
            <Container className="container">
                <Nav>
                    <Links />
                    <Admin />
                </Nav>
            </Container>
        )
    }
}

export default NavBar
