import img1 from "../assets/image/per1.png"
import Menu from "../components/Nav"
import Spin from "../components/Loader"
import "../css/Home.css"
import Hero from "../components/Hero"
import img from "../assets/image/download.jpeg"
import ProductCard from "../components/ProductCard"


function Home () {
    return( 
    <>
    <Menu/>
    <Spin/>
    <Hero heading="COME AND SMELL GOOD...NERGOS!!!"/>
    <ProductCard/>
    {/* <h1 className="bg-warning text-light
    " style={{borderRadius: "10px"}}>Welcome to Home page</h1> */}
    <div className="" style={{backgroundColor: "black", height: "500px", borderRadius: "15px"}}>
        <img src={img1} alt="" />
    </div>
    </>
    )
} 

export default Home