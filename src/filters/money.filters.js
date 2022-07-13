import Vue from 'vue'

Vue.filter('formatPen', function (value) {
    return "S/. " + parseFloat(value).toFixed(2);
})