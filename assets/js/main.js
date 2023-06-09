const scriptURL =
  "https://script.google.com/macros/s/AKfycbw28B-URRSv-KDbTf2CxICe8QRuRaexVbXy-N2Ck9aUVLcMNBfbRrxgJyIJRMP8sfOO/exec";
const form = document.forms["daftar-rsvp-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // hilangkan tombol kirim, tampilkan tombol loading
  btnLoading.classList.toggle("d-none");
  btnSend.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // hilangkan tombol loading, tampilkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnSend.classList.toggle("d-none");
      // reset form
      window.location.href = "thanks.html";
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      myAlert.classList.toggle("d-none");
      console.error("Error!", error.message);
    });
});
