<template>
    <b-row class="w-100 m-0 p-0">
        <b-card class="w-100">
            <h1 class="text-center"> Sistema Administrador De {{title}}</h1>
        </b-card>
    </b-row>
</template>

<script>
export default{
    props:{
        title:{
            type:String,
        }
    },
    
}
</script>