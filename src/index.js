console.log('starting...');

class Vue {
  constructor(props) {
    this.$data = props.data;
    if (props.data) {
      const { data } = props;
      console.log('props.data', props.data);
      Object.keys(data).forEach(key => {
        let value = data[key];
        Object.defineProperty(this.$data, key, {
          get() {
            return value;
          },
          set(val) {
            const old = value;
            console.log('SET', key);
            value = val;
            if (props.watch[key]) {
              props.watch[key](val, old);
            }
          },
        });
      });
    }
  }
}

const v = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    another: 'another',
  },
  watch: {
    message(newVal, old) {
      console.log('message changed!!', newVal, old);
    },
  },
});
console.log('GET message', v.$data.message);
v.$data.message = 'test';
console.log('GET message 2nd time', v.$data.message);

console.log('GET another', v.$data.another);
v.$data.another = 'swag';
console.log('GET another 2nd time', v.$data.another);
