<template>
    <div>
        <button type="button" :class="cls" data-toggle="modal" :data-target="`#exampleModal${id}`">
            <i v-if="icon" :class="icon" aria-hidden="true"></i>
            <p v-else>{{ text }}</p>
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="`exampleModal${id}`" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    </div>
                <form :action="formModal" method="post">
                        <div class="modal-body">
                            <slot name="body">
                                slot__body
                                <template v-if="!id">
                                    <br>
                                    id__ para enlazar el boton con el modal mediante el id de la propiedad
                                    <br>
                                    cls__ para agregar clases a los botones
                                    <br>
                                    form-modal__ para la ruta del formulario metodo por defecto POST
                                </template>
                            </slot>
                        </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="submit" :class="cls">{{ btnName }}</button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "BtnModalComponent",
    props: {
        id: {
            type: Number,
            required: true,
        },
        cls: {
            type: String,
            default: 'cls__'
        },
        title: {
            type: String,
            default: 'title__'
        },
        btnName: {
            type: String,
            default: 'btn-name__'
        },
        icon: {
            type: String,
        },
        text: {
            type: String,
            default: 'text__ || icon__FA'
        },
        formModal: {
            type: String,
        },
    }
}
</script>

<style scoped>
/* Estilos opcionales para el componente */
</style>