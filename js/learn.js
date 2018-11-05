console.info(0);

function sayWelcome() {
  console.info("Salut " + prenume + " , bine ai venit la noi!");
}

var nume = "Danci";
var prenume = "Larisa";
var owner = "Larisa's";
var msg1 = 'ai zis "Lari"?';
var msg2 = 'Nu, am zis "Larisa"';
var remplate = "Glilimele simple";

console.debug("auzi...? dar cum te cheama? -" + prenume);
sayWelcome();
var skills = ["html", "css", "js"];

prenume = "Lari";
console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);

sayWelcome();

// schimb valutar
var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + "RON");

friendRON = friendEUR * cursEUR * 0.99;
console.info("tu ai " + friendRON + "RON");
console.info("==== ==== ==== ==== ====");

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}

function extractFromATM(ammount) {
  console.info("suma extrasa este: " + ammount);
  var comision = getExtractFee(ammount);
  var totalExtract = ammount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient funds");
  }

  funds = funds - totalExtract;

  console.info("comision aplicat: " + comision);
  console.info("sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005); //nu e multiplu de 10
extractFromATM(100000); //solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);

var plataTotala = 97;
var sumaPrimita = 1000;
var restPlata = 0;

console.info("suma intreaga: " + plataTotala);
console.info("total cash: " + sumaPrimita);
restPlata = sumaPrimita - plataTotala;
console.info("rest: " + restPlata);

var pretInitial = 4000;
var procentReducere = 20;
var procent = 100;
var reducere = 0;
var pretFinal = 0;

reducere = (procentReducere / procent) * pretInitial;
pretFinal = pretInitial - reducere;

console.info("pretul initial al produsului este: " + pretInitial);
console.info("reducerea este: " + reducere);
console.info("pretul final este: " + pretFinal);
