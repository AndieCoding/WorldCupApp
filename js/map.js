  let logged = localStorage.getItem('logged');
  if (!logged) window.location.href = "index.html";

  const cerrarSesion = () => {
    localStorage.removeItem('logged');
    window.location.href = "index.html";
  }
  
  let lugarMessi = [-32.94682, -60.63932];
  let map = L.map("map").setView(lugarMessi, 12);
  // Creamos el mapa
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
  }).addTo(map);

  let banderaIcon = L.icon({
    iconUrl: "../img/mapDesktop/jugadores/arg.png",
    iconSize: [60, 40],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });

  let messiIcon = L.icon({
    iconUrl: "../img/mapDesktop/jugadores/messi.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });
  
  let qatar = L.icon ({
    iconUrl: "../img/mapDesktop/jugadores/qatar.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });

  let dimaria = L.icon ({
    iconUrl: "../img/mapDesktop/jugadores/dimaria.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });

  let otamendi = L.icon ({
    iconUrl: "../img/mapDesktop/jugadores/otamendi.png",
    iconSize: [60, 60],
    iconAnchor: [42, 44],
    popupAnchor: [8, -41],
  });

  let alvarez = L.icon ({
    iconUrl: "../img/mapDesktop/jugadores/alvarez.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });

  let martinez = L.icon ({
    iconUrl: "../img/mapDesktop/jugadores/martinez.png",
    iconSize: [60, 60],
    iconAnchor: [22, 44],
    popupAnchor: [8, -41],
  });

  // Ponemos el ícono en el mapa.
  let marker = L.marker(lugarMessi, { icon: banderaIcon }).addTo(map);

  // Agregamos el pop up.
  marker.bindPopup("<b>Bienvenido!</b><br>Esto es Rosario").openPopup();

const objetoMapa = [
  {
  jugador: "Qatar 2022",
  coordenada: [25.2841478, 51.4419568],
  ciudad: "World Cup", 
  icon: (qatar),
  },
  {
  jugador: "Messi",
  coordenada: [-32.9520457, -60.766679],
  ciudad: "Rosario",
  icon: (messiIcon),
  },
  {
  jugador: "Di María",
  coordenada: [-32.9520457, -60.766679],
  ciudad: "Rosario",
  icon: (dimaria),
  },
  {
  jugador: "Otamendi",
  coordenada: [-34.4718607, -58.6715832],
  ciudad: "El Talar",
  icon: (otamendi),
  },
  {
  jugador: "Julián Álvarez",
  coordenada: [-31.6679028, -63.2032357],
  ciudad: "Calchín",
  icon: (alvarez),
  },
  {
  jugador: "Dibu Martínez",
  coordenada: [-38.0174106, -57.6705734],
  ciudad: "Mar del Plata",
  icon: (martinez), 
  },
  ];

  let select = document.querySelector('select');  
  const opciones = objetoMapa.map( x => {
    return `<option>${x.jugador}</option>`;    
  })  
  select.innerHTML = opciones.join().replaceAll(","," ");

  function changeMap() {
    const objeto = objetoMapa.find((item) => item.jugador === select.value);
    map.setView(new L.LatLng(...objeto.coordenada), 11);
    marker = L.marker(objeto.coordenada, { icon: objeto.icon }).addTo(map);
    marker.bindPopup(`Hola! Soy <b>${objeto.jugador}</b><br>Nací en <b>${objeto.ciudad}<b>`).openPopup();
    }

