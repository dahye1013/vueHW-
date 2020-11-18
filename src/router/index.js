// 라우터 사용하기
// 1.상단에 컴포넌트를 import해온다.
// 2. const routes=[] 에 객체 정보를 기입한다.
import Vue from 'vue'
import VueRouter from 'vue-router' 
import Home from '../views/Home.vue'
import LifeCycle from '../views/LifeCycle.vue' 
import practice2 from '../views/practice2.vue'

Vue.use(VueRouter) //vue가 vue router 사용한다고 설정

//현재 페이지 object가 2개 
const routes = [
  //home페이지 오브젝트
  { 
    path: '/', //url 주소
    name: 'Home', //name은 겹치면 안됨
    component: Home //상단에서 컴포넌트를 import함
  },
  //practice페이지 오브젝트
  {
    path: '/practice1',
    name: 'practice1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/practice1.vue')
                        //???임포트하는 다른 방법인거 같은데 아직 잘 모르겠음. 웹팩 포함< 과장님께 여쭤보기
  },
  {
    path: '/practice2',
    name: 'practice2',
    component:practice2
  },
  //vue lifeCycle 페이지 오브젝트
  {
    path: '/LifeCycle',
    name: 'LifeCycle',
    component: LifeCycle
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
