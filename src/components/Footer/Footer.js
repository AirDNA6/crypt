import React, { Component } from "react";
import { Link } from 'react-router-dom'

import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";

const mapStyles = {
  width: '100%',
  height: '100%',
};



class Footer extends Component {

  state = {
    showingInfoWindow: false,  // Hides or shows the InfoWindow
    activeMarker: {},          // Shows the active marker upon click
    selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      // <div className="main-footer">
      //   <div className="container">
      //     <div className="row">
      //       {/* Column1 */}
      //       <div className="col">
      //         {/* <h4>THICC MEMES INC</h4>
      //       <h1 className="list-unstyled">
      //         <li>342-420-6969</li>
      //         <li>Moscow, Russia</li>
      //         <li>123 Streeet South North</li>
      //       </h1> */}
      //         <Link to="/">
      //           <img src="../images/logo.png" alt="" className="rmdb-logo" />
      //         </Link>
      //       </div>
      //       {/* Column2 */}
      //       <div className="col">
      //         <h4>Stuff</h4>
      //         <ui className="list-unstyled">
      //           <li>DANK MEMES</li>
      //           <li>OTHER STUFF</li>
      //           <li>GUD STUFF</li>
      //         </ui>
      //       </div>
      //       {/* Column3 */}
      //       <div className="col" style={{marginLeft: '200px'}}>
      //         {/* <h4>WELL ANOTHER COLUMN</h4>
      //       <ui className="list-unstyled">
      //         <li>DANK MEMES</li>
      //         <li>OTHER STUFF</li>
      //         <li>GUD STUFF</li>
      //       </ui> */}


      //         <Map
 
      //           google={this.props.google}
      //           zoom={14}
      //           style={mapStyles}
      //           initialCenter={{ lat: 44.78214727, lng: 20.47183692 }}
      //         >
      //           <Marker
      //             onClick={this.onMarkerClick}
      //             name={'Cinema Crypt'}
      //           />
      //           <InfoWindow
      //             marker={this.state.activeMarker}
      //             visible={this.state.showingInfoWindow}
      //             onClose={this.onClose}
      //           >
      //             <div style={{ color: 'black' }}>
      //               <h4>{this.state.selectedPlace.name}</h4>
      //             </div>
      //           </InfoWindow>
      //         </Map>

      //       </div>
      //     </div>
      //     <hr />
      //     <div className="row">
      //       <p className="col-sm text-center">
      //         &copy;{new Date().getFullYear()} CRYPT | All rights reserved |
      //       Terms Of Service | Privacy
      //     </p>
      //     </div>
      //   </div>


      // </div>
      <MDBFooter  className="page-footer font-small lighten-5 pt-0 futer">
      <div style={{ backgroundColor: "#21d192", color: "#343A40"}}>
      
        <MDBContainer >
          <MDBRow className="py-4 d-flex align-items-center">
            <MDBCol md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0" >
              <h6 className="mb-0 white-text fontQua
              ntico">
                GET CONNECTED WITH US ON SOCIAL NETWORKS!
              </h6>
            </MDBCol>
            <MDBCol md="6" lg="7" className="text-center text-md-right">
            <div className="flex-center">
              <a className="fb-ic">
                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="tw-ic">
                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="gplus-ic">
                <i className="fab fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="li-ic">
                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="ins-ic">
                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                </i>
              </a>
              <a className="pin-ic">
                <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
              </a>
            </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <MDBContainer className="mt-5 mb-4 text-center text-md-left futer" >

        <MDBRow className="mt-3">
          <MDBCol md="12" lg="4" xl="3" className="mb-4 dark-grey-text">
            {/* <h6 className="text-uppercase font-weight-bold">
            
              <strong className="fontQuantico">Company name</strong>
            </h6> */}
            <Link to="/">
                <img src="../images/logo.png" className="center" alt="" style={{
                  height: "150px",
                  width: "150px",
                  alignSelf: "center"
                  
                }} />
              </Link>
           
            {/* <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} /> */}



            <p className="futer "> 
            The Crypt was completely renovated in 2020 in accordance with the latest world standards. Reconstruction and adaptation of the old cinema space resulted in the first multiplex in Belgrade
             </p>



          </MDBCol>

          <MDBCol md="12" lg="4" xl="2" className="mb-4 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="futer">Crypt</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="futer">
            Possibility of purchasing concessions (popcorn, nachos and various soft drinks) that the audience can consume during the screening.
            </p>
          </MDBCol>
          

            
         
          <MDBCol md="12" lg="3" xl="3" className="mb-4 ml-2 dark-grey-text">
            <h6 className="text-uppercase font-weight-bold">
              <strong className="futer">Contact</strong>
            </h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px" }} />
            <p className="futer">
              <i className="fa fa-home mr-3" /> Belgrade, BG 11000, RS
            </p>
            <p className="futer">
              <i className="fa fa-envelope mr-3" /> crypt@gmail.com
            </p>
            <p className="futer">
              <i className="fa fa-phone mr-3" /> + 65 1327 172
            </p>
            <p className="futer">
              <i className="fa fa-print mr-3" /> + 011 4200 123
            </p>
          </MDBCol>



          <MDBCol sm="12" lg="2" xl="3" className="mb-4 dark-grey-text kolonaMapa">
          <Map
 
           google={this.props.google}
           zoom={14}
           style={mapStyles}
           initialCenter={{ lat: 44.78214727, lng: 20.47183692 }}
         >
           <Marker
             onClick={this.onMarkerClick}
             name={'Cinema Crypt'}
           />
           <InfoWindow
             marker={this.state.activeMarker}
             visible={this.state.showingInfoWindow}
             onClose={this.onClose}
           >
             <div style={{ color: 'black' }}>
               <h4>{this.state.selectedPlace.name}</h4>
             </div>
           </InfoWindow>
         </Map>

          </MDBCol>


         


        </MDBRow>
      </MDBContainer>
      <div className=" text-center py-3">
        <MDBContainer fluid className="futer">
        <p>&copy; {new Date().getFullYear()} Copyright:{" "} <span style={{color: 'white'}}>CRYPT</span></p> 
       
        </MDBContainer>
      </div>
    </MDBFooter>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCcb-aELf1jmn0J9R5U-C6_WJVf0StZroo'
})(Footer);