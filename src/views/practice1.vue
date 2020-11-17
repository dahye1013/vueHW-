<template> <!-- template : html코드 -->
  <div class="about">
    <h2>여기서는 인스턴스, 바인드 연습을 해볼거에요!</h2>
    <p>{{name}}의 연습 페이지입니다.</p>

    <!-- otherVue에서 보낸 props를 사용하여 title 지정 -->
    <OtherVue title="Practice1" name="dahye"/>
    <!-- 컴포넌트를 삽입하여 중복되는 부분을 쉽게 재사용 -->
    <!-- error : 부모 컴포넌트에서 선언한 인자와 중복된 것을 선언하여 사용하면 에러나는 것 같음... <***정확하게 다시 확인해보기-->
    <OtherVue/> 
    <!--타이틀을 정하지 않아서 default-->
    
  <form action="">
    <label for="">Name</label>
    <input type="text">
  </form>
  
  </div>
</template>


<script>// 옵션 : 데이터, 메소드, 워치 등등
import OtherVue from '../components/otherVue.vue';

//data 는 반드시 함수여야합니다.<???이해못했음 https://kr.vuejs.org/v2/guide/components.html
export default {
  //otherVue라는 컴포넌트를 가져와서 사용한다.
  components:{
    OtherVue
  }, //여기에 컴포넌트를 명시만하고 사용하지 않으면 error 발생 
     //error  The "OtherVue" component has been registered but not used

     //컴포넌트로 data 사용시에 data를 오브젝트로 선언하여 error 
     //>동일한 컴포넌트가 여러번 사용되어도 동일한 객체를 가르키는 것이 아니라 함수가 호출 될때마다 만들어진 객체가 리턴되게한다
     //>서로 다른 객체를 참조 할 수 있기 때문이다. //?? 헷갈림 과장님께 여쭤보자
     //참고할 링크 https://velog.io/@bang3957/vueData
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