import Vue from 'vue'
import App from './App.vue'
import store from './config/store'
import router from './config/router'

import './assets/main.css'
import './config/bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBars, faX, faGear, faSignOut, faHouse } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBars, faX, faGear, faSignOut, faHouse )

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: (h) => h(App)
}).$mount('#app')
