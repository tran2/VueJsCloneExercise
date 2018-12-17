Building VueJS Clone
====================

## Day 1

Use day01/starter.js as a template to start these problems

###Build reactivity using Object.defineProperty set/get
Based on this fiddle https://jsfiddle.net/7spkao0y/1/

Initially, it would render message as `Hello VueJS`, however, when we add this
line

```
v.message = 'test';
```

It now renders 'test' .. We want to implement this reactivity but without the
DOM.
Implement a class Vue so that by executing this code will print in the console

```
var v = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueJS'
  }
});
v.message = 'test'; // log: message changed to test!
```

Hint: Vue uses Object.defineProperty with get and set https://vuejs.org/v2/guide/reactivity.html

### Build watch
https://jsfiddle.net/wbge5xh2/

For this, we added the watch. Add on from the previous step so that dev console
will log 'message changed!! test Hello VueJS'

```
var v = new Vue({
  el: '#app',
  data: {
    message: 'Hello VueJS'
  },
  watch: {
    message(newVal, oldVal) {
      console.log('message changed!!', newVal, oldVal);
    }
  }
})
v.message = 'test';
```
