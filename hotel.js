const names = document.getElementById("all_name");
const mail = document.getElementById("mail");
const num = document.getElementById("number");
const coming_day = document.getElementById("c_day");
const leaving_day = document.getElementById("l_day");
const room = document.getElementById("r_type");
const submit = document.getElementById("reserve");

let data_name;
let data_mail;
let data_num;
let data_cd;
let data_ld;
let data_room;

let reserve_info = {
  nom: "",
  mail: "",
  num: 0,
  arriver: "",
  depart: "",
  chambre: "",
};
reserve_info = [];

console.log(names);
console.log(mail);
console.log(num);
console.log(coming_day);
console.log(leaving_day);
console.log(room);

function set_data() {
  if (localStorage.getItem("reservation") === null) {
    localStorage.setItem("reservation", JSON.stringify(reserve_info));
  } else {
    reserve_info = JSON.parse(localStorage.getItem("reservation"));
  }
}

function to_num(date) {
  let pre_result = date.split("-");
  let result = pre_result.join("");
  return Number(result);
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const double = {
    nom: "",
    mail: "",
    num: 0,
    arriver: "",
    depart: "",
    chambre: "",
  };

  double.nom = names.value;
  double.mail = mail.value;
  double.num = num.value;
  double.arriver = coming_day.value;
  double.depart = leaving_day.value;
  double.chambre = room.value;

  if (to_num(double.depart) > to_num(double.arriver)) {
    reserve_info.push(double);
    localStorage.setItem("reservation", JSON.stringify(reserve_info));
    console.log("pipi caca")
    alert("Réservation effectuer")
  }
});

set_data();
