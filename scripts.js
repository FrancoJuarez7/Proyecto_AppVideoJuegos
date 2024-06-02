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
            informacion: "" 
        }
    },
    methods: {
        // Función para registrar el videojuego
        registrarVideojuego() {
            this.validacionVideojuegos = this.validarDatos();

            if (this.validacionVideojuegos.length !== 0) {
                return;
            }

            if (this.puntajeVideojuego === "") {
                this.puntajeVideojuego = " - ";
            }

            // Registro del videojuego para guardarlo en la tabla
            let nuevoJuego = {
                nombre: this.nombreVideojuego,
                plataforma: this.plataformaVideojuego,
                estado: this.estadoVideojuego,
                puntaje: this.puntajeVideojuego,
            };

            this.juegos.push(nuevoJuego);
            this.resetearFormulario();
        },

        // Función para validar los datos del videojuego
        validarDatos() {

            this.validacionVideojuegos = [];

            if (this.nombreVideojuego.trim() === "") {
                this.validacionVideojuegos.push("No se ha ingresado el nombre del videojuego.");
            }
            if (this.plataformaVideojuego.trim() === "") {
                this.validacionVideojuegos.push("No se ha seleccionado una plataforma para el videojuego.");
            }
            if (this.estadoVideojuego.trim() === "") {
                this.validacionVideojuegos.push("No se ha indicado en qué estado del videojuego te encuentras.");
            }
            if (this.puntajeVideojuego && (isNaN(this.puntajeVideojuego) || this.puntajeVideojuego < 1 || this.puntajeVideojuego > 10)) {
                this.validacionVideojuegos.push("Puntuación fuera del rango aceptado (1-10).");
            }

            return this.validacionVideojuegos;
        },

        // Función para limpiar los datos del formulario
        resetearFormulario() {
            this.nombreVideojuego = "";
            this.plataformaVideojuego = "";
            this.estadoVideojuego = "";
            this.puntajeVideojuego = "";
        },
        actualizarInformacion(informacion) {
            this.informacion = informacion;
        }
    }
});

