<template> <!-- template : html코드 -->
  <div class="lifeCycle">
    <h1>This is an Vue LifeCycle page</h1>
    <h2>여기에는 Vue의 라이프 사이클을 만들거에요!</h2>
  </div>
</template>


<script>
// 옵션 : 데이터, 메소드, 워치 등등
export default {
    data(){
        return{
            name: 'Dahye'
        }
    }
}
</script>

<style scoped> 
/*css 코드 : scope를 넣어야 해당 template에만 css적용, 아니면 전역됨  */
h1{
    font-size:20px;
}
</style>