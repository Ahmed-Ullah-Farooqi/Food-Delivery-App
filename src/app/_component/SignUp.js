import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  const [city, setCity] = useState("");
  const [address, setAdress] = useState("");
  const [contact, setContact] = useState("");
  const router = useRouter();
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSignup = async () => {
    if (password !== c_password) {
      setPasswordError(true);
      return false;
    } else {
      setPasswordError(false);
    }
    if (!email || !password || !c_password || !city || !address || !contact) {
      setError(true);
      return false;
    } else {
      setError(false);
    }
    console.log(email, password, c_password, city, address, contact);
    let response = await fetch("http://localhost:3000/api/hotel", {
      method: "POST",
      body: JSON.stringify({ email, password, city, address, contact }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("Restaurant Registered Successfully");
      console.log(response);
      const { result } = response;
      delete result.password;
      localStorage.setItem("restaurantUser", JSON.stringify(result));
      router.push("http://localhost:3000/restaurant/dashboard");
    }
  };

  return (
    <div>
      <h3>SIGNUP PAGE</h3>
      <div>
        <input
          type="email"
          placeholder="Enter your email id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && !email && <span>Please enter valid email</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <span>Password and Confirm Password not match</span>}
        {error && !email && <span>Please enter valid Password</span>}
      </div>
      <div>
        <input
          type="password"
          placeholder="confirm password"
          value={c_password}
          onChange={(e) => setC_password(e.target.value)}
        />
        {passwordError && <span>Password and Confirm Password not match</span>}
        {error && !c_password && <span>Please enter valid Password</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        {error && !city && <span>Please enter valid City</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="enter address"
          value={address}
          onChange={(e) => setAdress(e.target.value)}
        />
        {error && !address && <span>Please enter valid Address</span>}
      </div>
      <div>
        <input
          type="text"
          placeholder="enter contact No."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        {error && !contact && <span>Please enter valid Contact</span>}
      </div>
      <div>
        <button onClick={handleSignup}>SIGNUP</button>
      </div>
    </div>
  );
}
