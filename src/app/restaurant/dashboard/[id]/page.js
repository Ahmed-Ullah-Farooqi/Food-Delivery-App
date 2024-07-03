'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"



const EditFoodItems=(props)=>{
    console.log(props.params.id);
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [foodPath,setFoodPath] = useState('');
    const [description,setDescription] = useState('');
    const [error,setError] = useState(false);
    const router = useRouter();

    useEffect(()=>{
handleLoadFoodItem()
    },[])

    const handleLoadFoodItem= async ()=>{
        let response = await fetch('http://localhost:3000/api/hotel/foods/edit/' + props.params.id)
        response = await response.json();
        if(response.success){
            console.log(response.result);
            setName(response.result.name)
            setPrice(response.result.price)
            setFoodPath(response.result.img_path)
            setDescription(response.result.description)
        }

    }

    
    const handleFood=async ()=>{

        if(!name || !price || !foodPath || !description){
            setError(true);
            return false
        }else{
            setError(false)
        }
        console.log(name,price,foodPath,description);
        let response = await fetch('http://localhost:3000/api/hotel/foods/edit/' + props.params.id,{
            method : 'PUT',
            body:JSON.stringify({name,price,img_path:foodPath,description})
        });
        response = await response.json();
        if(response.success){
            router.push('../dashboard')
        }else{
            alert("data is not Updated")
        }
    }
    return(<div>
        <h1 className="text-xl">Edit Food Item Here</h1>
        <div>
            <input type="text" placeholder="Enter Food Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            {
                error && !name && <span>Please enter valid food name</span>
            }
        </div>
        <div>
            <input type="number" placeholder="Enter Food Name" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            {
                error && !price && <span>Please enter valid price</span>
            }
        </div>
        <div>
            <input type="text" placeholder="Enter Food Name" value={foodPath} onChange={(e)=>setFoodPath(e.target.value)}/>
            {
                error && !foodPath && <span>Please enter valid image</span>
            }
        </div>
        <div>
            <input type="text" placeholder="Enter Food Name" value={description} onChange={(e)=>setDescription(e.target.value)}/>
            {
                error && !description && <span>Please enter valid description</span>
            }
        </div>
        <div>
            <button onClick={handleFood}>Update Food Item</button>
        </div>
        <div>
            <button onClick={()=>router.push('../dashboard')}>Back to Food Item List</button>
        </div>
    </div>)
}

export default EditFoodItems