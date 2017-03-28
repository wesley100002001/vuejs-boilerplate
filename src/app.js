var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date()
  },
  methods: {
    sendTestRequest: () => {
      Vue.http.get('/someUrl').then(response => {
        // get body data
        this.someData = response.body;
      }, response => {
        console.log(response);
        // error callback
      });
      alert('Hello ' + this.name + '!');
    }
  }
});