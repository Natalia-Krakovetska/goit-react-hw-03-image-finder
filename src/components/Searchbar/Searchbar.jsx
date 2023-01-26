import { Component } from 'react';


export class SearchBar extends Component {
    // static propTypes = {
    //     onSubmit: PropTypes.func.isRequired,
    //   };
    state = {
        name: "",
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value, });
      };

      handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button" >
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
