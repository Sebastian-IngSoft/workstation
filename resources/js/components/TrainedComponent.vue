<script setup>
    import { ref } from 'vue';
//v-bind para usar variables de javascript en el template
    const message = 'Vue dinamico 3';
    const arraynumeros = ['red', 'blue', 3, 4, 5];
    const activo = ref(true);
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
    </div>
</template>