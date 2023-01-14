import React, { Component } from "react";
import MainPage from "../MainPage/main-page";
import axios from 'axios';

export default class HomePage extends Component {
  componentDidMount() {
    axios.get(`/`)
    .then(res => {
      console.log(res.data)
    })
  }
  render() {
    return (
      <div className="home-container">
        <MainPage/>
      </div>
    );
  }
}
