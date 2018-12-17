const _ = require('lodash');

class Vue {
  constructor(props) {
    this.$data = props.data;
    this.$watch = props.watch;
    if (props.data) {
      this.registerReactivity(props.data);
    }
  }

  registerReactivity(obj) {
    Object.keys(obj).forEach(key => {
      console.log('key', key);
      let value = obj[key];
      Object.defineProperty(obj, key, {
        get() {
          return value;
        },
        set(val) {
          console.log(`${key} changed from ${value} to ${val}`);
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
});

v.$data.message = 'New Value';
