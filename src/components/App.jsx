import { Component } from "react";
import { SearchBar } from "./Searchbar/Searchbar";

export class App extends Component {
  render() { 
  return (
  <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar />
    </div>)
  };
};
// key=31910031-2af744f88dbcdc5739401f7e8