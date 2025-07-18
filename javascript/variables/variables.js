let firstName = "Jirka"; // ? Deklarace a inicializace proměnné
let lastName; // ? Deklarace proměnné
lastName = "Novák"; // ? Inicializace proměnné

console.log(firstName);
console.log(lastName);

firstName = "Alžběta";

console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

firstName = "David";

console.log(firstName);

// * Proměnná var
var variableVar = "test";
{
  var x = "test";
}
console.log(x); // ! Toto je nežádoucí vlastnost, proměnná var se definuje pro modul (soubor), může způsobit komplikace
var jmeno = "Petra";
var jmeno = "Jozka"; // ! Povolená redeklarace u var, může způsobit duplicitní vytváření proměnných

// * Proměnná let
{
  let y = "test Let";
}
// console.log(y); // ? Vypíše chybu při spuštění (nemůžu použít proměnnou mimo blok kódu)

//let city;
let city; // ? nemůžu redeklarovat

// * Proměnná const
const country = "Česko";
// country = "Rakousko"; // ! Způsobí chybu při spuštění

// const tree; // ! const musí být nastavena (inicializována) při deklaraci
