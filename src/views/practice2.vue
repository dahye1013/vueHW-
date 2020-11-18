//emit연습
//전제 : inputField가 자식, practice가 부모

<template> <!-- template : html코드 -->
  <div class="about">
    <h2>여기서는 emit을 연습해볼거에요!</h2>
    <p>{{name}}의 연습 페이지입니다.</p> 

    <!-- 자식컴포넌트: 를 기입하고 , @신호="실행함수"을 통해 실행 함수를 지정한다. -->
    <InputField :name="name" @update-Name="updateName" 
                 @msgForPractice2="setChildMsg">
                </InputField>

  <form action="">
    <br>
    <button>submit</button>
  </form>

  </div>
</template>


<script>// 옵션 : 데이터, 메소드, 워치 등등
import InputField from '../components/inputField';
import EventBus from '../EventBus';

//import {EventBus} from '../EventBus'; 
//error  -- 'EventBus' is defined but never used 이벤트버스 사용안하면 뜨는 에러!


export default {
  components:{
    InputField//inputField 컴포넌트 사용
  }, 
      data(){
        return{
            name: '',
            message: '',
//            bus:'practice2Bus'
            bus: { id:2, name:'practice2Bus', color:'red'}
        }
    },
    methods:{
      //자식이 보낸 신호를 매개변수에 두고, 실행함수를 여기에 정의하자.
      updateName(name){
        this.name = name;
      },
      setChildMsg(msgForPractice2){
        this.msgForPractice2 = msgForPractice2;
      }
    },
    created(){
      //this.$emit(msgForPractice2);     //자식에서 부모로 보내는 emit

      //이벤트 걸기
      EventBus.$on('eventbusMsg', (data) => { //이 파라미터의 data는 emit시에 기입되는 것이 default이고, 여기서 변경 할 수 있다.
          console.log('[practice2]에서 보낸 이벤트버스  ', data);
      })
      //이벤트 걸기
      EventBus.$on('addBus',(busses)=>{ //busses 리스트를 받아서 다른 버스를 넣을 것이다.
        busses.push(this.bus);
        console.log(busses);
      });
    },
    mounted(){
            console.log('[현재위치 p2 mounting] ',this.msgForPractice2,' 자식이 보낸 메세지를 제대로 받음!');
    }
}


  //       EventBus.$emit('message','hello, I am event bus from p2');  
    //-----------------이벤트 버스 emit하기-----------------
    // error - Cannot read property '$emit' of undefined" found in -- emit 용법을 제대로 완성하지 못해서 나왔음.
    // error - Cannot read property '$on' of undefined" found in -- on 용법을 제대로 완성 안해서




</script>

<style scoped> 
</style>