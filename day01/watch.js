const _ = require('lodash');

console.log('starting...');

class Vue {
  constructor(props) {
    this.$data = props.data;
    this.$watch = props.watch;
    if (props.data) {
      this.registerReactivity(props.data);
    }
  }

  registerReactivity(obj) {
    const self = this;
    Object.keys(obj).forEach(key => {
      let value = obj[key];
      Object.defineProperty(obj, key, {
        get() {
          return value;
        },
        set(val) {
          const watchFunc = _.get(self.$watch, key, null);
          if (watchFunc) {
            watchFunc(val, value);
          }
          console.log('SET', key);
          value = val;
        },
      });
    });
  }
}

const v = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueJS',
  },
  watch: {
    message(newVal, oldVal) {
      console.log('message changed!!', newVal, oldVal);
    },
  },
});

v.$data.message = 'test';
