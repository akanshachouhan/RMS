import React from 'react'

import { addImage } from '../../api/api';


 
class ImgUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }
 
        this.handleInputChange = this.handleInputChange.bind(this);
    }
 
    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
          })
        //   const data = new FormData() 
        //   data.append('file', this.state.selectedFile)
        //   console.warn(this.state.selectedFile);
        //   let url = "http://localhost:10000/RMS/upload";
          
        //   axios.post(url, data, { // receive two parameter endpoint url ,form data 
        //   })
        //   .then(res => {
        //       // localStorage["imgId"] = res.data.message
        //        // then print response status
        //        localStorage.setItem('imgId', JSON.stringify(res.data.message))
        //       console.warn(res);
        //   })
   
    }
 
  
    submit(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
        console.warn(this.state.selectedFile);
        // let url = "http://localhost:10000/RMS/uploadImg";
        
        // axios.post(url, data, { // receive two parameter endpoint url ,form data 
        // })
        // .then(res => {
        //     // localStorage["imgId"] = res.data.message
        //      // then print response status
        //      localStorage.setItem('imgId', JSON.stringify(res.data.message))
        //     console.warn(res);
        // })
         try{
             addImage(data)
        //    let responseData = addImage(data)
        //    localStorage.setItem('imgId', JSON.stringify(responseData.data.message))
         }
         catch(error){
             console.log(error)
         }
    }
 
    render(){
        return(
            <div>
                {/* <div className="row"> */}
                    <div className="col-md-6  ">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input style={{fontSize: "0.8rem", fontWeight: "bold" }} type="file" accept="image/*" className="form-control" name="upload_img"  onChange={this.handleInputChange} />
                                </div>
                                {/* <Tooltip title="Upload Image">
                <IconButton sx={{mt: 1, mb: 1, ml: 2}} onClick={()=>this.submit()}>
                <UploadFileIcon/>
                </IconButton>
            </Tooltip> */}

                                
                            </div>
                            

                            {/* <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">Select File :</label>
                                    <input type="file" accept="application/pdf,application/vnd.ms-excel" className="form-control" name="upload_file" onChange={this.handleInputChange} />
                                </div>
                            </div> */}
                            
 
                            <div className="form-row">
                                <div className="col-md-6 " offset-mt-4> 
                                    <button style={{background:"#1A2E4D",fontSize: "0.8rem", fontWeight: "bold" ,color:"white"}} color="secondary" type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Upload Image</button>
                                </div>
                            </div> 
                            

                    {/* </div> */}
                    
                </div>
                
            </div>
        )  
    }
}
 
export default ImgUpload;