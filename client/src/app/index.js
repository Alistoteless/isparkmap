import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBar } from '../components'
import { ParksList, ParksInsert, ParksUpdate, Login, Home } from '../pages'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/home.css'

// Aplikasyonun tüm gövde yapısı. 
// client/index.js tarafından publish'e gönderilen App yapısı

function App() {    // <App/>
    return (
        <Router>        {/* Aplikasyon yapısının içerdiği componentlerin dizinleri için Router */}
            <NavBar />      {/* Tüm ekranlarda kalacak olan NavBar */}
            <Switch>        {/* Kullanılacak componentlerin değişimleri*/}
                <Route path="/" exact component={Home} />
                <Route path="/parks/list" exact component={ParksList} />
                <Route path="/parks/create" exact component={ParksInsert} />
                <Route path="/login" exact component={Login} />
                <Route path="/parks/update/:id" exact component={ParksUpdate} />
            </Switch>
        </Router>
    )
}

export default App
