import DropZone from 'react-dropzone'
import React, {Component} from 'react'

class ImageUpload extends Component{
  // will need to have state
  constructor() {
    super()
    this.state = { files: [] }
  }
  onDrop(file) {
    this.setState({files:file})
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
