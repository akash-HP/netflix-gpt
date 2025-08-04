import { useState } from "react"
import Header from "./Header"

const Login = ()=>
{
    const[isSignInForm,setIsSignInForm]= useState(true);
   const toggleSignInForm=()=>
    {
       setIsSignInForm(!isSignInForm);
    };

    
    return(
        <div>
            <Header/>
            <div className="absolute"><img src="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg" srcset="https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_small.jpg 959w" alt='Login'></img></div>
            <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
             <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
             {!isSignInForm?<input type="text" placeholder="FullName" className="p-4 my-4 w-full bg-gray-700">
            </input>:""}
            <input type="text" placeholder="EmailAddress" className="p-4 my-4 w-full bg-gray-700">
            </input>
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"></input>
            <button className="p-4 my-4 bg-red-700 w-full">{isSignInForm?"Sign In":"Sign Up"}</button>
            <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now":"Already registered Sign in Now."}</p>
            </form>
        </div>
    )
}
export default Login