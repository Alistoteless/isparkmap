import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    İsparkApp
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/parks/list" className="nav-link">
                                Otoparklar Listesi
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/parks/create" className="nav-link">
                                Otopark Ekle
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
