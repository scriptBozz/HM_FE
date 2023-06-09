import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function LandingPage() {
  const images = [
    {
      id: 1,
      label: "Magical midsummer looks",
      imgPath:
        "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/TOOLBOX/LOCAL%20ACTIVITIES/neu-site/SCA_1166969003_3x2_B.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    },
    {
      id: 2,
      label: "Modern tailoring",
      imgPath:
        "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_07/ladies/1057u/new-1057U-3x2.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    },
    {
      id: 3,
      label: "Surrounded by nature",
      imgPath:
        "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_08/home/7097a/7097A-3x2-1.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    },
    {
      id: 4,
      label: "Elegant by the pool",
      imgPath:
        "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_07/home/7087g/7087G-3x2-1-stylish-elegant-bath-towels-beach-bags.jpg]&scale=size[960]&sink=format[jpeg],quality[80]",
    },
  ];
  return (
    <div>
      <AwesomeSlider>
        {images.map((item) => (
          <div key={item.id} data-src={item.imgPath} />
        ))}
      </AwesomeSlider>
    </div>
  );
}
