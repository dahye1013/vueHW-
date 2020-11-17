//practice1, practice2에 사용되는 component

<template>
    <div>
        <h1>{{title}}</h1>
        <p>{{name}}</p>
        <button @click="updateName">changeName</button>
    </div>    
    
</template>

<script> 
export default {
    //props를 통해서 자식 컴포넌트에 데이터를 보낸다. 
    props:{
        title:{
            type: String, //string이 아닌 타입은 받지 않겠다라고 세팅
            required: false, //true 항상 보내줘야하는 조건 -> 안보내면 에러
            default:'default title',
        },
        name1:{
            type:String,
            default:'default DH'
        }
    }, //About.vue에 보낼것
    data(){
        return{
            name: 'DH shin',
        }
    }, //콤마에 주의하자...
    methods: {
        updateName(){
            this.name = 'Dahye Shin updated';
        }
    }
}
</script>

<style scoped>

</style>