import Vue from 'vue'
import Vonic from 'vonic/src/index.js'

// Page Components
import Index from './components/Index.vue'
import Notice from './components/notice.vue'
import Home from './components/home.vue'

// Routes
const routes = [
  { 
    path: '/',
    component: Index, 
    children: [
        {path: 'home', component: Home},
        {path: 'notice', component: Notice}
    ]
}
]

Vue.use(Vonic.app, {
  routes: routes
})
