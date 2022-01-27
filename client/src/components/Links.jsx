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

// Navbar üzerinde görünen Linkler

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    İsparkApp       {/* İspark Linki, haritanın bulunduğu ana sayfaya döner */}
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/parks/list" className="nav-link">
                                Otoparklar Listesi  {/* Park listesi  */}
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/parks/create" className="nav-link">
                                Otopark Ekle    {/* Yeni park ekleme  */}
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
