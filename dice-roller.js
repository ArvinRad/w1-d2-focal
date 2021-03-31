const dice = process.argv;
let rolles = [];
for (let i = 0; i < dice[2]; i++) {
  rolles.push(Math.floor(Math.random() * 6) + 1);
}
console.log(`Rolled ${dice[2]} dice: ${rolles.join(`, `)}`);