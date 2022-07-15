import React from 'react'

import classes from './img.module.css'
import { addImage, addResume } from '../../api/api';
 
class FileUpload extends React.Component{
 
    constructor(){
        super();
        this.state = {
            selectedRes:'',
        }
 
        this.handleResChange = this.handleResChange.bind(this);
    }
 
    handleResChange(event) {
        this.setState({
            selectedRes: event.target.files[0],
          })
    }
 
    submit(){
        const dataRes = new FormData() 
        dataRes.append('file', this.state.selectedRes)
        console.warn(this.state.selectedRes);
        // let url = "http://localhost:10000/RMS/uploadResume";

        // axios.post(url, dataRes, { // receive two parameter endpoint url ,form data 
        // })
        // .then(res => { // then print response status
        //     localStorage.setItem('resumeId', JSON.stringify(res.data.message))
        //     console.warn(res);
        // })
       
        try{
            addResume(dataRes)
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
                    <div className="col-md-6 ">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="text-white">SelectFile :</label>
                                    <input  style={{fontSize: "0.8rem", fontWeight: "bold" }} type="file" accept="application/pdf,application/vnd.ms-excel" className="form-control" name="upload_file" onChange={this.handleResChange} />
                                </div>
                            </div>
                            
                            <div className={classes.imgBtn}>
                            <div className="form-row">
                                <div className="col-md-6 ">
                                    <button style={{background:"#1A2E4D",fontSize: "0.8rem", fontWeight: "bold" ,color:"white"}} color="secondary" type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Upload Resume</button>
                                </div>
                            </div>
                            </div>
                    {/* </div> */}
                </div>
            </div>
        )  
    }
}
 
export default FileUpload;