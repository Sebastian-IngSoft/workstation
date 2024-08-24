require('./bootstrap');

window.Vue = require('vue');

// Importa Ant Design Vue y su archivo de estilos
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// Usa Ant Design Vue
Vue.use(Antd);

// Registrar componentes Vue
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
import AntDesignComponents from './components/AntDesignComponents.vue';
//registrar table-component
import TableComponent from './components/TableComponent.vue';
import TrainedComponent from './components/TrainedComponent.vue';
import CrudComponent from './components/CrudComponent.vue';

const app = new Vue({
    el: '#app',
    components: { 
        AntDesignComponents, 
        TableComponent, 
        TrainedComponent, 
        CrudComponent 
    }
});