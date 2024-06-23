"use strict";
let emailInput = document.querySelector("#email");
let displayNotify = document.querySelector(".notify");
let hideInput = document.querySelector(".input");
let sercetInfo = document.querySelector(".secret-info");
let hideInfo = document.querySelector(".hide-info");

const regex = /^\w{2,}@\w{2,}(\.[a-zA-Z]{3}\.[a-zA-Z]{2}|\.[a-zA-Z]{2,5})$/;

function validEmail() {
  if (emailInput.value == "") {
    displayNotify.textContent = "Bạn chưa nhập email!";
    displayNotify.classList.add("notify-color");
    emailInput.focus();
  } else if (!regex.test(emailInput.value)) {
    displayNotify.textContent = "Email không hợp lệ!";
    displayNotify.classList.add("notify-color");
  } else {
    hideInput.classList.add("hide");
    sercetInfo.classList.remove("hide");
  }
}

// Sự kiện click nút submit
document.querySelector(".btn-submit").addEventListener("click", validEmail);

// Sự kiện nhấn phím enter nút submit

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !hideInput.classList.contains("hide")) {
    validEmail();
  }
});

// Ẩn thông tin
hideInfo.addEventListener("click", function () {
  sercetInfo.classList.add("hide");
  hideInput.classList.remove("hide");
  displayNotify.textContent = "Hãy nhập email để xem thông tin cá nhân";
  displayNotify.classList.remove("notify-color");
  emailInput.value = "";
  emailInput.focus();
});

// =============================================
// click btn view more kinh nghiệm làm việc

const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const sectionContent = document.querySelectorAll(".section-content");
const section = document.querySelectorAll(".section");

for (let i = 0; i < viewMore.length; i++) {
  viewMore[i].addEventListener("click", function () {
    sectionContent[i].classList.remove("hide");
    section[i].classList.remove("section-hover");
  });
}

for (let i = 0; i < viewLess.length; i++) {
  viewLess[i].addEventListener("click", function () {
    sectionContent[i].classList.add("hide");
    section[i].classList.add("section-hover");
  });
}
