import Vue from 'vue';
import App from './App.vue';
import Score from "@/services/score";

Vue.config.productionTip = false;

const score = Vue.observable(Score);
Vue.prototype.$score = score;

new Vue({
  render: h => h(App)
}).$mount('#app')
