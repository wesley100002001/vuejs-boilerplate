// Readonly key
var airtableKey = 'keyFcWwzNgkQUNPBh';
const maxSize = 3;

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
      Vue.http.get('https://api.airtable.com/v0/apppL3V4r4Tqf0nhR/Events').then(response => {
        // get body data
        console.log(response);
        this.someData = response.body;
      }, response => {
        console.log(response);
        // error callback
      });
      alert('Hello ' + this.name + '!');
    },
    getEvents: () => {
      Vue.http.headers.common['Authorization'] = 'Bearer '.concat(airtableKey);
      var reqUrl = 'https://api.airtable.com/v0/apppL3V4r4Tqf0nhR/Events?maxRecords='.concat(maxSize).concat('&view=Main');
      Vue.http.get(reqUrl).then(response => {
        // get body data
        console.log(response);
        this.someData = response.body;
      }, response => {
        console.log(response);
        // error callback
      });
    }
  }
});