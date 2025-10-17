export class Zodiaco {
    nombre!: string;
    paterno!: string;
    Materno!: string;
    dia!: number;
    mes!: number;
    anio!: number;
    sexo!: string;
    edad!: number;
    cual!: string;
    imagen!: string;
  
    calcularEDAD(): void {
      const hoy = new Date();
      const fechaNacimiento = new Date(this.anio, this.mes - 1, this.dia);
      this.edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  
      const mesActual = hoy.getMonth();
      const diaActual = hoy.getDate();
      if (mesActual < fechaNacimiento.getMonth() || 
          (mesActual === fechaNacimiento.getMonth() && diaActual < fechaNacimiento.getDate())) {
        this.edad--;
      }
    }
  
    Animales(): void {
      const unos = (this.anio - 4) % 12;
  
      switch (unos) {
        case 0:
        this.cual = "RATA";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/rata.jpg";
        break;
      case 1:
        this.cual = "BUEY";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/buey.jpg";
        break;
      case 2:
        this.cual = "TIGRE";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/tigre.jpg";
        break;
      case 3:
        this.cual = "CONEJO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/conejo.jpg";
        break;
      case 4:
        this.cual = "DRAGóN";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/dragon.jpg";
        break;
      case 5:
        this.cual = "SERPIENTE";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/serpiente.jpg";
        break;
      case 6:
        this.cual = "CABALLO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/caballo.jpg";
        break;
      case 7:
        this.cual = "CABRA";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/cabra.jpg";
        break;
        case 8:
        this.cual = "MONILLO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/mono.jpg";
        break;
      case 9:
        this.cual = "GALLITO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/gallo.jpg";
        break;
      case 10:
        this.cual = "PERRITO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/perro.jpg";
        break;
      case 11:
        this.cual = "CERDITO";
        this.imagen = "https://www.horoscopochino.eu/assets/img/zodiaco/s/cerdo.jpg";
        break;
      default:
        this.cual = "Desconocido";
        this.imagen = "https://cdn-icons-png.flaticon.com/512/565/565655.png";
        break;
      }
    }
  }
  