<template>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th style="width: 352px;">Producto</th>
            <th style="width: 100px;">Precio</th>
            <th style="width: 100px;">Stock</th>
            <th style="width: 100px;">Cantidad</th>
            <th style="width: 100px;">Total</th>
            <th style="width: 100px;"></th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(sale, index) in productSale">
            <tr :id="`producto${sale}`">
              <td>
                <select-component :content="productsContent" name="product_id[]"
                  @item-selected="addSelectProduc($event, sale)" class="fixed-width"></select-component>
              </td>
              <td><span>{{ productSelected[index] && productSelected[index][0] ? productSelected[index][0].sell : 0 }}</span></td>
              <td><span>{{ productSelected[index] && productSelected[index][0] ? productSelected[index][0].stock : 0 }}</span></td>
              <td><input type="number" class="ant-input" name="quantity[]" v-model.number="quantities[index]"></td>
              <td><span>{{ calculateTotal(index).toFixed(2) }}</span></td>
              <td>
                <a-button type="danger" @click="eliminarProducto(sale)">Eliminar</a-button>
              </td>
            </tr>
          </template>
        </tbody>
        
      </table>
      <a-button type="default" class="bg-warning" @click="productSaleAdd">Agregar producto</a-button>
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
        }
    }
    ,
    data() {
    return {
      productsContent: this.products,
      productSelected: [],
      productSale: 0,
      quantities: []
    };
  },
  methods: {
    productSaleAdd() {
      this.productSale++;
      this.productSelected.push([{
        sell: 0,
        stock: 0,
        quantity: 0,
        total: 0
      }]);
      this.quantities.push(0);
      console.log(this.productSelected);
    },
    eliminarProducto(product) {
      document.getElementById(`producto${product}`).remove();
    },
    addSelectProduc(event, sale) {
      let product = event;
      this.$set(this.productSelected, sale - 1, [{ ...this.productSelected[sale - 1][0], ...product }]);
      console.log(this.productSelected);
      this.getProduct();
    },
    getProduct() {
      // Implementa la lógica para obtener el producto aquí
    },
    calculateTotal(index) {
      const product = this.productSelected[index] && this.productSelected[index][0];
      const quantity = this.quantities[index];
      return product ? product.sell * quantity : 0;
    }
  }

};
</script>
<style scoped>
.bg-warning {
    background-color: #f0ad4e;
    color: white;
}

.fixed-width {
    width: 100%;
    /* Ajusta el ancho según tus necesidades */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>