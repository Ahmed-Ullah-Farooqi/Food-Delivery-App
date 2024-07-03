import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const FoodItemList = () => {
  const [foodItem, setFoodItem] = useState();
  const router = useRouter();
  

  useEffect(() => {
    loadFoodItem();
  }, []);

  const loadFoodItem = async () => {
    const restaurantData = JSON.parse(localStorage.getItem("restaurantUser"));
    const resto_id = restaurantData._id;
    // console.log(restaurantData);
    let response = await fetch(
      "http://localhost:3000/api/hotel/foods/" + resto_id
    );
    response = await response.json();
    if (response.success) {
      setFoodItem(response.result);
      console.log("It is successfully send");
    } else {
      alert("Food item list not loading");
    }
  };

const deleteFoodItem = async (id) => {
  let response = await fetch(`http://localhost:3000/api/hotel/foods/${id}` ,{
    method:"delete"
  });
  response = await response.json();
  if(response.success){
    loadFoodItem();
    console.log("deleted item");
  }else{
    alert("food item not deleted")
  }
}

  return (
    <div>
      <h1 className="text-5xl">FOOD ITEMS LIST</h1>
      <table className="border">
        <thead className="border">
          <tr>
            <td className="border">S.No</td>
            <td className="border">price</td>
            <td className="border">name</td>
            <td className="border">image</td>
            <td className="border">description</td>
            <td className="border">Operations</td>
          </tr>
        </thead>
        <tbody>
          {foodItem ? (
            foodItem.length > 0 ? (
              foodItem.map((item, key) => (
                <tr key={key}>
                  <td className="border">{key + 1}</td>
                  <td className="border">{item.price}</td>
                  <td className="border">{item.name}</td>
                  <td className="border">
                    <img src={item.img_path} alt={item.name} className="size-14" />
                  </td>
                  <td className="border">{item.description}</td>
                  <td >
                    <button className="border-4 border-black" onClick={() => deleteFoodItem(item._id)}>Delete</button>
                    <button className="border-4 border-black" onClick={()=>router.push('dashboard/' + item._id)}>Edit</button>
                  </td>
                </tr>
              ))
            ) 
            : (
              <tr>
                <td colSpan="6" className="border text-center">
                  No food items found.
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan="6" className="border text-center">
                Loading food items...
              </td>
            </tr>
          )
          }
        </tbody>
      </table>
    </div>
  );
};

export default FoodItemList;

