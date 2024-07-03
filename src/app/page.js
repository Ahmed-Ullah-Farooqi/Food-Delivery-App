import CustomerHeader from "./_component/CustomerHeader";
import Footer from "./_component/Footer";

export default function Home() {
  return (
  <main>
    <CustomerHeader/>
    <div>
    <h1>Food Delivery Application!</h1>
    <input type="text" placeholder="Select Place" />
    <input type="text" placeholder="Enter your Search food" />
    </div>
    <Footer/>
  </main>
  );
}
