const cities = ["Praha", "Brno", "Ostrava", "Olomouc"];
console.log(cities);
console.log("1. město: " + cities[0]);

// Standardní for pro array:
for (let i = 0; i < cities.length; i++) {
  // ? array v sobě mají vlastnost (property) length, která v sobě má uloženo, kolik prvků je v dané array v tuto chvíli.
  console.log(`cities[${i}] je: ${cities[i]}`);
}
