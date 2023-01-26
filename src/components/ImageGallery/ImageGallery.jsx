import { Component } from 'react';
// import FetchCountries from '../../fetchImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export class ImageGallery extends Component {
    state = {
    
images: [],
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.name !== prevState.name){
        console.log("ghbdtn");
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
