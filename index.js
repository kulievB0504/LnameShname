let names = ['Bekzod', 'Jasurbek', 'Alisher', 'Davron', 'Davlatbek', 'Shaxzod', 'Nodirbek', 'Karimbek'];

let longestName = getLName(true, names);
let shortestName = getLName(false, names);

function getLName(isMax, names) {
  let longestName = '';
  let shortestName = '';

  for (let name of names) {
    if (isMax && (name.length > longestName.length || longestName === '')) {
      longestName = name;
    } else if (!isMax && (name.length < shortestName.length || shortestName === '')) {
      shortestName = name;
    }
  }
  return isMax ? longestName : shortestName;
}

console.log(`Самое длинное имя: ${longestName}`);
console.log(`Самое короткое имя: ${shortestName}`);