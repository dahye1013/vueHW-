
<template> <!-- template : html코드 -->
  <div class="about">
    <h2>여기서는 인스턴스, 바인드 연습을 해볼거에요!</h2>
    <p>{{name}}의 연습 페이지입니다.</p> 
    <InputField :name="name" @update-Name="updateName"></InputField>
  <form action="">
    <br>
    <button>submit</button>
  </form>

  </div>
</template>


<script>// 옵션 : 데이터, 메소드, 워치 등등
import InputField from '../components/inputField';
export default {
  components:{
    InputField//inputField 컴포넌트 사용
  }, 
      data(){
        return{
            name: ''
             
        }
    },
    methods:{
      updateName(name){
        this.name = name;
      }
    }
}
</script>

<style scoped> 
</style>