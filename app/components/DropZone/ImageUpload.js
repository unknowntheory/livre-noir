import DropZone from 'react-dropzone'
import React, {Component} from 'react'
import axios from 'axios';



class ImageUpload extends Component{
  // will need to have state
  constructor(props) {
    super(props)
    this.state = { files: [] }

  }
  onDrop(acceptedFiles, rejectedFiles) {
    const { handleFile } = this.props
      acceptedFiles.forEach(file => {

          const reader = new FileReader();

          reader.onloadend = (event) => {
              let fileAsBinaryString = event.target.result
              handleFile(fileAsBinaryString);// send file to parent component
          };
          reader.onabort = () => console.log('file reading was aborted');
          reader.onerror = () => console.log('file reading has failed');
          reader.readAsDataURL(file);
          window.URL.revokeObjectURL(file.preview);// to prevent memory leak
      });

  }

render(){
  return(
    <section>
      <div className="dropzone">
        <DropZone onDrop={this.onDrop.bind(this)}>
          <p>Drop it like it's hot</p>
        </DropZone>
      </div>

    </section>
  )
}

}
export default ImageUpload
