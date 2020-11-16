<template>
  <div id="app">
    <div id="nav">
      <!--a 태그 대신 router-link사용, 랜더링되면 a태그로 나옴 -->
      <router-link to="/">Home</router-link> |
      <router-link to="/practice1">practice1</router-link> |
      <router-link to="/practice2">practice2</router-link> |
      <router-link to="/LifeCycle">Vue Life Cycle</router-link>
    </div>
    <router-view/> 
    <!-- 
    (1)router link를 클릭
    (2)App.vue의 routes에서 해당하는 path가 가지고 있는 컴포넌트 부분을 가져온다
    (3)router view 부분에 뿌린다 
    => 즉, 페이지는 바뀌지만 로딩을 새로 하지 않고 <div id="app">부분만 컴포넌트가 바뀐다.
    -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
