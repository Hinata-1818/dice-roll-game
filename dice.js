function rollDice(){
   const rolls = document.getElementById("input").value;
   const dicetext = document.getElementById("dicetext");
   const diceimages = document.getElementById("diceimg");
   const values = [];
   const images = [];

   for(let i = 0 ; i < rolls;i++){
     const value = Math.floor(Math.random() * 6) +1 ;
     values.push(value);
     images.push(`<img src="dice${value}.png" alt=dice> `)   
   }
   dicetext.textContent = `Dice ${values}`;
   diceimages.innerHTML = images.join('');
}