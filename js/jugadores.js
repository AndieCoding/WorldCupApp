let logged = localStorage.getItem('logged');
if (!logged) window.location.href = "index.html";

const cerrarSesion = () => {
    localStorage.removeItem('logged');
    window.location.href = "index.html";
  }


fetch('https://639a535a3a5fbccb5264b073.mockapi.io/jugadores')
  .then((response) => response.json())
  .then((data) => {     
   let jugadores = data.map( jugador => {
    return `<div class="card col-12 col-sm-4">
              <div class="img-wrapper">
                <img src="https://julioavantt.github.io/guayerd-project-images/img/${jugador.dorsal}.jpg" class="card-img-top" alt="foto-jugador">
                <span>${jugador.dorsal}</span>
              </div>
              <div class="card-body col-12">
                <h5 class="card-title">${jugador.name}</h5>
                <p class="card-text">Edad: ${jugador.edad}</p>
                <p class="card-text">Posición: ${jugador.posicion}</p>  
                <p class="card-text">Peso: ${jugador["stats-fisico"].peso}</p>
                <p class="card-text">Altura: ${jugador["stats-fisico"].altura}</p>
                <p class="card-text">Equipo actual: ${jugador["equipo-actual"]}</p>   
                <p class="card-text">Fecha de nacimiento: ${jugador["fecha-nacimiento"]}</p>
              </div>
            </div>`   
})
    let section = document.querySelector('section');
    let jugadores1 = jugadores.join().replaceAll(',',""); 
    section.innerHTML = jugadores1;
  })  
  .catch((error) => console.log(error));

/*
     
    
  

  const players = [{
    "id": 1,
    "name": "Emiliano Martínez",
    "fecha-nacimiento": "02-09-1992",
    "edad": 30,
    "equipo-actual": "Aston Villa",
    "posicion": "Arquero",
    "dorsal": 23,
    "debut": 2021,
    "stats-fisico": {
      "peso": 88,
      "altura": 1.95
    }
  },
  {
    "id": 2,
    "name": "Gerónimo Rulli",
    "fecha-nacimiento": "20-05-1992",
    "edad": 30,
    "equipo-actual": "Villareal CF",
    "posicion": "Arquero",
    "dorsal": 12,
    "debut": 2018,
    "stats-fisico": {
      "peso": 80,
      "altura": 1.89
    }
  },
  {
    "id": 3,
    "name": "Franco Armani",
    "fecha-nacimiento": "16-10-1986",
    "edad": 36,
    "equipo-actual": "River Plate",
    "posicion": "Arquero",
    "dorsal": 1,
    "debut": 2018,
    "stats-fisico": {
      "peso": 85,
      "altura": 1.89
    }
  },
  {
    "id": 4,
    "name": "Cristian Romero",
    "fecha-nacimiento": "27-04-1998",
    "edad": 24,
    "equipo-actual": "Tottenham",
    "posicion": "Defensor",
    "dorsal": 13,
    "debut": 2021,
    "stats-fisico": {
      "peso": 79,
      "altura": 1.85
    }
  },
  {
    "id": 5,
    "name": "Juan Foyth",
    "fecha-nacimiento": "12-01-1998",
    "edad": 24,
    "equipo-actual": "Villareal CF",
    "posicion": "Defensor",
    "dorsal": 2,
    "debut": 2018,
    "stats-fisico": {
      "peso": 74,
      "altura": 1.88
    }
  },
  {
    "id": 6,
    "name": "Nicolás Tagliafico",
    "fecha-nacimiento": "31-08-1992",
    "edad": 30,
    "equipo-actual": "Olympique de Lyon",
    "posicion": "Defensor",
    "dorsal": 3,
    "debut": 2017,
    "stats-fisico": {
      "peso": 65,
      "altura": 1.72
    }
  },
  {
    "id": 7,
    "name": "Gonzalo Montiel",
    "fecha-nacimiento": "01-01-1997",
    "edad": 25,
    "equipo-actual": "Sevilla F.C",
    "posicion": "Defensor",
    "dorsal": 4,
    "debut": 2019,
    "stats-fisico": {
      "peso": 72,
      "altura": 1.7
    }
  },
  {
    "id": 8,
    "name": "Germán Pezzella",
    "fecha-nacimiento": "27-06-1991",
    "edad": 31,
    "equipo-actual": "Real Betis Balompié",
    "posicion": "Defensor",
    "dorsal": 6,
    "debut": 2017,
    "stats-fisico": {
      "peso": 82,
      "altura": 1.86
    }
  },
  {
    "id": 9,
    "name": "Marcos Acuña",
    "fecha-nacimiento": "28-10-1991",
    "edad": 31,
    "equipo-actual": "Sevilla F.C",
    "posicion": "Defensor",
    "dorsal": 8,
    "debut": 2016,
    "stats-fisico": {
      "peso": 72,
      "altura": 1.72
    }
  },
  {
    "id": 10,
    "name": "Nicolás Otamendi",
    "fecha-nacimiento": "12-02-1988",
    "edad": 34,
    "equipo-actual": "S.L Benfica",
    "posicion": "Defensor",
    "dorsal": 19,
    "debut": 2009,
    "stats-fisico": {
      "peso": 81,
      "altura": 1.83
    }
  },
  {
    "id": 11,
    "name": "Lisandro Martínez",
    "fecha-nacimiento": "18-01-1998",
    "edad": 24,
    "equipo-actual": "Manchester United",
    "posicion": "Defensor",
    "dorsal": 25,
    "debut": 2020,
    "stats-fisico": {
      "peso": 75,
      "altura": 1.73
    }
  },
  {
    "id": 12,
    "name": "Nahuel Molina",
    "fecha-nacimiento": "06-04-1998",
    "edad": 24,
    "equipo-actual": "Atlético Madrid",
    "posicion": "Defensor",
    "dorsal": 26,
    "debut": 2021,
    "stats-fisico": {
      "peso": 70,
      "altura": 1.75
    }
  },
  {
    "id": 13,
    "name": "Leandro Paredes",
    "fecha-nacimiento": "29-06-1994",
    "edad": 28,
    "equipo-actual": "Juventus",
    "posicion": "Mediocampista",
    "dorsal": 5,
    "debut": 2017,
    "stats-fisico": {
      "peso": 75,
      "altura": 1.8
    }
  },
  {
    "id": 14,
    "name": "Rodrigo De Paul",
    "fecha-nacimiento": "24-05-1994",
    "edad": 28,
    "equipo-actual": "Atlético Madrid",
    "posicion": "Mediocampista",
    "dorsal": 7,
    "debut": 2018,
    "stats-fisico": {
      "peso": 70,
      "altura": 1.8
    }
  },
  {
    "id": 15,
    "name": "Exequiel Palacios",
    "fecha-nacimiento": "05-10-1998",
    "edad": 24,
    "equipo-actual": "Bayer 04 Leverkusen",
    "posicion": "Mediocampista",
    "dorsal": 14,
    "debut": 2018,
    "stats-fisico": {
      "peso": 76,
      "altura": 1.77
    }
  },
  {
    "id": 16,
    "name": "Enzo Fernández",
    "fecha-nacimiento": "17-01-2001",
    "edad": 21,
    "equipo-actual": "S.L Benfica",
    "posicion": "Mediocampista",
    "dorsal": 24,
    "debut": 2022,
    "stats-fisico": {
      "peso": 77,
      "altura": 1.78
    }
  },
  {
    "id": 17,
    "name": "Guido Rodríguez",
    "fecha-nacimiento": "12-04-1994",
    "edad": 28,
    "equipo-actual": "Real Betis Balompié",
    "posicion": "Mediocampista",
    "dorsal": 18,
    "debut": 2017,
    "stats-fisico": {
      "peso": 80,
      "altura": 1.87
    }
  },
  {
    "id": 18,
    "name": "Alexis Mac Allister",
    "fecha-nacimiento": "24-12-1998",
    "edad": 23,
    "equipo-actual": "Brighton & Hove Albion",
    "posicion": "Mediocampista",
    "dorsal": 20,
    "debut": 2019,
    "stats-fisico": {
      "peso": 72,
      "altura": 1.72
    }
  },
  {
    "id": 19,
    "name": "Alejandro Gómez",
    "fecha-nacimiento": "15-02-1988",
    "edad": 34,
    "equipo-actual": "Sevilla F.C",
    "posicion": "Mediocampista",
    "dorsal": 17,
    "debut": 2017,
    "stats-fisico": {
      "peso": 68,
      "altura": 1.67
    }
  },
  {
    "id": 20,
    "name": "Lionel Messi",
    "fecha-nacimiento": "24-06-1987",
    "edad": 35,
    "equipo-actual": "PSG",
    "posicion": "Delantero",
    "dorsal": 10,
    "debut": 2005,
    "stats-fisico": {
      "peso": 72,
      "altura": 1.7
    }
  },
  {
    "id": 21,
    "name": "Julian Álvarez",
    "fecha-nacimiento": "31-01-2000",
    "edad": 22,
    "equipo-actual": "Manchester City",
    "posicion": "Delantero",
    "dorsal": 9,
    "debut": 2021,
    "stats-fisico": {
      "peso": 71,
      "altura": 1.7
    }
  },
  {
    "id": 22,
    "name": "Ángel Correa",
    "fecha-nacimiento": "09-03-1995",
    "edad": 27,
    "equipo-actual": "Atlético Madrid",
    "posicion": "Delantero",
    "dorsal": 15,
    "debut": 5,
    "stats-fisico": {
      "peso": 70,
      "altura": 1.71
    }
  },
  {
    "id": 23,
    "name": "Ángel Di María",
    "fecha-nacimiento": "14-02-1988",
    "edad": 34,
    "equipo-actual": "Juventus",
    "posicion": "Delantero",
    "dorsal": 11,
    "debut": 2008,
    "stats-fisico": {
      "peso": 75,
      "altura": 1.8
    }
  },
  {
    "id": 24,
    "name": "Thiago Almada",
    "fecha-nacimiento": "04-04-2001",
    "edad": 21,
    "equipo-actual": "Alanta United",
    "posicion": "Delantero",
    "dorsal": 16,
    "debut": 2022,
    "stats-fisico": {
      "peso": 63,
      "altura": 1.71
    }
  },
  {
    "id": 25,
    "name": "Paulo Dybala",
    "fecha-nacimiento": "15-11-1993",
    "edad": 29,
    "equipo-actual": "A.S Roma",
    "posicion": "Delantero",
    "dorsal": 21,
    "debut": 2015,
    "stats-fisico": {
      "peso": 75,
      "altura": 1.77
    }
  },
  {
    "id": 26,
    "name": "Lautaro Martínez",
    "fecha-nacimiento": "22-08-1997",
    "edad": 25,
    "equipo-actual": "Inter de Milán",
    "posicion": "Delantero",
    "dorsal": 22,
    "debut": 2018,
    "stats-fisico": {
      "peso": 72,
      "altura": 1.74
    }
  }
]

  /*
  let jugadores = players.map( jugador => {
   return `<div class="card col-12 col-sm-4">
   <img src="img/jugadores/messi.jpg" class="card-img-top" alt="...">
   <div class="card-body col-12">
     <h5 class="card-title">${jugador.name}</h5>
     <p class="card-text">Edad: ${jugador.edad}</p>
     <p class="card-text">Posición: ${jugador.posicion}</p>      
     <p class="card-text">Equipo: ${jugador["equipo-actual"]}</p>  
     <p class="card-text">Equipo: ${jugador["stats-fisico"].peso}</p>  
     <p class="card-text">Equipo: ${jugador["equipo-actual"]}</p>          
   </div>
 </div>`  });
 let section = document.querySelector('section');
 let jugadores1 = jugadores.join().replace(',',""); 
 section.innerHTML = jugadores1;
 */