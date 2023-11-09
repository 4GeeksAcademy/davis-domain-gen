/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "my", "your", "his", "her"];
  let adjectives = [
    "great",
    "big",
    "orange",
    "spooky",
    "terrific",
    "wonderful",
    "amazing",
    "painted",
    "pretty",
    "excellent",
    "tasty",
    "humble",
    "gentle",
    "quiet",
    "loud"
  ];
  let nouns = [
    "jogger",
    "racoon",
    "saloon",
    "palace",
    "cafe",
    "farm",
    "hamster",
    "deer",
    "smokehouse",
    "bar",
    "music hall",
    "beauty shop",
    "castle",
    "hotel",
    "diner",
    "theater"
  ];
  let domains = [];
  let domCom = [".com", ".net", ".gov"];

  const generateDomains = () => {
    for (let i = 0; i < pronouns.length; i++) {
      for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
          for (let l = 0; l < domCom.length; l++) {
            let domain = pronouns[i] + adjectives[j] + nouns[k] + domCom[l];
            domains.push(domain);
          }
        }
      }
    }
    displayDomains();
  };

  const displayDomains = () => {
    const domainContainer = document.getElementById("domainContainer");
    domainContainer.innerHTML = "";

    domains.forEach(domain => {
      const domainElement = document.createElement("p");
      domainElement.textContent = domain;
      domainContainer.appendChild(domainElement);
    });
  };

  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateDomains);
};
