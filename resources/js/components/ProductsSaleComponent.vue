<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr id="1">
                    <td class="fixed-size-select">
                        <select-component class="fixed-size-select" :content="products" :name="name" @item-selected="updateSelectedProduct"></select-component>
                    </td>
                    <td class="fixed-size-select">
                        <input name="price" type="number" class="form-control" :value="onItemSelected ? onItemSelected.sell : 0" disabled>
                    </td>
                    <td class="fixed-size-select">
                        <input name="quantity" type="number" class="form-control" value="0" v-model="quantity">
                    </td>
                    <td class="fixed-size-select">
                        <input name="total" type="number" class="form-control" :value="onItemSelected ? (onItemSelected.sell * quantity).toFixed(2) : 0" disabled>
                    </td>
                    <td>
                        <a-button>Delete</a-button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
        </div>
    </div>
</template>

<script>
import SelectComponent from './SelectComponent.vue';
export default {
    components: {
        SelectComponent
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            default: 'id'
        }
    },
    data() {
        return {
            onItemSelected: null,
            quantity: 0,
        };
    },
    methods: {
        updateSelectedProduct(product) {
            this.onItemSelected = product;
        }
    }
};
</script>
<style scoped>
.fixed-size-select {
    width: 200px; /* Ajusta el tamaño según tus necesidades */
}
</style>