import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'  // router cerebro,  route  liga /  link de referencia
import Products from '../Products/Products'
import Form from '../Form/Form'
class Navbar extends Component {
    render(){
        return (
            <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="mx-3 text-danger" to="/">Productos</Link>
            </li>
            <li className="nav-item">
            <Link className="mx-3 text-danger" to="/form/"> Subir un  Producto </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <Route path="/" exact component= {Products}/>  
      <Route path="/form/" exact component= {Form}/>  



            </Router>  //  navbar accede a propiedades de router
  

        )
    }
}

export default Navbar

//  componente creado y a disposicion de los demas componentes