import * as React from 'react';


export default function ImageAvatars() {
  
  const userType = JSON.parse(localStorage.getItem('userData')).userType;
  // const userName = JSON.parse(localStorage.getItem('userData')).firstName;
  // const [isShow, setIsShow] = React.useState(false);

  // const allDetailsShowHandler = () => {
  //   setIsShow(true);
  // }

  // const closeAllDetailShowHandler=() =>
  // {
  //   setIsShow(false);
  // }

  const setAvtar = () => {
    if(userType === 'hr'){
      return(
        <div>
          <div>
              {/* <Stack direction="row" alignContent="center" alignItems="center" spacing={2}>
                <Avatar alt="Hr" src="" onClick={allDetailsShowHandler} sx={{ width: 40, height: 40, fontSize: "0.8rem" }}/>
              </Stack> */}
             
          </div>
          
           <div>
          <h5 style={{textAlign: 'center',marginTop: '1rem', fontWeight: 'bold'}}>{userType}</h5>
          </div>  
        </div>
      )}
    else if(userType === 'manager'){
      return(
        <div>
      {/* <Stack direction="row" spacing={2}>
        <Avatar alt="Manager" src="" sx={{ width: 65, height: 65, fontSize: "0.8rem" }}/>
      </Stack> */}
      <div>
      <h5 style={{textAlign: 'center',marginTop: '15rem', fontWeight: 'bold'}}>{userType}</h5>
      </div>
      </div>
      )}
      else if(userType === 'admin'){
        return(
          <div>
        {/* <Stack direction="row" spacing={2}>
          <Avatar alt="Manager" src="" sx={{ width: 65, height: 65, fontSize: "0.8rem" }}/>
        </Stack> */}
        <div>
        <h5 style={{textAlign: 'center',marginTop: '1rem', fontWeight: 'bold'}}>{userType}</h5>
        </div>
        </div>
        )}
    else{
      return(
        <div>
     
      <div>
      <h5 style={{textAlign: 'center',marginTop: '17rem', fontWeight: 'bold'}}>{userType}</h5>
      </div>
      </div>
      )}
  }


  return (
    <div>
    {/* <Stack direction="row" spacing={2}> */}
       {setAvtar()}
       {/* <Avatar alt="Hr" src="/static/images/avatar/2.jpg" sx={{ width: 65, height: 65, fontSize: "0.8rem" }}/>    */}
    {/* </Stack> */}
    {/* <div>
      <h5> Manager</h5>
    </div> */}
    </div>
   

      
  );
}
