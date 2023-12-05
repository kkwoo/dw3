import { diceware } from './data.js';

var count = 0 // added a variable
var numbers = ""
var nbfxFactory = function() {
  let accum = ""
  let dwkey = ""
  let result = {
    value: function() {
      return({
        accum: accum,
        dwkey: dwkey,
      })
    },
    grow: function(iChar) {      
      dwkey = `${dwkey}${iChar}`
      if (dwkey.length == 5) {
        accum = `${accum} ${diceware[dwkey]}`
        dwkey = ""
        numbers = `${numbers}${iChar} `
      } else {
        numbers = `${numbers}${iChar}`
      }
    }
  }
  return(function() {return(result)})
}
var nbfx = nbfxFactory()

var titleMC = {
  view: function(vnode) {
    var result = m("h1", {class: "title"}, "Diceware")
    return(result)
  }
}

var outputMC = {
  view: function(vnode) {
    var result = m("div", {}, numbers)
    return(result)
  }
}

var output02MC = {
  view: function(vnode) {
    var result = m("div", {}, nbfx().value().accum)
    return(result)
  }
}

var output03MC = {
  view: function(vnode) {
    var tidiedKey = `Current Key: ${nbfx().value().dwkey}`
    var result = m("div", {}, tidiedKey)
    return(result)
  }
}

var dw3 = {
    view: function(vnode) {
        return m("main.container", [
            m(titleMC, vnode.attrs),
            m("button", {
              onclick: function() {
                count++
                let sample = 1 + (Date.now() % 6)
                nbfx().grow(sample)
              }
            }, count + " clicks"),
            m(output03MC, vnode.attrs),
            m(output02MC, vnode.attrs),
            m(outputMC, vnode.attrs),

])
    }
}

export { dw3 };