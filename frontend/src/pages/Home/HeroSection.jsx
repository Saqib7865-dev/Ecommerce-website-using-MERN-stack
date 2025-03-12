import React from "react";
import cardImg1 from "../../assets/card-1.png";
import cardImg2 from "../../assets/card-2.png";
import cardImg3 from "../../assets/card-3.png";

const card = [
  {
    id: 1,
    trend: "2025 Trend",
    image: cardImg1,
    title: "Women Shirt",
  },
  {
    id: 2,
    trend: "2025 Trend",
    image: cardImg2,
    title: "Women Dresses",
  },
  {
    id: 3,
    trend: "2025 Trend",
    image: cardImg3,
    title: "Women Casuals",
  },
];
const HeroSection = () => {
  return (
    <section className="section__container hero__container">
      {card.map((card) => (
        <div key={card.id} className="hero__card">
          <img src={card.image} alt={card.title} />
          <div className="hero__content">
            <p>{card.trend}</p>
            <h4>{card.title}</h4>
            <a href="#">Discover more</a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
