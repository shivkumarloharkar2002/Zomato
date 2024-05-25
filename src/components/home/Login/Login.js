import './Login.css'
// import india from './india.png'


export function Login(props){
  return(
    <>
    <div className='first'>
        <div className='Container'>
        <h2 className='log'>Login</h2>

        <select className='slt'>
           {/* <img src='./india.png' className='img'/> */}

     <option>+ 91</option><br/>
       <option>+ 93</option><br/>
         <option>+ 355</option><br/> 
          <option>+ 213</option><br/>
          <option>+ 1684</option><br/>
          <option>+ 376</option><br/>
          <option>+ 224</option>
          
       
          </select>
          
         
          <input type='number' placeholder='Phone' className='inputBox'/><br></br>
         
        
          {/* <input type='text'  placeholder="Enter your Full Name here" className={'inputBox'}/><br/>
          <input type='email'   placeholder="Enter your email here" className={'inputBox'}/> */}

        </div>
        </div>
    </>
  );

}