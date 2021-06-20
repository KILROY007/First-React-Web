import React,{useState,useEffect} from 'react';
import './style.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const green = '#39D1B4';
const yellow = '#FFD712';
const padding='py-2'
const newPadding='py-3'
const still = ''
const animation = 'animate__flip'
const block='block'
const animation2 = 'animate__backInDown'
const animation2Change='animate__backOutUp'
function App() {
  let [color,setColor]=useState(green)
  let changeColor = ()=>{
    setColor(color === green ? yellow : green)
  }
  let [pad,setPad]=useState(padding)
  let changePadding= ()=>{
    setPad(pad===padding?newPadding:padding)
  }
  useEffect(() => {
    Aos.init({duration:2000});
  }, []);
  let [fixed,animate]=useState(still)
  let changeAnimation= ()=>{
    animate(fixed===still ? animation : '' )
  }
  let [divStyle,setDivStyle] = useState(animation2)
  let changeAnimation2= ()=>{
    setDivStyle(divStyle === animation2 ?animation2Change: animation2)
  }

  return (
    <>
      <nav className="d-flex justify-content-around pt-5 bg-primary1 fs-5">
        <div className="pt-4">
            <span className="navbar-brand fw-bold">Fiber</span>
        </div>
        <div className="pt-4">
            <span className="fw-bold me-4">Community</span>
            <span className="fw-bold me-4">Pricing</span>
            <span className="fw-bold"> Features</span>
        </div>
        <div className="">
            <button className="fw-bold border-0 bg-transparent me-4" onClick={()=>{changeAnimation2()}}>Sign In</button>
            <button className={`fw-bold btn-color rounded ${pad} px-4`} style={{backgroundColor:color}} onClick={()=>{changeColor();changePadding()}}>Sign Up</button>
        </div>
      </nav>
      <div className= {`bg-primary1 pb-5 animate__animated ${divStyle} d-block`} >
        <div className="container-md d-flex">
            <div className="ms-5 mt-10">
                <div className="d-flex mb-2">
                    <div className="me-4">
                        <img src="/images/star.svg" alt="" srcset="" />
                        <img src="/images/star.svg" alt="" srcset="" />
                        <img src="/images/star.svg" alt="" srcset="" />
                        <img src="/images/star.svg" alt="" srcset="" />
                        <img src="/images/star.svg" alt="" srcset="" />
                    </div>
                    <div className="mt-1">
                        <span className="">Rated 4.8/5 (243 Reviews)</span>
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="font-6 fw-bolder mb-4">Create your portfolio in minutes.</h1>
                    <p className="fs-para">With Fiber, you can setup your own personal portfolio in minutes
                        with dozens of premade, beautiful templates.</p>
                </div>
                <div className="mb-4">
                    <button className="fw-bold btn-color rounded py-3 px-5 me-5">Start Free Trial</button>
                    <span className="fs-5 text-violet underline fw-bold"><u>View Examples</u></span>
                </div>
                <div className="d-flex">
                    <div className="me-5">
                      <img src="/images/Checkmark.svg" alt="" srcset="" className="me-1" />
                      <span className="">No Credit Card Required</span>
                    </div>
                    <div>
                        <img src="/images/Checkmark.svg" alt="" srcset="" className="me-1" />
                        <span className="">10 Free Temlates</span>
                    </div>
                </div>
            </div>
            <div className={`w-75 animate__animated ${fixed} `} onClick={()=>changeAnimation()}>
                <img src="/images/hero-Illustration.png" className="img-fluid" alt="" srcset="" />
            </div>
        </div>
    </div>
    </>
  )
}



export default App;
