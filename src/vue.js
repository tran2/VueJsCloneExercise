import _ from 'lodash';

console.log('starting...');

export default class Vue {
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
      console.log('key', key);
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

      // dealing with nested objects
      if (_.isObject(obj[key])) {
        this.registerReactivity(obj[key]);
      }
    });
  }
}
