<template>
  <div>
    <h1>{{ titulo }}</h1>
    <a-space direction="vertical" size="large" style="width: 100%;">
      <a-input v-model="nuevaTarea" v-on:keyup.enter="agregarTarea"></a-input>
      <a-button type="primary" @click="agregarTarea">Primary Button</a-button>
      <div v-for="tarea,index in tareas" :key="tarea.id" class="d-flex flex-row bd-highlight mb-3">
        <a-alert :message="tarea.nombre + ' ' + tarea.estado" type="success" style="width: 50%;"></a-alert>
        <button :class="color" @click="switchTarea(index)">Switch</button>
        <button class="btn btn-danger" @click="eliminarTarea(index)">Eliminar</button>

      </div>
    </a-space>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "CRUD con Vue 2",
      tareas: [],
      nuevaTarea: "",
    };
  },
  methods: {
    agregarTarea() {
      if (this.nuevaTarea.trim() !== "") {
        this.tareas.push({ id: Date.now(), nombre: this.nuevaTarea, estado: "pendiente" });
        this.nuevaTarea = "";
      }
    },
    switchTarea(index) {
      this.tareas[index].estado = this.tareas[index].estado === "pendiente" ? "completada" : "pendiente";
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
      console.log(`Quedan ${this.tareas.length} tareas.`)
    }
  },
  computed: {
    color() {
      return {
        'btn btn-success': this.tareas.length <= 3,
        'btn btn-warning': this.tareas.length > 3 && this.tareas.length <= 6,
        'btn btn-danger': this.tareas.length > 6,
      }
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente */
</style>