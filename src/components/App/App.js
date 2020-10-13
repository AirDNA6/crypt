import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Home from '../Home/Home'
import NowPlaying from '../NowPlaying/NowPlaying'
import About from '../About/About'
import Halls from '../Halls/HallInfo'
import Contact from '../Contact/Contact'
import Movie from '../Movie/Movie'
import NotFound from '../elements/NotFound/NotFound'
import ScrollToTop from '../ScrollToTop'
import Scroll from '../Scroll'
import Faq from '../Faq/Faq'
import HallOne from '../HallOne/HallOne'
import HallTwo from '../HallTwo/HallTwo'
import HallThree from '../HallThree/HallThree'
import HallFour from '../HallFour/HallFour'
import HallFive from '../HallFive/HallFive'
import HallSix from '../HallSix/HallSix'
import MX4D2000 from '../MX4D2000/MX4D2000'

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
          <Route path="/nowPlaying" component={NowPlaying} exact />
          <Route path="/mx4d2000" component={MX4D2000} exact />
          <Route path="/halls" component={Halls} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/faq" component={Faq} exact />
          <Route path="/hallone" component={HallOne} exact />
          <Route path="/halltwo" component={HallTwo} exact />
          <Route path="/hallthree" component={HallThree} exact />
          <Route path="/hallfour" component={HallFour} exact />
          <Route path="/hallfive" component={HallFive} exact />
          <Route path="/hallsix" component={HallSix} exact />
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