import Vue from 'vue'
import App from './App.vue'

// event bus is used by children of App component, must be declared first
export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})


