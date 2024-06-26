appVideojuego.component("resultados-videojuegos", {
  template:
    /*HTML*/
    `
        <table id="tabla" border="1">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Plataforma</th>
                    <th>Estado</th>
                    <th>Puntaje</th>
                    <th>Más info</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego, index) in juegosFiltrados" :key="index">
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.plataforma }}</td>
                    <td>{{ juego.estado }}</td>
                    <td>{{ juego.puntaje }}</td>
                    <td><button @click="mostrarMasInformacion(juego)">+</button></td>
                </tr>
            </tbody>
        </table>
    `,
  props: {
    juegosFiltrados: {
      type: Array,
      required: true,
    },
  },
  methods: {
    mostrarMasInformacion(juego) {
      this.$emit("mostrar-informacion", juego);
    },
  },
});
