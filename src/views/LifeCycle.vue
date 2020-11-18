// 목요일까지 구현해야 할 HW
//  내용 : (1)vue life cycle을 보여줄 수 있는 것 구현하기.
//          (2)vue life cycle의 돌아가는 본인의 가정과 결과를 주석으로 남기기.
//          (3)정의와 증명을 목요일(오후1시)에 코드리뷰
//  필수 조건 : vue , watch. vue router,  event bus
//  옵션 : vuex

<template> <!-- template : html코드 -->
  <div class="lifeCycle">
    <h2>{{title}}</h2>
    <button @click="clickButton">{{buttonStatus}}</button>
    <div v-show="answer">
      <button @click="updateTitle">Change Name</button>
      <img :src="lifeCycleImg">
    </div>
  </div>
</template>


<script>
// 옵션 : 데이터, 메소드, 워치 등등
export default {
    data(){
      return {
        answer : false, //라이프서클 설명 v-show의 default를 false로 가려둔다.
        lifeCycleImg : 'https://kr.vuejs.org/images/lifecycle.png',
        title : '여기에서 Vue Life Cycle의 구조를 확인해보세요!' ,
        buttonStatus : 'Yes!',
        name : 'VueVue',
      }
    },
    //watch-------------------------------------
    watch:{ //watch는 인자값으로 이전,이후 값을 가진다.
            //감지하다가 변화를 감지하면 액션을 취한다.
      //title을 watch하다가 변화를 감지.
      title(newVal,oldVal){
        console.log('-------Watch 감시합니다 : 새로운 title은 ',newVal,'이고, 이전 title은 ',oldVal,'였군요!');
      },
      answer(newVal,oldVal){//error -- 'newVal','oldVal' is defined but never used (안사용해서 에러남...;;)
        console.log(newVal,oldVal);
        if(newVal == false){ //answer이 false면 안보겠다는 뜻
            this.buttonStatus = 'Yes!'; 
        }
      }

    },
    //methods-----------------------------------------------
    methods:{
      //lifeCycle보여주는 버튼 메소드
      clickButton(){
        this.answer= !this.answer; //v-show를 true로 전환하여 보여준다.
        this.buttonStatus = 'No!'
      },
      updateTitle(){
        this.name = 'Updated VueVue';
        this.title = 'Enjoy Vue Life Cycle!!';
      }
    },

    //lifeCycle function------------------------------------
    beforeCreate(){//beforeCreate에서는 Data에 접근이 안되서 name이 안나옴 
      console.log('beforeCreate',this.title);
      //가정 : 
      //결과 : beforeCreate undefined
    },
    created(){
      console.log(this);
      console.log('created',this.title);
      //가정 : instance가 생성되었으므로 data에 접근 할 수 있어서 name이 출력된다.
      //결과 : created DH
    },  
    beforeMount(){
      alert('beforeMount');
//        console.log('beforeMount');
      //가정 : 
      //결과 : 렌더링 되기 전이라서 <div id="app"> 내부가 바뀌지 않는다.
    },
    mounted(){
      alert('mounted');
//        console.log('mounted');
      //결과 : 렌더링 되기 전이라서 <div id="app"> 내부가 바뀌었다.
      //> 여기서부터 DOM에 접근 할 수 있다. 
    },
    beforeUpdate(){
      alert('beforeUpdate');
      console.log('beforeUpdate');
      //가장 : updateTitle button을 누르고, 데이터가 바뀌기 전에 alert가 뜬다.
      //결과 : beforeUpdate는 행위를 실행 했을 때, 코드가 바뀌기 직전이다.
      //>element를 확인해보면 data가 바뀌기 전임을 확인 할 수 있다.
//        console.log('beforeUpdate',this.title);
    },
    updated(){
//      alert('update');
      //결고 : updated는 행위를 실행하여 코드 
        console.log('updated');      
    },
    beforeDestroy(){
      //데이터, 인스턴스, 이벤트리스너를 삭제하는 용도
      alert('beforeDestroy');
    },
    destroyed(){
      //나갈때 메모리 누수를 방지하기 위해서 이벤트리스너, 데이터 초기화 등을 하면 된다.
      alert('destroyed');
    }

}
</script>

<style scoped> 
/*css 코드 : scope를 넣어야 해당 template에만 css적용, 아니면 전역됨  */
h1{
    font-size:20px;
}
</style>