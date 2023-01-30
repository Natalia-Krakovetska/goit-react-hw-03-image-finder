import { Component } from 'react';
// import { FetchApi } from '../../fetchImages';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
export class ImageGallery extends Component {
    state = {    
images: [],
    }

    addImages= ({ fetchRezult }) => {
      this.setState ({ images: fetchRezult, })};

      
    componentDidUpdate(prevProps, prevState){
        if (prevProps.name !== this.props.name){
        console.log("ghbdtn");
        // return const data = FetchApi(this.props.name);
       }
        };
    
    
    
    render() {
    return (
              <ul className="gallery">
        {this.state.images.map(image => (
          <ImageGalleryItem image={this.props.name} />
        ))}
      </ul>
    );
  }
}
