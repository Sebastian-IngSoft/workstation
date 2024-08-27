<template>
    <div>
        <a-select v-model="selectedValue" @change="emitSelectedProduct">
            <a-select-option v-for="item in content" :key="getId(item)" :value="getId(item)">
                {{ getName(item) }}
            </a-select-option>
        </a-select>
        <!-- Campo oculto para enviar el valor seleccionado -->
        <input type="hidden" :name="name" :value="selectedValue">
    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            default: 'customer_id'
        }
    },
    data() {
        return {
            selectedValue: null
        };
    },
    methods: {
        getId(item) {
            const keys = Object.keys(item);
            return item[keys[0]];
        },
        getName(item) {
            const keys = Object.keys(item);
            return item[keys[1]];
        },
        emitSelectedProduct() {
            const selectedItem = this.content.find(item => this.getId(item) === this.selectedValue);
            this.$emit('item-selected', selectedItem);
        }
    }
};
</script>