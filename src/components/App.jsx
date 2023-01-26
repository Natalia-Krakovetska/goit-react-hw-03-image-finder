import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";

export class App extends Component {
  state= {
    name: '',
   
  };
  addName = ({ name }) => {
    this.setState({ name });
  };


  render() { 
  return (
  <div>
      <SearchBar onSubmit={this.addName}/>
      <ImageGallery name={this.state.name}/>
    </div>)
  };
};
