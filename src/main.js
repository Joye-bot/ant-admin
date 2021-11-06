import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Button, Layout, Menu, Icon, Avatar, Dropdown } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less'
Vue.use(Button)
Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Avatar)
Vue.use(Dropdown)

Vue.config.productionTip = false
Vue.config.devtools = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
