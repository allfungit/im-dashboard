const container = document.querySelector(".container");
const coffees = [
  {
    name: "Web Indomarine",
    image: "images/web.jpg",
    link: "http://www.indomarine.co.id/"
  },
  {
    name: "Cloud",
    image: "images/cloud.jpg",
    link: "http://cloud.indomarine.co.id/index.php/login"
  },
  {
    name: "e-Mail",
    image: "images/mail.jpg",
    link: "https://mail.indomarine.co.id/"
  },
  {
    name: "Intranet",
    image: "images/intranet.jpg",
    link: "http://intranet.indomarine.co.id/"
  },
  {
    name: "SC-Ticketing",
    image: "images/sc-ticket.jpg",
    link: "http://sc.indomarine.co.id/"
  }
  ,
  {
    name: "Daily IT Support",
    image: "images/daily-is.jpg",
    link: "http://daily-is.indomarine.co.id/"
  }
  
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, link }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${link} target="_blank">Buka Web</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
