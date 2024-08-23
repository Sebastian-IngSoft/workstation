<template>
    <div>
        <!-- Botón primario -->
        <a-button type="primary">Primary Button</a-button>
        
        <!-- Selector de fecha -->
        <a-date-picker />
        
        <!-- Campo de entrada de texto -->
        <a-input placeholder="Basic usage" />
        
        <!-- Tabla con datos -->
        <a-table :columns="columns" :dataSource="data" />
        
        <!-- Modal básico -->
        <a-modal title="Basic Modal" v-model="visible">
            <p>Some contents...</p>
        </a-modal>
        
        <!-- Formulario con varios elementos -->
        <a-form>
            <!-- Elemento de selección -->
            <a-form-item label="Select">
                <a-select>
                    <a-select-option value="1">Option 1</a-select-option>
                    <a-select-option value="2">Option 2</a-select-option>
                </a-select>
            </a-form-item>
            
            <!-- Elemento de checkbox -->
            <a-form-item label="Checkbox">
                <a-checkbox>Checkbox</a-checkbox>
            </a-form-item>
            
            <!-- Grupo de radio buttons -->
            <a-form-item label="Radio">
                <a-radio-group>
                    <a-radio value="1">Radio 1</a-radio>
                    <a-radio value="2">Radio 2</a-radio>
                </a-radio-group>
            </a-form-item>
            
            <!-- Interruptor -->
            <a-form-item label="Switch">
                <a-switch />
            </a-form-item>
            
            <!-- Deslizador -->
            <a-form-item label="Slider">
                <a-slider />
            </a-form-item>
            
            <!-- Elemento de carga de archivos -->
            <a-form-item label="Upload">
                <a-upload>
                    <a-button>
                        <a-icon type="upload" /> Click to Upload
                    </a-button>
                </a-upload>
            </a-form-item>
        </a-form>
        
        <!-- Alerta de éxito -->
        <a-alert message="Success Text" type="success" />
        
        <!-- Avatar con icono de usuario -->
        <a-avatar icon="user" />
        
        <!-- Badge con contador -->
        <a-badge count="5">
            <a-button>Badge</a-button>
        </a-badge>
        
        <!-- Breadcrumb -->
        <a-breadcrumb>
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>Application Center</a-breadcrumb-item>
            <a-breadcrumb-item>Application List</a-breadcrumb-item>
            <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
        
        <!-- Calendario -->
        <a-calendar />
        
        <!-- Tarjeta con contenido -->
        <a-card title="Card Title">
            <p>Card content</p>
        </a-card>
        
        <!-- Carrusel -->
        <a-carousel>
            <div class="carousel-item"><h3>1</h3></div>
            <div class="carousel-item"><h3>2</h3></div>
            <div class="carousel-item"><h3>3</h3></div>
            <div class="carousel-item"><h3>4</h3></div>
        </a-carousel>
        
        <!-- Colapso -->
        <a-collapse>
            <a-collapse-panel header="This is panel header 1" key="1">
                <p>Panel content</p>
            </a-collapse-panel>
        </a-collapse>
        
        <!-- Dropdown -->
        <a-dropdown>
            <a-button>
                Actions <a-icon type="down" />
            </a-button>
            <a-menu slot="overlay">
                <a-menu-item key="1">1st menu item</a-menu-item>
                <a-menu-item key="2">2nd menu item</a-menu-item>
                <a-menu-item key="3">3rd menu item</a-menu-item>
            </a-menu>
        </a-dropdown>
        
        <!-- Paginación -->
        <a-pagination :defaultCurrent="1" :total="50" />
        
        <!-- Barra de progreso -->
        <a-progress :percent="50" />
        
        <!-- Calificación -->
        <a-rate />
        
        <!-- Spinner de carga -->
        <a-spin />
        
        <!-- Pasos -->
        <a-steps :current="1">
            <a-step title="Step 1" />
            <a-step title="Step 2" />
            <a-step title="Step 3" />
        </a-steps>
        
        <!-- Pestañas -->
        <a-tabs>
            <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
        </a-tabs>
        
        <!-- Tooltip -->
        <a-tooltip title="prompt text">
            <a-button>Tooltip</a-button>
        </a-tooltip>
        
        <!-- Árbol -->
        <a-tree :treeData="treeData" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false, // Estado de visibilidad del modal
            columns: [ // Columnas de la tabla
                { title: 'Name', dataIndex: 'name', key: 'name' },
                { title: 'Age', dataIndex: 'age', key: 'age' },
                { title: 'Address', dataIndex: 'address', key: 'address' },
            ],
            data: [ // Datos de la tabla
                { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1 Lake Park' },
                { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1 Lake Park' },
            ],
            treeData: [ // Datos del árbol
                { title: 'parent 1', key: '0-0', children: [
                    { title: 'child 1', key: '0-0-0', children: [
                        { title: 'leaf', key: '0-0-0-0' },
                        { title: 'leaf', key: '0-0-0-1' },
                    ]},
                    { title: 'child 2', key: '0-0-1', children: [
                        { title: 'leaf', key: '0-0-1-0' },
                    ]},
                ]},
            ],
        };
    },
};
</script>

<style scoped>
.carousel-item {
    height: 160px;
    color: #fff;
    line-height: 160px;
    text-align: center;
    background: #364d79;
}
</style>