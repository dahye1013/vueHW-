import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({ //뷰 인스턴스를 생성할 때, router와 Vuex(store)를 사용하겠다
  router,
  store,
  render: h => h(App) //render function을 이용하여 app을 넣는다. (app.vue가) 
}).$mount('#app') //app아이디 태그안으로 삽입된다. (html에 삽입)
