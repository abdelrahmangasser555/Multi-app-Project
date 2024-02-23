import { Link, NavLink } from "react-router-dom";
import Card from "../components/card";

import "../pagesStyles/home.css";

export default function Home() {
  const cardsInfo = [
    {
      title: "apps",
      description: "this is where have all my apps",
      link: "/apps",
    },
    {
      title: "My Profile",
      description: "Visist My Profile",
      link: "/profile",
    },
    {
      title: "settings",
      description: "adjust thuings as you want",
      Link: "/settings",
    },
  ];
  return (
    <div className="home-container">
      <div className="home diff aspect-[16/9] ">
        <div className="name-container diff-item-1">
          <div className="bg-primary text-primary-content text-9xl font-black grid place-content-center">
            Boody
          </div>
        </div>
        <div className="name-container diff-item-2">
          <div className="bg-base-200 text-9xl font-black grid place-content-center ">
            love jojo 💙
          </div>
        </div>
        <div className="diff-resizer"></div>
      </div>
      <div className="my-cards-container">
        {cardsInfo.map((card, index) => {
          return (
            <Card
              title={card.title}
              description={card.description}
              link={card.link}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
