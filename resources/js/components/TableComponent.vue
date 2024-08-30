<template>
  <a-table :columns="columns" :dataSource="dataSource" rowKey="key">
  </a-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: 'Header 1',
          dataIndex: 'header1',
          key: 'header1',
        },
        {
          title: 'Header 2',
          dataIndex: 'header2',
          key: 'header2',
        },
        {
          title: 'Action',
          dataIndex: 'action',
          key: 'action',
        },
      ],
      dataSource: [
        {
          key: '1',
          header1: 'Data 1',
          header2: 'Data 2',
          title: 'Action Title 1',
        },
        {
          key: '2',
          header1: 'Data 3',
          header2: 'Data 4',
          title: 'Action Title 2',
        },
      ],
    };
  },
};
</script>