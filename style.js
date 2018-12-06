// Needs an query selector
// document.querySelecter("column").style.opacity = 1;
// // Needs a function
// function yourChara(){
//   document.getElementsByClassName("").style.opacity = "1";
//   document.getElementsByClassName("column").style.opacity = "1";
//   document.addEventListener("click", yourChara(){
// });

// function playerName() {
//  let trainerName = prompt("What is your name?");
//
//   if (trainerName != null) {
//   document.getElementsByClassName("playerName").innerHTML = trainerName;
//  }
// }



class Trainer{
  all(){
    this.pokemans = [];
  } 
}

let trainerName = new trainer 

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
axios.get("https://fizal.me/pokeapi/api/v2/name/zoroark.json")
  .then(function (response) {
    // handle success
    console.log(response);
    //get chosen pokemons stats
    console.log(response.data)
    //create the pokemons stats and call where it comes from
let zoroark = new pokemans (
  response.data.sprites.front_default,
  response.data.name,
  response.data.stats[5].base_stat,
  response.data.stats[4].base_stat,
  response.data.stats[3].base_stat,
  response.data.abilities[0].ability.name
)
document.getElementById('zoroarkSprite').src = zoroark.sprite;
document.getElementById('zoroarkName').innerHTML = "Name: " + zoroark.name;
document.getElementById('zoroarkHp').innerHTML = "Hp: " + zoroark.health;
document.getElementById('zoroarkAttack').innerHTML = "Attack: " + zoroark.attack;
document.getElementById('zoroarkDefense').innerHTML = "Defense: " + zoroark.defense;
document.getElementById('zoroarkAbility').innerHTML = "Ability: " + zoroark.abilities;

})
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  

  axios.get("https://fizal.me/pokeapi/api/v2/name/ditto.json")
    .then(function (response) {
      // handle success
      console.log(response);
      //get chosen pokemons stats
      console.log(response.data)
      //create the pokemons stats and call where it comes from
  let ditto = new pokemans (
    response.data.sprites.front_default,
    response.data.name,
    response.data.stats[5].base_stat,
    response.data.stats[4].base_stat,
    response.data.stats[3].base_stat,
    response.data.abilities[0].ability.name
  )
  document.getElementById('dittoSprite').src = ditto.sprite;
  document.getElementById('dittoName').innerHTML = "Name: " + ditto.name;
  document.getElementById('dittoHp').innerHTML = "Hp: " + ditto.health;
  document.getElementById('dittoAttack').innerHTML = "Attack: " + ditto.attack;
  document.getElementById('dittoDefense').innerHTML = "Defense: " + ditto.defense;
  document.getElementById('dittoAbility').innerHTML = "Ability: " + ditto.abilities;

  })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    axios.get("https://fizal.me/pokeapi/api/v2/name/typhlosion.json")
      .then(function (response) {
        // handle success
        console.log(response);
        //get chosen pokemons stats
        console.log(response.data)
        //create the pokemons stats and call where it comes from
    let typhlosion = new pokemans (
      response.data.sprites.front_default,
      response.data.name,
      response.data.stats[5].base_stat,
      response.data.stats[4].base_stat,
      response.data.stats[3].base_stat,
      response.data.abilities[0].ability.name
    )
    document.getElementById('typhloSprite').src = typhlosion.sprite;
    document.getElementById('typhloName').innerHTML = "Name: " + typhlosion.name;
    document.getElementById('typhloHp').innerHTML = "Hp: " + typhlosion.health;
    document.getElementById('typhloAttack').innerHTML = "Attack: " + typhlosion.attack;
    document.getElementById('typhloDefense').innerHTML = "Defense: " + typhlosion.defense;
    document.getElementById('typhloAbility').innerHTML = "Ability: " + typhlosion.abilities;

    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
