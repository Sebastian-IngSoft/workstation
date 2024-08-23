<script setup>
    import { ref , computed } from 'vue';
//v-bind para usar variables de javascript en el template
    const message = 'Vue dinamico 3';
    const arraynumeros = ['red', 'blue', 3, 4, 5];
    const activo = ref(true);
    const count = ref(0);
    const arrayFrutas = [
    {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 0,
    },
    {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 10,
    },
    {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 20,
    },
    ];
    const frutasobject = {
    manzana: {
        name: "Manzana",
        price: "$1.00",
        description: "Una manzana",
        stock: 20
    },
    banana: {
        name: "Banana",
        price: "$0.50",
        description: "Una banana",
        stock: 30
    },
    pera: {
        name: "Pera",
        price: "$2.00",
        description: "Una pera",
        stock: 0
    },
    naranja: {
        name: "Naranja",
        price: "$3.00",
        description: "Una naranja",
        stock: 5
    }
    };
    const activar = () => {
        activo.value = !activo.value;
        console.log('test'+ activo);
    };
    const aumentar = () => {
        count.value++;
    };
    const disminuir = () => {
        count.value--;
    };
    const reset = () => {
        count.value = 0;
    };
    const numeros=ref([]) 

    const classComputed = computed(() => {
        if (count.value < 0) {

            return 'red';
        } else if (count.value > 0) {

            return 'green';
        }
        else {
            return 'black';
        }
    });
    const add = (x) => {
        numeros.value.push(x);
        
        
    };
    const disabled = computed(() => {
        if (numeros.value.includes(count.value)) {
            console.log(count);
            console.log(count.value);
            return true;
        } else {
            return false;
        }
    });
    
</script>
<template>
    <div>
        <!--el altgr `` para concatenar expresiones-->
        <h1 v-bind:style="`color: ${arraynumeros[1]}`">{{ message }}</h1>
        <h2>{{ arraynumeros[1] }}</h2>
        <p v-if="activo === true">switch activo</p>
        <p v-else-if="activo === false">switch desactivo</p>
        <p v-else>switch nulo</p>

        <ul>
            <li v-for="(numero,index) in arraynumeros" :key="index">{{`${numero} con el indice ${index}`}}</li>
        </ul>
        <!--practica array frutas-->
        <ul>
            <li v-for="frutas in arrayFrutas">
                <ul>
                    <li v-for="fruta in frutas">
                        {{ fruta}}
                    </li>
                </ul>
            </li>
        </ul>
        <!--practica con objeto-->
        <template v-for="(valor, propiedad, index) in frutasobject">
            <li>{{ valor.description }}</li>
        </template>

        <button @click="activar">activar</button>
        //si el count es menor a cero style color es rojo si es mayor a cero es verde
        <p :style="'color : '+ classComputed">{{ count }}</p>
        <button @click="aumentar">aumentar</button>
        <button @click="disminuir">disminuir</button>
        <button @click="reset">reset</button>

        <!--Practicando todo-->
        <button :disabled="disabled" @click="add(count)">add</button>
        <ul>
            <li v-for="numero in numeros">{{ numero }}</li>
        </ul>
    </div>
</template>