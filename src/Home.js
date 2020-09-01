import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://www.welt.de/img/wirtschaft/mobile170491225/7572504757-ci102l-w1024/Pressefotos-graetzlhotel-karmelitermarkt-7.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 1599"
        />
        <Card
          src="https://images.homify.com/c_fill,f_auto,q_0,w_740/v1495001963/p/photo/image/2013905/CAM_2_OPTION_1.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 2099"
        />
        <Card
          src="https://cuttingedgeds.com/wp-content/uploads/2019/12/Luxury-Homes-Interior-Design-1-1.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 2099"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://s3-ap-south-1.amazonaws.com/designcafe-dev/wp-content/uploads/2019/11/17054921/best-tips-on-budget-friendly-home-interior-design.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 2099"
        />
        <Card
          src="https://www.contractorbhai.com/wp-content/uploads/2017/12/Benefits-Modern-Minimal-Interior-Design-Contractorbhai.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 2099"
        />
        <Card
          src="https://i.pinimg.com/originals/ec/72/bf/ec72bf9a6e0607af39fcb0edd8266f3d.jpg"
          title="Online Experiences"
          description="Unique activities we can do it together, led by world by hosts"
          price="Rs 2099"
        />
      </div>
    </div>
  );
}

export default Home;
