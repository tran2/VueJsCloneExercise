// using require syntax here so we can try it out using node since we aren't
// manipulating DOM just yet
const _ = require('lodash');

const v = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueJS',
  },
});

v.$data.message = 'New Value';
