import React from "react";
import greatKLogo from "../../assets/images/main-logo.png"; // Adjust path accordingly
import businessLogo from "../../assets/images/business-logo.png"; // Adjust path accordingly
import instaIcon from "../../assets/images/insta-icon.png"; // Adjust path accordingly
import smallLogo from "../../assets/images/main-logo.png"; // Adjust path accordingly
import "./LandingPage.css";
import Testimonial from "../testimonial/testimonial";
import { useNavigate } from 'react-router-dom';



export default function Landing() {
  const navigate = useNavigate(); // Initialize the hook

  const handleClick = (value) => {
    if(value===1){
      navigate('/our-free-business');
    }
    else if(value===2){
      navigate('/our-paid-business')
    }
     // Navigate to the route
  };
  
  return (
    <div className="container md-5 ">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <span>
            <img className="small-logo  my-4" src={smallLogo} alt="" />
          </span>
          <h5 className="text-center  mt-2 my-4 flex-grow-1" style={{ color: '#A36B05' }}>HOME</h5>
        </div>

        <div className="image-container">
          <img
            src={greatKLogo}
            className="great-k-logo-main image-fluid"
            alt="Description of the image"
          />{" "}
        </div>
      </div>
      <div>
        <h4 className="text-center mt-4 p-2 mt-5">GREATE K TRAINING</h4>
        <h5 className="text-center mt-1 mb-4 p-0">
          Kapil Poswal's Online school for hustlers
        </h5>
      </div>
      <div className="ml-3 mb-4 mt-2">
        <p>
          This business course stands apart from all others. We don’t just
          provide you with business ideas; we guide you step-by-step with a
          detailed blueprint to help you launch, run, and succeed in your
          business.
        </p>
        <p>
          Unlock Your Earning Potential: Start Making Money from Home Using Just
          Your Phone!
        </p>
        <p>Watch, Earn, Repeat.</p>
        <p>Get Started for Free | Watch Our videos.</p>
        <p>Transform Your Free Time into Income!</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          architecto repellendus fuga tenetur laboriosam accusantium dolorum!
          Modi molestiae doloribus obcaecati maiores possimus commodi ipsum?
          Sequi eos ab reprehenderit earum reiciendis.
        </p>
      </div>
      <div className="content-wrapper">
        <div className="ml-3 p-3 yellow-text ">
          <h4 className="mb-5">Money-Making Business</h4>

          <div className="d-flex flex-direction-row justify-content-start align-items-center my-2">
            <h6 className="mb-2 yellow-text">Our-Free Business </h6>
            <button onClick={handleClick(1)} className="ms-3 mb-2 rounded-5 white-btn">
              Watch now
              <i
                className="fa fa-play yellow-text bg-white"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          <div className="d-flex flex-direction-row my-2 justify-content-start align-items-center">
            <h6 className="mb-2 yellow-text">Our Paid Business </h6>
     
      <button onClick={handleClick(2)} className="ms-3 mb-2 rounded-5 white-btn">
        Watch now
        <i className="fa fa-play yellow-text bg-white" aria-hidden="true"></i>
      </button>
    
          </div>
          <div className="d-flex flex-direction-row my-2 justify-content-start align-items-center">
            <h6 className="mb-2 yellow-text">Great-K free videos</h6>
            <button onClick={handleClick(3)} className=" ms-2 mb-2  rounded-5 white-btn">
              Watch now{" "}
              <i
                className="fa fa-play yellow-text bg-white"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>

      <div className="background-container">
        <div className="background-image">
          <img src={greatKLogo} alt="backdround-image" />
        </div>
        <img
          src={businessLogo} /* Replace with your foreground image URL */
          className="business-logo"
          alt="Foreground Image"
        />
        {/* image background fixed*/}

        {/* image upfront */}
      </div>
      <div className="mt-4">
        <h3 className="text-start mt-5">
          FOUNDER OF THE COMPANY: KAPIL POSWAL
        </h3>
        <p className="my-4 ">
          Kapil Poswal, a rising Indian entrepreneur and author of three books,
          including his latest Amazon #1 Bestseller, has mastered the art of
          making money from home using just a phone. Now, he's ready to share
          his secrets, guiding you step-by-step through each business model in
          depth. Every month, he will introduce a new business opportunity for
          you.
        </p>

        <p className="mt-4">
          <i>
            “It's never too late to start—take action now. Remember, just
            thinking won't bring results; only action does. So, take the action
            and change your life. Yes, it will be challenging, but never quit.
            Persistence is the key to transforming your life”— Kapil Poswal{" "}
          </i>
        </p>
      </div>
      <div className="mt-4 ">
        <img className="image-insta" src={instaIcon} alt="insta"/>
        <a href="#" className="connect-to-founder">
          Connect with the founder
        </a>
      </div>
      {/* Question answer
      <div className="mt-4 p-2">
        <h3 className="mb-3">FREQUENTLY ASKED QUESTIONS</h3>
        <div className="que-ans">
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
        <div className="que-ans">
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
        <div className="que-ans">
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
        <div className="que-ans">
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
        <div className="que-ans">
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
        <div className="que-ans">
          <h3>FREQUENTLY ASKED QUESTIONS</h3>
          <p>
            <b>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</b>
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
            odio.
          </p>
        </div>
      </div> */}
      <div>
      <Testimonial />
      </div>
    </div>
  );
}
