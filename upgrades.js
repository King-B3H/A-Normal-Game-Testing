/*Buyable
var upgrades = {
    name:[
    "Growing Residents",
    "Expanding Horizons"
    ],
    bought:[0,0,0,0,0],
    cost:[
    10,
    100,
    ],
    
    purchase: function(index){
      if (humans >= this.cost[index]){
        humans -= this.cost[index]
        this.bought[index]++;
        this.cost[index] = Math.ceil(this.cost[index] * 1.13)
      }
    }
  }*/
//Regular upgrade
var upgrades = {
    name:[
    "Growing Residents",
    "Expanding Horizons"
    ],
    bought:[0,0,0,0,0],
    cost:[
    1000,
    50,
    150,
    ],
    
    purchase: function(index, currency){
      if (currency >= upgrades.cost[index] && upgrades.bought[index] == 0){
        removeCurrency(currency, upgrades.cost[index])
        alert("Upgrade Bought")
        return upgrades.bought[index] = 1
      }
      if(currency < upgrades.cost[index] && upgrades.bought[index] == 0){
        alert("Not enough " + `currency`)
        return
      }
      if(upgrades.bought[index] == 1 && currency >= upgrades.cost[index]){
        alert("Upgrade Already Boughtr")
        return
      }
    }
  }

function removeCurrency(currency, cost){
  switch (currency){
    case human:
      human -= cost
      break

    case house:
      house -= cost
      break

    case town:
      town -= cost
      break

    case city:
      city -= cost
      break

    case state:
      state -= cost
      break

    case country:
      country -= cost
      break
    
    case continent:
      continent -= cost
      break
      
    case planet:
      planet -= cost
      break
  }
}

function upgradeVisible(upgrade, condition, parameter, index){
    if(condition >= parameter && upgrades.bought[index] === 0 ){
        document.getElementById("upgrade" + upgrade).style.display = ""
    }
    if(condition < parameter){
      document.getElementById("upgrade" + upgrade).style.display = "none"
    } 
    if (upgrades.bought[index] === 1){
        document.getElementById("upgrade" + upgrade).style.backgroundColor = "rgb(60, 190, 60)"
    }
}
setInterval(function(){
  if(upgrades.bought[1] === 1){
    if(upgrades.bought[0] === 0){
      human += Math.round(totalMulti/2)
    }else{
      human += Math.round(1*totalMulti)
    }
  }
}, 1000)