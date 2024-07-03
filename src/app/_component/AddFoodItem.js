import { useState } from "react"


const AddFoodItems=(props)=>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [foodPath,setFoodPath] = useState('');
    const [description,setDescription] = useState('');
    const [error,setError] = useState(false);

    const handleFood=async ()=>{

        console.log(name,price,foodPath,description);
        if(!name || !price || !foodPath || !description){
            setError(true);
            return false
        }else{
            setError(false)
        }
        let resto_id;
        const restaurantData =JSON.parse(localStorage.getItem("restaurantUser"));
        if(restaurantData){
            resto_id = restaurantData._id
        }
        let response = await fetch("http://localhost:3000/api/hotel/foods",{
            method:"POST",
            body:JSON.stringify({name,price,img_path:foodPath,description,resto_id})
        });
        response = await response.json();
        if(response.success){
            alert("food item added")
            props.setAddItem(false)
        }else{
            alert("food item not added")
        }
        console.log(response);
    }
    return(<div>
        <h1 className="text-xl">Add New Food Item Here</h1>
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
            <button onClick={handleFood}>Add Food</button>
        </div>
    </div>)
}

export default AddFoodItems