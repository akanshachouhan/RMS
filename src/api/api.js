


import { registerUrl,resumeUrl, loginUrl, finallySelectedUrl,deleteFromRejectedCandidateUrl,shortlistCandidateUrl,shortlistedForTechnicalForTestUrl, allInterviewCandidateUrl ,addJobUrl, applyJobFromUrl , logOutUrl,addFeedbackForCandidateUrl ,finalShortlistedCandidateUrl, scheduleInterviewForManagerUrl, removeFromDoNotHireUrl, deleteFromAllCandidateListUrl, deleteFromScheduleTestUrl, doNotHireUrl, deleteFromFinalListUrl, testLinkMailToCandidateUrl, deleteSelectedCandidateUrl, deleteScheduleInterviewUrl,imgUrl,sendUserEmailUrl, updateJobCardUrl, deleteMultipleApplyUrl, rejectListUrl, shortlistedForHrInterviewUrl, rescheduledForTechnicalUrl, updatingTestScoreUrl, deleteFromHrInterviewUrl, doNotHireCandidateUrl, firstTechnicalRoundUrl, secondTechnicalRoundUrl, shorlistedByManagerUrl, congratulationsMailUrl, forgotPasswordUrl, resetPasswordUrl, deleteFromShortlistedForTestUrl, deleteFromShortlistedForTechnicalUrl, deleteFromFinallySelectedUrl, reportUrl, deleteFromDoNotHireUrl, deleteshrotlistedByManagerUrl, deleteFromUsersUrl, deleterescheduledForTechnicalUrl, deleteLateralUrl, filesUrl, rejectedMailUrl, } from './constants'
import axios from 'axios';

export const registerUser = async (data) => {
    try{
        let response = await fetch( registerUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error)
        return {
            'success' : false,
        }
    }
}
export const showImageHandler= async(imageId) => {
   
    try{
        fetch(filesUrl+ imageId,{
            method : 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(imageId)
    }
    catch(error){
        console.log(error)
    
}


}




export const loginUser = async (data) => {
    try{
        // let response = await axios.post(loginUrl, data)
        // console.log(response)
        // return response.data;
        let response = await fetch( loginUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        // document.Cookies.set('access_token', response.headers['x-access-token'])
        return res;
    } catch(error){
        console.log(error)
        return {
            'success' : false,
        }
    }
}

export const forgotPasswordHandler = async (data) => {
    try{
        // let response = await axios.post(loginUrl, data)
        // console.log(response)
        // return response.data;
        let response = await fetch( forgotPasswordUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        // document.Cookies.set('access_token', response.headers['x-access-token'])
        return res;
    } catch(error){
        console.log(error)
        return {
            'success' : false,
        }
    }
}
export const resetPasswordHandler = async (data) => {
    try{
        // let response = await axios.post(loginUrl, data)
        // console.log(response)
        // return response.data;
        let response = await fetch( resetPasswordUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        // document.Cookies.set('access_token', response.headers['x-access-token'])
        return res;
    } catch(error){
        console.log(error)
        return {
            'success' : false,
        }
    }
}


export const logoutUser = async (data) => {
    try{
        let response = await fetch( logOutUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error)
        return {
            'success' : false,
        }
    }
    // let result = await fetch(logOutUrl,
    // {
    // method: "POST",
    // headers: {
    // "Authorization":"Baerer " + localStorage.getItem('user-info')
    // }
    // }).then(localStorage.removeItem("user-info")).then(props.history.push("/"))
    // result = await result.json()

}

export const addJobs = async (data,token) => {
    try{
        // let response = await axios.post(addJobUrl, data)
        // console.log(response)
        // return response.data;
        let response = await fetch( addJobUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const addFeedbackForCandidate = async (data) => {
    
    try{
        let response = await fetch( addFeedbackForCandidateUrl,
        {
            
          headers: {
            "Content-Type": "application/json"
          },
          method: "POST",

         
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const sendDataInFinalList = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( finalShortlistedCandidateUrl ,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },  
          method: "POST",
          body: data
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}


// API for Scheduling interview of manager

export const scheduleInterviewForManager = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( scheduleInterviewForManagerUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}


// export const shortlistCandidatebymanager = async (data) => {
  
      
//     try{
//         let response = await fetch( shortlistByManagerUrl  ,
//         {
//             headers: {
//                 "Content-Type": "application/json"
//               },
//           method: "POST",
//           body: data
          
//         }
//         )
//         let res = await response.json();
//         console.log(res);
//         return res;
//     } catch(error){
//         console.log(error);
//     }
// }

export const shortlistByCandidateTypeHandler= async(data,token) => {
    try{

         fetch( shortlistCandidateUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }



}
export const shortlistForTechnicalInterview= async(data,token) => {
    try{

         fetch( allInterviewCandidateUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }



}
export const rejectedListUrlHandler= async(data,token) => {
    try{

         fetch( rejectListUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }
}
export const doNotHireUrlHandler= async(data,token) => {
    try{

         fetch( doNotHireCandidateUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }
}
export const postHrScheduleInterview= async(data,token) => {
    try{

         fetch( shortlistedForHrInterviewUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json'
              , "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }
}

export const shortlistedForTechnicalForTestHandler= async(data,token) => {
    try{

         fetch( shortlistedForTechnicalForTestUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }
}

export const postRescheduleTypeHandler= async(data,token) => {
    try{

         fetch( rescheduledForTechnicalUrl ,
        {
           
          method: "POST",
          headers : {
              'Content-Type' : 'application/json',
              "Authorization": token,
          },

          body: JSON.stringify(data)
          
          }
        )
        //let res = await response.json();
        console.log(data);
        //return res;
    } catch(error){
        console.log(error);
    }
}


//  export const shortlistByFilter = async (_id) => {
  
      
//     try{
//         let response = await fetch( shortlistUrl  ,
//         {
// /             headers: {
//                 "Content-Type": "application/json"
//               },
//           method: "POST",
//           body: JSON.stringify(_id)
          
//         }
//         )
//         let res = await response.json();
//         return res;
//     } catch(error){
//         console.log(error);
//     }
// }


export const jobApply = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( applyJobFromUrl,
        {
           
          method: "POST",
          headers:{
            'Content-Type' : 'application/json',
            "Authorization": token,
        },
          
          body: JSON.stringify(data)

          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}
// API for removing a list from Do Not Hire

export const removeFromDnh = async(_id,token) => {
    var answer = window.confirm("Are you sure to delete this feedback");
    if (answer) {
    try{
        fetch(removeFromDoNotHireUrl + _id,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        })
        console.log(_id)
    }
    catch(error){
        console.log(error)
    
}
}
else {
    return
}
}

//api for removing data from all candidate list

export const deleteFromAllCandidateList = async(_id) => {
   
    try{
        fetch(deleteFromAllCandidateListUrl + _id,{
            
            method : 'DELETE',
          
            
        })
        console.log(_id)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteMultipleCandidateList = async(data,token) => {
   
    try{
        fetch(deleteMultipleApplyUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
               
                 'Authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}
export const deleteFromHrRound = async(data,token) => {
   
    try{
        fetch(deleteFromHrInterviewUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

//api for deleting schedule test

export const deleteFromScheduleTest = async(_id) => {
    try{
        fetch(deleteFromScheduleTestUrl + _id,{
            method : 'DELETE',
        })
        console.log(_id)
    }
    catch(error){
        console.log(error)
    }
}


//api for deleting schedule test

// export const deleteFromScheduleTest = async(_id) => {
//     try{
//         fetch(deleteFromScheduleTestUrl + _id,{
//             method : 'DELETE',
//         })
//         console.log(_id)
//     }
//     catch(error){
//         console.log(error)
//     }
// }

//DoNotHire api

export const DoNotHireFunction = async (data,token) => {
   
    try{
        let response = await fetch( doNotHireUrl ,
        {

            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
              },
          method: "POST",
          body: data
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

//api for deleting a list from final list

export const deleteFromFinalList = async(_id) => {
    try{
        fetch(deleteFromFinalListUrl + _id,{
            method : 'DELETE',
        })
        console.log(_id)
    }
    catch(error){
        console.log(error)
    }
}


//api for mailing test link to candidate


export const testLinkMailToCandidate = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( testLinkMailToCandidateUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const testScoreToTechnical= async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( updatingTestScoreUrl ,

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const deleteSelectedCandidate = async(_id) => {
    try{
        fetch(deleteSelectedCandidateUrl + _id,{
            method : 'DELETE',
        })
        console.log(_id)
    }
    catch(error){
        console.log(error)
    }
}

export const deleteScheduleInterview = async(_id) => {
    try{
        fetch(deleteScheduleInterviewUrl + _id,{
            method : 'DELETE',
        })
        console.log(_id)
    }
    catch(error){
        console.log(error)
    }
}

export const addResume = async (formData) =>{
    axios.post(resumeUrl, formData, {  
    })
    .then(res => {
        // localStorage["imgId"] = res.data.message
         // then print response status
         localStorage.setItem('resumeId', JSON.stringify(res.data.id))
        console.warn(res);
    })
}
export const addImage = async (formData) => {
    // try{
    //     let response = await fetch( imgUrl ,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "multipart/form-data"
    //       },
    //       body: formData
    //       }
    //     )
    //     let res = await response.json();
    //     console.log(res);
    //     return res;
    // } catch(error){
    //     console.log(error);
    // }
    axios.post(imgUrl, formData, {  
        })
        .then(res => {
            // localStorage["imgId"] = res.data.message
             // then print response status
             localStorage.setItem('imgId', JSON.stringify(res.data.id))
            console.warn(res);
        })
}

export const sendUserEmailToHr = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( sendUserEmailUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}
export const sendRejectedMail = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( rejectedMailUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const updateJobCardById = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( updateJobCardUrl + data.id,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}
export const ShortListHandler = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( updateJobCardUrl + data.id,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}


export const firstTechnicalRoundHandler = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( firstTechnicalRoundUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const secondTechnicalRoundHandler = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( secondTechnicalRoundUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const shorlistByManagerHandler = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( shorlistedByManagerUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const sendDataInFinalListHandler = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( finallySelectedUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}
export const sendDataInReportList = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( reportUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const sendCongratulationMail = async (data,token) => {
    // var form_data = new FormData();

    //   for ( var key in data ) {
    //       form_data.append(key, data[key]);
    //   }
    try{
        let response = await fetch( congratulationsMailUrl ,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(data)
          }
        )
        let res = await response.json();
        console.log(res);
        return res;
    } catch(error){
        console.log(error);
    }
}

export const deleteFromOnlineTest = async(data,token) => {
   
    try{
        fetch(deleteFromShortlistedForTestUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteFromTechnicalTest= async(data,token) => {
   
    try{
        fetch(deleteFromShortlistedForTechnicalUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteFromFinalHandler= async(data,token) => {
   
    try{
        fetch(deleteFromFinallySelectedUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}
export const deleteFromDoNotHireHanlder= async(data,token) => {
   
    try{
        fetch(deleteFromDoNotHireUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteFromRejectHanlder= async(data,token) => {
   
    try{
        fetch(deleteFromRejectedCandidateUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}
export const deleteFromShortlistHanlder= async(data,token) => {
   
    try{
        fetch(deleteshrotlistedByManagerUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}
export const deleteFromUsersHandler= async(data,token) => {
   
    try{
        fetch(deleteFromUsersUrl ,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteFromRescheduleHandler= async(data,token) => {
   
    try{
        fetch(deleterescheduledForTechnicalUrl,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

export const deleteFromLateralHandler= async(data,token) => {
   
    try{
        fetch(deleteLateralUrl,{
            method : 'DELETE',
            headers: {
                'Content-Type': 'application/Json',
                "Authorization": token,
                // 'authorization': token
            },
            body: JSON.stringify(data),
        })
        console.log(data)
    }
    
    catch(error){
        console.log(error)
    }



}

// export const getImageDownload= async(imageId) => {
//     try{
//         fetch(filesUrl + imageId,{
//             method : 'POST',
//         })
//         console.log(imageId)
//     }
//     catch(error){
//         console.log(error)
//     }
// }