import { dw3 } from './dw3.js';

var root = document.body
var appSpace = document.getElementById("appSpace")


var v2mSplash = {
  view: function(vnode) {
    var result = [
                  dw3,
                  
                 ].map(x => m(x, vnode.attrs));
    return(result);
  }
}

m.mount(appSpace, v2mSplash)