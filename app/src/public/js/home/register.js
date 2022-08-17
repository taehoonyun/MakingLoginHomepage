"use strict";

const id = document.querySelector("#id");
const pwd = document.querySelector("#pwd");
const confirmedPwd = document.querySelector("#confirmedpwd");
const email = document.querySelector("#email");
const names = document.querySelector("#name");
const btn = document.querySelector("#btn");

btn.addEventListener("click", register);

function register() {
  if (!id.value) {
    return alert("ID doesn't exist");
  }
  if (confirmedPwd.value !== pwd.value) {
    return alert("passwords must match!");
  }
  const req = {
    id: id.value,
    name: names.value,
    email: email.value,
    pwd: pwd.value,
  };

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("Error occured while create account");
    });
}
