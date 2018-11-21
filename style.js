// Needs an query selector
// document.querySelecter("column").style.opacity = 1;
// // Needs a function
// function yourChara(){
//   document.getElementsByClassName("").style.opacity = "1";
//   document.getElementsByClassName("column").style.opacity = "1";
//   document.addEventListener("click", yourChara(){
// });

function playerName() {
 let trainerName = prompt("What is your name?");

  if (trainerName != null) {
  document.getElementsByClassName("playerName").innerHTML = trainerName;
 }
}


class pokemans{
  constructor(sprite,name,hp,attack,defense,abilities){
    this.sprite = sprite;
    this.name = name;
    this.health = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

// Make a request for a user with a given ID
axios.get("http://fizal.me/pokeapi/api/v2/name/darkrai.json")
  .then(function (response) {
    // handle success
    console.log(response);
    //get chosen pokemons stats
    console.log(response.data)
    //create the pokemons stats and call where it comes from
let darkrai = new pokemans (
  response.data.sprites.front_default,
  response.data.name,
  response.data.stats[5].base_stat,
  response.data.stats[4].base_stat,
  response.data.stats[3].base_stat,
  response.data.abilities[0].ability
)
document.getElementById('darkSprite').src = darkrai.sprite;
document.getElementById('darkName').innerHTML = "Name: " + darkrai.name;
document.getElementById('darkHp').innerHTML = "Hp: " + darkrai.hp;
document.getElementById('darkAttack').innerHTML = "Attack: " + darkrai.attack;
document.getElementById('darkDefense').innerHTML = "Defense: " + darkrai.defense;
document.getElementById('darkAbility').innerHTML = "Ability: " + darkrai.abilities;

})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
