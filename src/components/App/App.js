import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../elements/Header/Header'
import Footer from '../elements/Footer/Footer'
import Home from '../Home/Home'
import About from '../About/About'
import Halls from '../Halls/HallInfo'
import Contact from '../Contact/Contact'
import Movie from '../Movie/Movie'
import NotFound from '../elements/NotFound/NotFound'
import ScrollToTop from '../ScrollToTop'
import Scroll from '../Scroll'
import Faq from '../Faq'
import Hala from '../HallOne/HallOne'



const App = () => {


  return (
    <div>
     <BrowserRouter>
     <ScrollToTop />
      <React.Fragment>

      <Header />
      <Scroll showBelow={250} />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/halls" component={Halls} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/faq" component={Faq} exact />
          <Route path="/hala" component={Hala} exact />
          <Route path="/:movieId"  component={Movie} exact />


          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
    </div>
    
  )
}

export default App