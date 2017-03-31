// Readonly key
var airtableKey = 'keyFcWwzNgkQUNPBh';

var app = new Vue({
  el: '#app',
  data: {
    message: 'You loaded this page on ' + new Date(),
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  },
  methods: {
    sendTestRequest: () => {
      Vue.http.headers.common['Authorization'] = 'Bearer '.concat(airtableKey);
      Vue.http.get('https://api.airtable.com/v0/appoqs69fhkq2Z5PG/Places').then(response => {
        // get body data
        console.log(response);
        this.someData = response.body;
      }, response => {
        console.log(response);
        // error callback
      });
      alert('Hello ' + this.name + '!');
    }
  }
});