// ***$emit****

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
            //자식에서 this.$emit(신호,데이터)를 보내고,
            //부모에서 @신호="실행함수"을 통해 실행 함수를 지정한다.
        },
        sendToPractice2(){
            this.$emit('msgForPractice2','msg - 저는 인풋필드 컴포넌트(자식)입니다.');
        }
    },
    created(){
        this.sendToPractice2();
//        console.log('p2 created sendToPractice2 ......');
    }
}



</script>