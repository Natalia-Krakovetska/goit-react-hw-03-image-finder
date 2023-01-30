import { Component } from 'react';

// import { PropTypes } from 'prop-types';


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
      reset = () => {
        this.setState({
          name: '',
        });
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
            name="name"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
