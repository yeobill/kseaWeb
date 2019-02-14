import React, {Component} from 'react';
import {bindAll} from 'lodash';
import Dropzone from 'react-dropzone'
export default class ImageUploader extends Component {

  constructor(props) {
    super();
    this.state = {
      data_uri: null,
      filename: null,
      filetype: null,
      processing: false,
    }
    bindAll(this, 'handleFile', 'renderDropZone');
  }

  handleFile(files) {
    const reader = new FileReader();
    const file = files[0];

    reader.onload = (upload) => {
      this.setState({
        data_uri: upload.target.result,
        filename: file.name,
        filetype: file.type
      }, () =>{
        this.props.imageUploaded({
            data_uri: this.state.data_uri,
            filename: this.state.filename,
            filetype: this.state.filetype
        })
      });
    };

    reader.readAsDataURL(file);

  }

  renderDropZone(){
    if(!this.state.data_uri){
        return <Dropzone onDrop={this.handleFile} multiple={false} style={{width:"100%", height:"100px"}}>
                <div style={{border:"1px solid black", margin:"0 auto", width:"100%", height:"100px", borderRadius:"25px", textAlign:"center"}}>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
    }
  }

  render() {
    let processing;
    let uploaded;

    if (this.state.data_uri) {
      uploaded = (
        <div>
          <h4>Image uploaded!</h4>
          <div style={{width:"300", height:"300px"}}>
              <img style={{width:"auto", height:"100%"}} className='image-preview' src={this.state.data_uri} />
            </div>
        </div>
      );
    }

    if (this.state.processing) {
      processing = "Processing image, hang tight";
    }

    return (
      <div className='row'>
            {this.renderDropZone()}
            {processing}
            {uploaded}
      </div>
    );
  }
}
