import { Component } from 'react';
import { FetchImages } from '../../fetchImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export class ImageGallery extends Component {
    state = {
    name: '',
images: [],
    }
    addSearchName = ({ name }) => {
      this.setState({ name: this.props.name });
    };
    addImages= ({ fetchRezult }) => {
      this.setState ({ images: fetchRezult, })};
    componentDidUpdate(prevProps, prevState){
        if (prevProps.name !== prevState.name){
        console.log("ghbdtn");
        const fetchRezult = FetchImages(this.state.name)
        .then(resp => {
          console.log(resp);
          if (!resp.ok) {
            throw new Error('statusText');
          }
          return resp.json();
        })
        .catch(err => console.log('Oops, there is no country with that name'));
        return fetchRezult;
        }
        };
    
    
    
    render() {
    return (
              <ul className="gallery">
        {this.state.images.map(image => (
          <ImageGalleryItem image={this.state.name} />
        ))}
      </ul>
    );
  }
}
