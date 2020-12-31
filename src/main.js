
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});