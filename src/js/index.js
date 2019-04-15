import '../scss/index.scss';
import axios from 'axios';

new Vue({
  el: '#app',
  data: {
    isMenuOpen: false,
  },
  methods: {
    toggleMenu(){
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
});