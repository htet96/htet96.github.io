function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }

pokemon = ['Treecko','Grovyle','Sceptile','Torchic','Combusken','Blaziken','Mudkip','Marshtomp','Swampert','Poochyena','Mightyena','Zigzagoon','Linoone','Wurmple','Silcoon','Beautifly','Cascoon','Dustox','Lotad','Lombre','Ludicolo','Seedot','Nuzleaf','Shiftry','Taillow','Swellow','Wingull','Pelipper','Ralts','Kirlia','Gardevoir','Surskit','Masquerain','Shroomish','Breloom','Slakoth','Vigoroth','Slaking','Nincada','Ninjask','Shedinja','Whismur','Loudred','Exploud','Makuhita','Hariyama','Azurill','Nosepass','Skitty','Delcatty','Sableye','Mawile','Aron','Lairon','Aggron','Meditite','Medicham','Electrike','Manectric','Plusle','Minun','Volbeat','Illumise','Roselia','Gulpin','Swalot','Carvanha','Sharpedo','Wailmer','Wailord','Numel','Camerupt','Torkoal','Spoink','Grumpig','Spinda','Trapinch','Vibrava','Flygon','Cacnea','Cacturne','Swablu','Altaria','Zangoose','Seviper','Lunatone','Solrock','Barboach','Whiscash','Corphish','Crawdaunt','Baltoy','Claydol','Lileep','Cradily','Anorith','Armaldo','Feebas','Milotic','Castform','Kecleon','Shuppet','Banette','Duskull','Dusclops','Tropius','Chimecho','Absol','Wynaut','Snorunt','Glalie','Spheal','Sealeo','Walrein','Clamperl','Huntail','Gorebyss','Relicanth','Luvdisc','Bagon','Shelgon','Salamence','Beldum','Metang','Metagross','Regirock','Regice','Registeel','Latias','Latios','Kyogre','Groudon','Rayquaza','Jirachi','Deoxys']
city = ['Littleroot Town', 'Oldale Town', 'Petalburg City', 'Rustboro City', 'Dewford Town', 'Slateport City', 'Mauville City', 'Verdanturf Town', 'Fallarbor Town', 'Lavaridge Town', 'Fortree City', 'Lilycove City', 'Mossdeep City', 'Sootopolis City', 'Pacifidlog Town', 'Ever Grande City']
attempts = [2, 3, 4, 5, 6, 7, 8, 9, 10]

your = {
  pokemon: pokemon[generateRandomNumber(pokemon.length)],
  city: city[generateRandomNumber(city.length)],
  attempts: attempts[generateRandomNumber(attempts.length)]
}

console.log(`Your hometown is in ${your.city}.`);
console.log(`Your favorite pokemon is ${your.pokemon}.`);
console.log(`You will take ${your.attempts} attempts before you finally beat the Elite Four!`);
