// 
<template>
    <div>
        <label for="">Name</label>
        <input 
            type="text" 
            :value="name" 
            style="padding:30px; border:2px solid green"
            @input="updateName"
            >
           <!-- @input -> 유저가 input을 사용할때, 작동하는 이벤트 -->

    </div>
</template>

<script>
export default {
    //name이라는 props를 부모에게서 가져온다.
    props:{
        name:{
            type:String,
            required:true
        }
    },
    methods:{
        updateName(e){ //e , event가 일어날때마다 발생하는 것 확인
            console.log(e.target.value);
            this.$emit('update-Name',e.target.value);
            //$emit으로 부모 컴포넌트에 value를 올릴 수 있다. (이벤트이름, 올릴 데이터)
        }
    }
}
</script>