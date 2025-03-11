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

// Function
function teamCard( img, name, role, email ) {
  return `
    <div class="teamCard flex">

                <div style="flex-basis: 100px;">
                    <img src="${img}" alt="" class="image" style="width: 100%;">
                </div>
                <div class="pad10">
                    <div><span class="infoName">${name}</span></div>
                    <div><span class="infoRole">${role}</span></div>
                    <div style="position: relative;top: 10px;">${email}<span class="infoEmail"></span></div>
                </div>

            </div>
  `
}

// Script

const teamBox = document.getElementById("team")

let teamInfo = "";
for ( let i = 0; i < 6; i++ ) {
  teamInfo = teamInfo + teamCard( teamMembers[i].img, teamMembers[i].name, teamMembers[i].role, teamMembers[i].email );
}

teamBox.innerHTML = teamInfo;