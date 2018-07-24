import React, { Component } from 'react';

class Map extends Component{

	componentDidMount(){
		function initMap(){
			let map = new window.google.maps.Map(document.getElementById('map'), {
	         center: {lat: 40.74135, lng: -73.99802},
	         zoom: 14
	       });			
		}
initMap();
  // console.log(window.google);
	}


	render(){
		return (
			<div id="map"></div>
		)
	}
}

export default Map;