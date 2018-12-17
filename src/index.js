import Vue from './vue';

console.log('starting...');

const v = new Vue({
  el: '#app',
  data: {
    message: {
      a: 'baaaa',
    },
    another: 'another',
  },
  watch: {
    another(newVal, old) {
      console.log('another changed!!', newVal, old);
    },
    'message.a': function(newVal, old) {
      console.log('message.a changed!!', newVal, old);
    },
  },
});

v.$data.message.a = 'test';
v.$data.another = 'test2';

// console.log('GET another', v.$data.another);
// v.$data.another = 'swag';
// console.log('GET another 2nd time', v.$data.another);
