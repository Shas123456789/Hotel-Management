import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Success from '../components/Success'

function Registerscreen() {
    const[name,setname] = useState('')
    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')
    const[cpassword,setcpassword] = useState('')

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null); // Initialize error state to null
    const [success, setSuccess] = useState() 


    async function register(){
        if(password === cpassword){
            const user = {
                name,
                email,
                password,
                cpassword
            }
            try {
                setLoading(true)
                const result = await axios.post('./api/users/register',user).data
                setLoading(false)
                setSuccess(true)

                setname('')
                setemail('')
                setpassword('')
                setcpassword('')
            } catch (error) {
                console.log(error);
                setLoading(false)
                setError(true)
                
            }
        }
        else{
            alert("Password does not matched");
        }
    }
  return(
    <div>
    {loading && (<Loader/>)}
    {error && (<Error/>)}
    
    <div className='row justify-content-center mt-5'>
        <div className='col-md-5 '>
        {success && (<Success message='Registration Success'/>)}
            <div className= 'bs'>
            <h2>Register</h2>
            <input type='text' className='form-control my-3' placeholder="name" 
            value={name} onChange={(e) => {setname(e.target.value)}}/><br/>

            <input type='email' className='form-control my-3' placeholder="email"
            value={email} onChange={(e) => {setemail(e.target.value)}}/><br/>

            <input type='password' className='form-control my-3' placeholder="password"
            value={password} onChange={(e) => {setpassword(e.target.value)}}/><br/>

            <input type='password' className='form-control my-3' placeholder=" confirm password"
            value={cpassword} onChange={(e) => {setcpassword(e.target.value)}}/><br/>  

            <button className='btn btn-primary mt-3' onClick={register}>Register</button>
            </div>
        
        </div>
        </div>

    </div>
  )
}

export default Registerscreen