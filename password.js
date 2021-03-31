const password = process.argv[2];
Arr = ["a", "e", "o", "l"];
Rep = ["4", "3", "0", "1"];

function obfuscate(password, Arr, Rep) {

  let newPassword1 = password.split("");
  let newPassword2 = [];
  newPassword1.forEach(char => {
  if (!Arr.includes(char)) {
  newPassword2.push(char);
  } else {
  newPassword2.push(Rep[Arr.indexOf(char)]);
  }
  })
return newPassword2.join('')
}

console.log(obfuscate(password, Arr, Rep));
