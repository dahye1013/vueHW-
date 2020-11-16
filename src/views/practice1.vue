<template> <!-- template : html코드 -->
  <div class="about">
    <h2>여기서는 인스턴스, 바인드 연습을 해볼거에요!</h2>
    <p>{{name}}의 연습 페이지입니다.</p>
    <OtherVue title="Practice1" name="dahye"/>
    <!-- otherVue에서 보낸 props를 사용하여 title 지정 -->
    <!-- 컴포넌트를 삽입하여 중복되는 부분을 쉽게 재사용 -->
    <!-- error : 부모 컴포넌트에서 선언한 인자와 중복된 것을 선언하여 사용하면 에러나는 것 같음... <***정확하게 다시 확인해보기-->

  <form action="">
    <label for="">Name</label>
    <input type="text">
  </form>
  
  </div>
</template>


<script>// 옵션 : 데이터, 메소드, 워치 등등
import OtherVue from '../components/otherVue.vue';

export default {

  components:{
    OtherVue
  }, //여기에 컴포넌트를 명시만하고 사용하지 않으면 error 발생 
     //error  The "OtherVue" component has been registered but not used
    data(){
        return{
            name: 'Dahye Shin'
             
        }
    }
}
</script>

<style scoped> 
/*css 코드 : scope를 넣어야 해당 template에만 css적용, 아니면 전역됨  */
h1{
    color:green;
}
</style>