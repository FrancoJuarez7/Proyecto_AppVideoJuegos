const appVideojuego = Vue.createApp({
  data() {
    return {
      titulo: "Administración de videojuegos",
      subtituloPaginaRegistro: "Nuevo videojuego",
      subtituloPaginaResultado: "Videojuegos",
      nombreVideojuego: "",
      plataformaVideojuego: "",
      estadoVideojuego: "",
      puntajeVideojuego: "",
      validacionVideojuegos: [],
      juegos: [],
      informacion: "",
      filtroNombre: "", // Filtro por nombre
      filtroPlataforma: "", // Filtro por plataforma
      filtroEstado: "", // Filtro por estado
    };
  },
  methods: {
    registrarVideojuego() {
      this.validacionVideojuegos = this.validarDatos();

      if (this.validacionVideojuegos.length !== 0) {
        return;
      }

      if (this.puntajeVideojuego === "") {
        this.puntajeVideojuego = " - ";
      }

      let nuevoJuego = {
        nombre: this.nombreVideojuego,
        plataforma: this.plataformaVideojuego,
        estado: this.estadoVideojuego,
        puntaje: this.puntajeVideojuego,
      };

      this.juegos.push(nuevoJuego);
      this.resetearFormulario();
    },

    validarDatos() {
      this.validacionVideojuegos = [];

      if (this.nombreVideojuego.trim() === "") {
        this.validacionVideojuegos.push(
          "No se ha ingresado el nombre del videojuego."
        );
      } else if (!isNaN(this.nombreVideojuego)) {
        this.validacionVideojuegos.push(
          "El nombre del videojuego no puede ser solo números."
        );
      }
      if (this.plataformaVideojuego.trim() === "") {
        this.validacionVideojuegos.push(
          "No se ha seleccionado una plataforma para el videojuego."
        );
      }
      if (this.estadoVideojuego.trim() === "") {
        this.validacionVideojuegos.push(
          "No se ha indicado en qué estado del videojuego te encuentras."
        );
      }
      if (
        this.puntajeVideojuego &&
        (isNaN(this.puntajeVideojuego) ||
          this.puntajeVideojuego < 1 ||
          this.puntajeVideojuego > 10)
      ) {
        this.validacionVideojuegos.push(
          "Puntuación fuera del rango aceptado (1-10)."
        );
      }

      return this.validacionVideojuegos;
    },

    resetearFormulario() {
      this.nombreVideojuego = "";
      this.plataformaVideojuego = "";
      this.estadoVideojuego = "";
      this.puntajeVideojuego = "";
    },
    actualizarInformacion(informacion) {
      this.informacion = informacion;
    },
  },
  computed: {
    juegosFiltrados() {
      return this.juegos.filter((juego) => {
        return (
          (this.filtroNombre === "" ||
            juego.nombre
              .toLowerCase()
              .includes(this.filtroNombre.toLowerCase())) &&
          (this.filtroPlataforma === "" ||
            juego.plataforma === this.filtroPlataforma) &&
          (this.filtroEstado === "" || juego.estado === this.filtroEstado)
        );
      });
    },
  },
});
