import React, { Component } from "react";
import Phone from "./Phone";

export default class PhoneList extends Component {
  phoneArr = [
    {
      id: 1,
      name: "VinSmart Live",
      screen: "AMOLED, 6.2, Full HD+",
      operationSystem: "Android 9.0 (Pie)",
      selfieCamera: "20 MP",
      mainCamera: "48 MP &  8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 500,
      img: "./img/vsphone.jpg",
    },
    {
      id: 2,
      name: "Meizu 16Xs",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      operationSystem: "Android 9.0 (Pie); Flyme",
      selfieCamera: "20 MP",
      mainCamera: "48 MP &  8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 1500,
      img: "./img/sp_iphoneX.png",
    },
    {
      id: 3,
      name: "Iphone XS Max",
      screen: "OLED, 6.5, 1242 x 2688 Pixels",
      operationSystem: "iOS 12",
      mainCamera: "Chính 12 MP & Phụ 12 MP",
      selfieCamera: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 1000,
      img: "./img/applephone.jpg",
    },
  ];
  renderPhoneArr = ()=>{
   return this.phoneArr.map((item) => (
       <div key={item.id} className="col-md-6 col-lg-4">
            <Phone item={item}/>
       </div>     
      ))
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderPhoneArr()}
        </div>
      </div>
    );
  }
}
