import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList'
import SearchBar from './components/SearchBar/SearchBar'

//import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

export const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

export const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={this.businesses} />
      </div>
    );
  }
}

export default App;
