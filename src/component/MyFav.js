import React, { Component } from "react";
import axios from "axios";
import FavCard from "./FavCard";
export default class MyFav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favData: [],
      show: false,
    };
  }

  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_SERVER}/getfav`).then((favData) => {
      this.setState({
        favData: favData.data,
      });
    });
  };

  render() {
    return (
      <div>
        {this.state.favData.map((item) => {
          return <FavCard getAll={this.componentDidMount} x={item} />;
        })}
      </div>
    );
  }
}
