<template> <!-- template : html코드 -->
  <div class="about">
    <h2>여기서는 인스턴스, 바인드 연습을 해볼거에요!</h2>
    <p>{{name}}의 연습 페이지입니다.</p>
    <OtherVue/> 
    <!--타이틀을 정하지 않아서 default-->
  </div>
</template>


<script>// 옵션 : 데이터, 메소드, 워치 등등
import OtherVue from '../components/otherVue.vue';

export default {

  components:{
    OtherVue
  }, 
      data(){
        return{
            name: 'Dahye Shin'
             
        }
    }
}
</script>

<style scoped> 
</style>