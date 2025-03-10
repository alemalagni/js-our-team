const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Script

const image = document.getElementsByClassName("image")
const infoName = document.getElementsByClassName("infoName")
const infoRole = document.getElementsByClassName("infoRole")
const infoEmail = document.getElementsByClassName("infoEmail")

for ( let i = 0; i < image.length; i++ ) {
  // Image
  image[i].src = teamMembers[i].img;

  // Info
  infoName[i].innerHTML = teamMembers[i].name;
  infoRole[i].innerHTML = teamMembers[i].role;
  infoEmail[i].innerHTML = teamMembers[i].email;
}