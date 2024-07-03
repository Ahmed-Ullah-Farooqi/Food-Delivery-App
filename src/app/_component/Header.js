'use client'
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data && "/restaurant/dashboard") {
      router.push("/restaurant");
    } else if(data && pathName == "/restaurant") {
      router.push("/restaurant/dashboard");
    }else{
    setDetails(JSON.parse(data));
  }
},[]);

const logout=()=>{
  localStorage.removeItem('restaurantUser');
  router.push("/restaurant");
}

  return (
    <div className="heading">
      <img
        width={200}
        src="https://media.istockphoto.com/id/1138234161/vector/delivery-illustration.jpg?s=1024x1024&w=is&k=20&c=1HgU-FISnMpSrd_be_h-fDjq2QOZ_Ar8UJmXryBuWnQ="
        alt="logo"
      ></img>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
       
        {
        details && details.email ? 
        
        <><li><button onClick={logout}>Logout</button></li><li>
              <Link href={"/"}>Profile</Link>
            </li></>
         :  <li >
            <Link href={"/"}>SignUp/Login</Link>
          </li>
         
        }
        

      </ul>
    </div>
  );
}
