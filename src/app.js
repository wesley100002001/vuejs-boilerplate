var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date()
  },
  methods: {
    sendTestRequest: () => {
      alert('Hello ' + this.name + '!');
    }
  }
});