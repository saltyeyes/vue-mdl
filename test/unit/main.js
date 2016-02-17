/* global describe */
import Vue from 'vue'
require('material-design-lite/material.js')
require('material-design-lite/material.css')

require('jquery/dist/jquery.min')
require('mocha/mocha')
require('mocha/mocha.css')

import chai from 'chai'
require('chai-jquery/chai-jquery')

import utils from './utils'

if (window.initMochaPhantomJS) {
  window.initMochaPhantomJS()
}
window.mocha.setup({
  ui: 'bdd'
})
window.expect = chai.expect
window.should = chai.should()
window.onload = function () {
  (window.mochaPhantomJS || window.mocha).run()
}

Vue.config.debug = true
var app = new Vue({
  el: '#test',
  data: {
    tests: [
      'none'
      // 'checkbox',
      // 'badge',
      // 'button',
      // 'progress',
      // 'spinner',
      // 'ripple-effect',
      // 'icon-toggle',
      // 'radio',
      // 'slider',
      // 'switch',
      // 'textfield',
      // 'tooltip',
      // 'menu',
      // 'card'
    ],
    current: 0
  },
  computed: {
    currentTest () {
      return this.tests[this.current]
    },
    currentComponent: {
      set (val) {
        var i = this.tests.indexOf(val)
        if (i < 0) {
          throw new Error('Ivalid component: ' + val)
        }
        this.current = i
      },
      get () {
        return 'test-' + this.currentTest
      }
    }
  },
  methods: {
    previous () {
      if (--this.current < 0) {
        this.current = this.tests.length - 1
      }
    },
    next () {
      if (++this.current >= this.tests.length) {
        this.current = 0
      }
    }
  },
  directives: {
    attach: utils.attachDirective
  },
  components: {
    testNone: {
      template: '<p>Choose a valid component</p>'
    }
    // testCheckbox: require('../components/checkbox.vue'),
    // testBadge: require('../components/badge.vue'),
    // testButton: require('../components/button.vue'),
    // testProgress: require('../components/progress.vue'),
    // testSpinner: require('../components/spinner.vue'),
    // testRippleEffect: require('../components/ripple-effect.vue'),
    // testIconToggle: require('../components/icon-toggle.vue'),
    // testRadio: require('../components/radio.vue'),
    // testSlider: require('../components/slider.vue'),
    // testSwitch: require('../components/switch.vue'),
    // testTextfield: require('../components/textfield.vue'),
    // testTooltip: require('../components/tooltip.vue'),
    // testMenu: require('../components/menu.vue'),
    // testCard: require('../components/card.vue')
  }
})

window.app = app
window.Vue = Vue
describe('Vue MDL', function () {
  require('./specs/dummy')
  // require('./specs/checkbox.coffee')
  // require('./specs/badge.coffee')
  // require('./specs/button.coffee')
  // require('./specs/progress.coffee')
  // require('./specs/spinner.coffee')
  // require('./specs/ripple-effect.coffee')
  // require('./specs/icon-toggle.coffee')
  // require('./specs/radio.coffee')
  // require('./specs/slider.coffee')
  // require('./specs/switch.coffee')
  // require('./specs/textfield.coffee')
  // require('./specs/tooltip.coffee')
  // require('./specs/menu.coffee')
  // require('./specs/card.coffee')
  // This must be the last
  // require('./specs/vue-mdl.coffee')
})
