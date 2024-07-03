import Link from "next/link";



export default function CustomerHeader() {
  return (
    <div className="flex justify-between">
      <div>
        <img src="https://media.istockphoto.com/id/1138234161/vector/delivery-illustration.jpg?s=1024x1024&w=is&k=20&c=1HgU-FISnMpSrd_be_h-fDjq2QOZ_Ar8UJmXryBuWnQ=" width={200}/>
      </div>
      <div>
        <ul className="flex justify-between gap-3">
            <li>
                <Link href={"/"} >HOME </Link>
            </li>
            <li>
                <Link href={"/"} >Login </Link>
            </li>
            <li>
                <Link href={"/"} >Cart(0) </Link>
            </li>
            <li>
                <Link href={"/"} >Sign Up </Link>
            </li>
            <li>
                <Link href={"/"} >Add Restauratn </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
