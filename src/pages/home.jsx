import { Link, NavLink } from "react-router-dom";
import Card from "../components/card";
import { Sandpack } from "@codesandbox/sandpack-react";
// import "@codesandbox/sandpack-react/dist/index.css";

import "../pagesStyles/home.css";
import settings from "../images/colored-settings.png";
import profile from "../images/user-color.png";
import apps from "../images/app.png";

export default function Home() {
  const cardsInfo = [
    {
      title: "apps",
      description: "this is where have all my apps",
      link: "/apps",
      image: apps,
    },
    {
      title: "My Profile",
      description: "Visist My Profile",
      link: "/profile",
      image: profile,
    },
    {
      title: "settings",
      description: "adjust thuings as you want",
      Link: "/settings",
      image: settings,
    },
  ];
  return (
    <div className="home-container">
      <div className="double-text home diff aspect-[16/9] ">
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
              image={card.image}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
