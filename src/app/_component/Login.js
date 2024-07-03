import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [error,setError]=useState(false);
    const router = useRouter();
     
    const handleLogin=async()=>{
        if(!email || !password){
            setError(true);
            return false
        }else{
            setError(false);
        }
        let res = await fetch("http://localhost:3000/api/hotel" , {
            method:"POST",
            body:JSON.stringify({email,password,login:true})
        });
        res = await res.json();
        if(res.success){
            alert("Login Successfully")
            console.log(res);
            const {result} = res
            delete result.password;
            localStorage.setItem("restaurantUser" , JSON.stringify(result))
            router.push("http://localhost:3000/restaurant/dashboard")
        }
    }

    return(
        <div>
           <h3> LOGIN PAGE</h3>
            <div>
            <input type="email" placeholder="Enter your username" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            {
                error && !email && <span>Please enter valid email</span>
            }
            </div>
            <div>
            <input type="password" placeholder="Enter your password"  value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {
                error && !password && <span>Please enter valid password</span>
            }
            </div>
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    );
}