class BankAccount {
  constructor(nama, awal) {
    this.nama = nama;
    this.awal = awal;
  }

  deposit(saldo) {
    let tambah = saldo;
    this.awal += tambah;
    console.log(`Tambah : ${tambah}`);
  }

  withdraw(saldo) {
    let kurangi = saldo;
    if (kurangi <= this.awal) {
      this.awal -= kurangi;
      setTimeout(() => {
        console.log(`Saldo yang ditarik : ${kurangi}`);
      }, 500);
    } else {
      setTimeout(() => {
        console.log(`Saldo yang ingin ditarik ${kurangi}`);
      }, 500);
      setTimeout(() => {
        console.log(`Maaf saldo tidak mencukupi!`);
      }, 500);
    }
  }
  saldoAkhir() {
    console.log(`Saldo akhir Anda : ${this.saldo}`);
  }
}

let rek = new BankAccount("Andre", 75000);
rek.deposit(200000);
rek.withdraw(150000);
rek.saldoAkhir();
rek.withdraw(200000);
rek.saldoAkhir;
