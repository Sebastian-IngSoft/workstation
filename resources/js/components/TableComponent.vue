<template>
  <a-table :columns="columns" :dataSource="dataSource" :rowKey="record => record.id">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'action'">
        <a-button @click="handleEdit(record)">Edit</a-button>
        <a-button @click="handleDelete(record)">Delete</a-button>
      </template>
      <template v-else>
        {{ record[column.dataIndex] }}
      </template>
    </template>
  </a-table>
</template>

<script>
export default {
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleEdit(record) {
      // Lógica para editar el producto
      console.log('Editando producto:', record);
    },
    handleDelete(record) {
      // Lógica para eliminar el producto
      console.log('Eliminando producto:', record);
    }
  }
};
</script>