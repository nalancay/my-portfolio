// React & Next
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 0,
    title: "Expense Tracker",
    link: "https://nalancay-expense-tracker.netlify.app/",
    github: "https://github.com/nalancay/expense-tracker",
    imgSrc: "app1.png",
    techs: ["react", "firebase", "TailwindCSS", "SPA"],
    summary:
      "This application manages user expenses according to categories and has a graphic display",
  },
  {
    id: 1,
    title: "Questions JavaScript",
    link: "https://nalancay-questions-js.netlify.app/",
    github: "https://github.com/nalancay/question-js",
    imgSrc: "app2.png",
    techs: [
      "react",
      "TypeScript",
      "Zustand",
      "canvas-confetti",
      " material-ui",
      "react-syntax-highlighter ",
    ],
    summary:
      "The game consists of a series of 10 questions related to javascript",
  },
  {
    id: 2,
    title: "Ecommerce- Shopping Cart",
    link: "https://nalancay-shopping-cart.netlify.app/",
    github: "https://github.com/nalancay/shopping-cart",
    imgSrc: "app3.png",
    techs: ["react", "firebase"],
    summary:
      "The Ecommerce list, add and remove products, filter by category and price. Modify quantity of products in the cart",
  },
  {
    id: 3,
    title: "Game Tic tac toe",
    link: "https://nalancay-tic-tac-toe.netlify.app/",
    github: "https://github.com/nalancay/game-tic-tac-toe",
    imgSrc: "app4.png",
    techs: ["react", "canvas-confetti,", "localstore"],
    summary:
      "Tic tac toe game where you place 'x' or 'o' on the board alternate turn.",
  },
  {
    id: 4,
    title: "Ecommerce cosmetics",
    link: "https://nalancay-onlinecosmetics.netlify.app/",
    github: "https://github.com/nalancay/ecommerce-cosmetics",
    imgSrc: "app9.png",
    techs: ["react"],
    summary:
      "This application is a shopping cart for cosmetics, to add, delete and edit the number of items",
  },
  {
    id: 5,
    title: "Movies",
    link: "https://movies-nalancay.netlify.app/",
    github: "https://github.com/nalancay/proyect-movies",
    imgSrc: "app5.png",
    techs: ["nextjs", "tailwind-CSS", "swiper"],
    summary:
      "List and detail each movie, add to favorites and search. It has a login and translation system in Spanish and English.",
  },
  {
    id: 6,
    title: "Music application",
    link: "https://nalancay-app-music.netlify.app/",
    github: "https://github.com/nalancay/app-music",
    imgSrc: "app6.png",
    techs: ["react"],
    summary:
      "This application allows you to search for music, play, pause and modulate the volume.",
  },
  {
    id: 7,
    title: "User table",
    link: "https://nalancay-users-table.netlify.app/",
    github: "https://github.com/nalancay/users-table",
    imgSrc: "app7.png",
    techs: ["react"],
    summary:
      "The objective of this application is to display a list of users in a table, filter, sort and color rows.",
  },
  {
    id: 8,
    title: "Hacker News",
    link: "https://nalancay-hacker-news.netlify.app/",
    github: "https://github.com/nalancay/hacker-news",
    imgSrc: "app8.png",
    techs: ["react"],
    summary:
      "The objective of this application is to display a list of users in a table, filter, sort and color rows.",
  },
];

export const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="projects" className="scroll">
      <div className="container_3">
        <h1 className="title_sections">
          <FormattedMessage id="navbar.projects" />
        </h1>
        <div className="test-projects">
          <Slider {...settings}>
            {projects.map((project) => (
              <div className="card" key={project.id}>
                <div className="card-top">
                  <div class="content_image">
                    <img
                      class="card_img"
                      src={`/img/${project.imgSrc}`}
                      alt={project.title}
                    />
                  </div>
                  <h1>{project.title}</h1>
                </div>
                <div className="card-bottom">
                  <p className="p_card">{project.summary}</p>
                  <div class="icons">
                    <a
                      class="link_icon"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/projects/link.svg" alt="link icon" />
                    </a>
                    <a
                      class="link_icon"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/img/projects/github.svg" alt="github icon" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
