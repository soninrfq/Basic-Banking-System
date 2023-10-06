let frm = document.getElementById("bank");

function tambahSaldo() {
  let total;
  let saldo = frm.hasil.value;
  let a = window.prompt("Input tambah saldo");
  total = saldo + a;
  frm.hasil.value = total;
}

function kurangiSaldo() {
  let saldo = frm.hasil.value;
  let total;
  let a = prompt("Input kurangi saldo");
  total = saldo - a;
  frm.hasil.value = total;
}
