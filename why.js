var human = 1000
var house = 200
var town = 0
var city = 0
var state = 0
var country = 0
var continent = 0
var planet = 0
var solarSystem = 0
var universe = 0

var total_human = 1000
var total_house = 200
var total_town = 0
var total_city = 0
var total_state = 0
var total_country = 0
var total_continent = 0
var total_planet = 0
var total_solarSystem = 0
var total_universe = 0

var userName = "A Random Person"
var pastEndgame = false
var metWall = false
var joeClick = false

var house_multi = 1
var town_h_multi = 1
var city_h_multi = 1
var state_h_multi = 1
var country_h_multi = 1
var continent_h_multi = 1
var planet_h_multi = 1
var solarSystem_h_multi = 1
var universe_h_multi = 1

var totalMulti = 1

var days = 0
var hours = 0
var minutes = 0
var seconds = 0

var timeoutActive = 0

function hoomanClick(){
    if (timeoutActive === 0){
    setTimeout(create, 25)
    }
}
function create(){
    upgrades.bought[0] === 0 ? human += 1*totalMulti : human += 1*(totalMulti*2)
    upgrades.sbought[0] === 0 ? total_human += 1*totalMulti : total_human += 1*(totalMulti*2)
    timeoutActive = 0
}

function hide(){
    if(joeClick === false){
        document.getElementById("test").style.display = "none"
        alert("I'LL BE BACK! JUST YOU WAIT!!!")
        joeClick = true
    }
}

function changeTab(newTab){
    var tabNames = [
        "mainTab",
        "upgradesTab",
        "settingsTab",
        "infoTab"
    ]

    for(i = 0;i<4;i++){
        if(tabNames[i] != newTab){
            document.getElementById("" + tabNames[i]).style.display = "none"
        }
        if(tabNames[i] = newTab){
            document.getElementById("" + tabNames[i]).style.display = "block"
        }
    }

}

/* function condense(building, i, cost){
    if(building === house)
    etc.
array of buildings, buildings[i-1] = 0 to reset
building 
} */


function condense(building){
    
    if(building === "house"){
        if(human >= 20){
        
        totalMulti > 100 ? house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)**0.5)) : house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)))
        totalMulti > 100 ? total_house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)**0.5)) : total_house += (Math.floor(human/20))*(Math.floor((totalMulti/house_multi)))
        human = 0
        return building = 0;
        }
    };

    if(building === "town"){
        if(house >= 50){
            totalMulti > 100 ? town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)**0.48)) : town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)))
            totalMulti > 100 ? total_town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)**0.48)) : total_town += (Math.floor(house/50))*(Math.floor((totalMulti/house_multi/town_h_multi)))
            house = 0
            return building = 0;
        }   
    };
    
    if(building === "city"){
        if(town >= 150){
            totalMulti > 100 ? city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.45)) : city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))))
            totalMulti > 100 ? total_city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.45)) : total_city += Math.floor(town/150)*(Math.floor(((state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi))))
            town = 0
            return building = 0;
        }
    };

    if(building === "state"){
        if(city >= 350){
            totalMulti > 100 ? state += Math.floor(city/350)*(Math.floor(((country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.425)) : state += Math.floor(city/350)*(Math.floor((country_h_multi)*(continent_h_multi)*(planet_h_multi)))
            totalMulti > 100 ? total_state += Math.floor(city/350)*(Math.floor(((country_h_multi)*(continent_h_multi)*(planet_h_multi))**0.425)) : total_state += Math.floor(city/350)*(Math.floor((country_h_multi)*(continent_h_multi)*(planet_h_multi)))
            city = 0
            return building = 0;
        }
        
    };
    if(building === "country"){
        if(state >= 600){
            totalMulti > 100 ? country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))**0.39)) : country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))))
            totalMulti > 100 ? total_country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))**0.39)) : total_country += Math.floor(state/600)*(Math.floor(((continent_h_multi)*(planet_h_multi))))
             state = 0
             return building = 0;
        }
        
    };

    if(building === "continent"){
        if(country >= 900){
            continent += Math.floor(country/900)*(Math.floor((planet_h_multi)**0.37))
            total_continent += Math.floor(country/900)*(Math.floor((planet_h_multi)**0.37))
            country = 0
            return building = 0;
        }
        
    };

    if(building === "planet"){
        if(continent >= 1250){
            planet += Math.floor(continent/1250)
            total_planet += Math.floor(continent/1250)
            continent = 0
            return building = 0;
        }
        
    };

    if(building === "solarSystem"){
        if(planet >= 3500){
            solarSystem += Math.floor(continent/3500)
            total_solarSystem += Math.floor(continent/3500)
            planet = 0
            return building = 0;
        }
        
    };

    if(building === "universe"){
        if(solarSystem >= 10000){
            universe += Math.floor(continent/10000)
            total_universe += Math.floor(continent/10000)
            solarSystem = 0
            return building = 0;
        }
        
    };

    /*if(building === solarSystem){
        
    }

    if(building === Universe){
        if(solarSystem >= 100){
            universe++
            solarSystem = 0
            return
        }
    }*/
}

function multiUpdate(){
    if(house > 0){
        house_multi = Math.floor(Math.log(10+house)**0.99)
    }else{
        house_multi = 1
    }

    if(town > 0){
        town_h_multi = Math.floor(Math.log(10+(town))**1.4)
    }else{
        town_h_multi = 1
    }

    if(city > 0){
        city_h_multi = Math.floor((Math.log(10+city))**1.7)
    }else{
        city_h_multi = 1
    }

    if(state > 0){
        state_h_multi = Math.floor(Math.log(10+state)**2.05)
    }else{
        state_h_multi = 1
    }

    if(country > 0){
        country_h_multi = Math.floor(Math.log(10+country)**2.4)
    }else{
        country_h_multi = 1
    }
        
    if(continent > 0){
        continent_h_multi = Math.floor(Math.log(10+continent)**2.75)
    }else{
        continent_h_multi = 1
    }

    if(planet > 0){
        planet_h_multi = Math.floor(Math.log(10+planet)**3.1)
    }else{
        planet_h_multi = 1
    }

    if(planet > 0){
        solarSystem_h_multi = Math.floor(Math.log(10+solarSystem)**3.5)
    }else{
        solarSystem_h_multi = 1
    }

    if(planet > 0){
        universe_h_multi = Math.floor(Math.log(10+universe)**4)
    }else{
        universe_h_multi = 1
    }
}
        
function calculateTotalMulti(){
    totalMulti = 1*(house_multi)*(town_h_multi)*(city_h_multi)*(state_h_multi)*(country_h_multi)*(continent_h_multi)*(planet_h_multi)
}

function getUserName(){
    userName = (prompt("What will be your username?"))
    var hutchersonNames = [
        "Josh",
        "josh",
        "Josh Hutcherson",
        "josh hutcherson",
        "hutcherson",
        "Hutcherson",
        "JOSH",
        "HUTCHERSON"
    ]
    if(userName.length > 20){
        alert("Username too long.")
        userName = prompt("What will be your username? DO IT RIGHT THIS TIME!!!!")
    }
    if(userName === "King_B3H"){
        alert("That's not your name...")
        window.open(src="Goofy Images/clown_amogus.png")
        userName = "A random Person"
    }
    if(userName === "Doge"){
        alert("What does the dog say?!")
        window.open(src="Doge (1).png")
        userName = "sus"
    }
    if(userName === "" || userName === " "){
        alert("That's not a name...")
        window.open(src="Goofy Images/chip.png")
        userName = "A random Person"
    }
    if(hutchersonNames.includes(userName)){
        alert("*Insert Whistle")
        window.open(src="Goofy Images/hutcherson.jpeg")
    }
    return stringify(userName)
}

function saveGame(){
    var gameSave = {
        human: human,
        house: house,
        town : town,
        city : city,
        state : state,
        country : country,
        continent : continent,
        planet : planet,
        solarSystem : solarSystem,
        universe : universe,

        total_human: total_human,
        total_house: total_house,
        total_town : total_town,
        total_city : total_city,
        total_state : total_state,
        total_country : total_country,
        total_continent : total_continent,
        total_planet : total_planet,
        total_solarSystem : total_solarSystem,
        total_universe : total_universe,

        userName : userName,
        pastEndgame : pastEndgame,
        seconds : seconds,
        minutes : minutes,
        hours : hours,
        days : days,
        metWall : metWall,
        joeClick : joeClick,
        upgrade1Bought : upgrades.bought[0],
        upgrade2Bought : upgrades.bought[1],
        upgrade3Bought : upgrades.bought[2]
    };

    localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function resetGame(){
    if (confirm("Are you positive you wish to reset?")){
        var gameSave = {}
        totalMulti = 0
        saveGame()
        localStorage.setItem("gameSave", JSON.stringify(gameSave))
        window.stop()
        return location.reload()
    }
}

function continueGame(){
    if(confirm("Do you wish to continue on with the game?")){
        pastEndgame = true
    }
}

function loadGame(){
    var savedGame = JSON.parse(localStorage.getItem("gameSave")) 
    if (localStorage.getItem("gameSave") !== null){
        if(typeof savedGame.human !== "undefined") human = savedGame.human;
        if(typeof savedGame.house !== "undefined") house = savedGame.house;
        if(typeof savedGame.town !== "undefined") town = savedGame.town;
        if(typeof savedGame.city !== "undefined") city = savedGame.city;
        if(typeof savedGame.state !== "undefined") state = savedGame.state;
        if(typeof savedGame.country !== "undefined") country = savedGame.country;
        if(typeof savedGame.continent !== "undefined") continent = savedGame.continent;
        if(typeof savedGame.planet !== "undefined") planet = savedGame.planet;
        if(typeof savedGame.solarSystem !== "undefined") solarSystem = savedGame.solarSystem;
        if(typeof savedGame.universe !== "undefined") universe = savedGame.universe;

        if(typeof savedGame.total_human !== "undefined") total_human = savedGame.total_human;
        if(typeof savedGame.total_house !== "undefined") total_house = savedGame.total_house;
        if(typeof savedGame.total_town !== "undefined") total_town = savedGame.total_town;
        if(typeof savedGame.total_city !== "undefined") total_city = savedGame.total_city;
        if(typeof savedGame.total_state !== "undefined") total_state = savedGame.total_state;
        if(typeof savedGame.total_country !== "undefined") total_country = savedGame.total_country;
        if(typeof savedGame.total_continent !== "undefined") total_continent = savedGame.total_continent;
        if(typeof savedGame.total_planet !== "undefined") total_planet = savedGame.total_planet;
        if(typeof savedGame.total_solarSystem !== "undefined") total_solarSystem = savedGame.total_solarSystem;
        if(typeof savedGame.total_universe !== "undefined") total_universe = savedGame.total_universe;

        if(typeof savedGame.userName !== "undefined") userName = savedGame.userName;
        if(typeof savedGame.pastEndgame !== "undefined") pastEndgame = savedGame.pastEndgame;
        if(typeof savedGame.seconds !== "undefined") seconds = savedGame.seconds;
        if(typeof savedGame.minutes !== "undefined") minutes = savedGame.minutes;
        if(typeof savedGame.hours !== "undefined") hours = savedGame.hours;
        if(typeof savedGame.days !== "undefined") days = savedGame.days;
        if(typeof savedGame.metWall !== "undefined") metWall = savedGame.metWall;
        if(typeof savedGame.joeClick !== "undefined") joeClick = savedGame.joeClick
        if(typeof savedGame.upgrade1Bought !== "undefined") upgrades.bought[0] = savedGame.upgrade1Bought 
        if(typeof savedGame.upgrade2Bought !== "undefined") upgrades.bought[1] = savedGame.upgrade2Bought 
        if(typeof savedGame.upgrade3Bought !== "undefined") upgrades.bought[2] = savedGame.upgrade3Bought 
    }
    
}

function changelog(){
    window.open(src="./changelog.html")
}

setInterval(function(){
    saveGame()
}, 3000)

setInterval(function(){
    displayUpdate()
    checkEndgame()
    calculateTotalMulti()
    displayBonus()
    displayTime()
    displayUpdate()
    displayUpgrades()
  }, 100)

  setInterval(function(){timeTick();}, 1000)//Counts time

window.onload = function(){
    changeTab('upgradesTab')
    loadGame()
    checkEndgame()
    calculateTotalMulti()
    if(joeClick === true){
        document.getElementById("test").style.display = "none"
    }
}

function upgradeTexts(){
    document.getElementById("upgrade1Text").innerHTML = upgrades.bought[0] === 0 ? `Costs: 1K ez` : "Bought"
    document.getElementById("upgrade2Text").innerHTML = upgrades.bought[1] === 0 ? `Costs: ${upgrades.cost[1]} Houses` : "Bought"
    document.getElementById("upgrade3Text").innerHTML = upgrades.bought[2] === 0 ? `Costs: ${upgrades.cost[2]} Houses` : "Bought"
}

function timeTick(){
    seconds += 1

    if(seconds >= 60){
        seconds -= 60
        minutes += 1
    }
    if(minutes >= 60){
        minutes -= 60
        hours += 1
    }
    if(hours >= 24){
        hours -= 24
        days += 1
    }
}


function checkEndgame(){
    if(planet > 99 && pastEndgame === false){
        document.getElementById("left").style.display = "none"
        document.getElementById("right").style.display = "none"
        document.getElementById("troll").style.display = "block"
        document.getElementById("continue").style.display = "block"
        document.getElementById("endgameReset").style.display = "block"
    }
    
    if(planet > 99 && pastEndgame === true){
        document.getElementById("left").style.display = ""
        document.getElementById("right").style.display = ""
        document.getElementById("troll").style.display = "none"
        document.getElementById("continue").style.display = "none"
        document.getElementById("endgameReset").style.display = "none"
    }    
    if(totalMulti >= 1e21){
        pastEndgame === true
        metWall = true
        saveGame()
        document.getElementById("left").style.display = "none"
        document.getElementById("right").style.display = "none"
        document.getElementById("theWall").style.display = "block"
    }

}

function displayUpdate(){
document.getElementById("human").innerHTML = human
  document.getElementById("house").innerHTML = house
  document.getElementById("town").innerHTML = town
  document.getElementById("city").innerHTML = city
  document.getElementById("state").innerHTML = state
  document.getElementById("country").innerHTML = country
  document.getElementById("continent").innerHTML = continent
  document.getElementById("planet").innerHTML = planet
  document.getElementById("solarSystem").innerHTML = solarSystem
  document.getElementById("universe").innerHTML = universe

  document.getElementById("userName").innerHTML = userName
  upgradeTexts()
 
}
function displayBonus(){
    multiUpdate()
    document.getElementById("house_multi").innerHTML = house_multi
    document.getElementById("town_h_multi").innerHTML = town_h_multi
    document.getElementById("city_h_multi").innerHTML = city_h_multi
    document.getElementById("city_h_multi").innerHTML = city_h_multi
    document.getElementById("state_h_multi").innerHTML = state_h_multi
    document.getElementById("country_h_multi").innerHTML = country_h_multi
    document.getElementById("continent_h_multi").innerHTML = continent_h_multi
    document.getElementById("planet_h_multi").innerHTML = planet_h_multi
    document.getElementById("solarSystem_h_multi").innerHTML = solarSystem_h_multi
    document.getElementById("universe_h_multi").innerHTML = universe_h_multi
    document.getElementById("totalMulti").innerHTML = totalMulti
  
}
function displayTime(){
    document.getElementById("secondDisplay").innerHTML = seconds > 0 ? `${seconds} Seconds` : ""
    document.getElementById("minuteDisplay").innerHTML = minutes > 0? `${minutes} Minutes` : ""
    document.getElementById("hourDisplay").innerHTML = hours > 0 ? `${hours} Hours` : ""
    document.getElementById("dayDisplay").innerHTML = days > 0 ? `${days} Days` : ""
}
function displayUpgrades(){
    upgradeVisible(1, total_human, 100, 0)
    upgradeVisible(2, total_house, 15, 1)
    upgradeVisible(3, upgrades.bought[1], 1, 2)
    upgradeVisible(4, universe, 1000000, 3)
    upgradeVisible(5, universe, 1000000, 3)
    upgradeVisible(6, universe, 1000000, 3)
    upgradeVisible(7, universe, 1000000, 3)
    upgradeVisible(8, universe, 1000000, 3)
    upgradeVisible(9, universe, 1000000, 3)
}
