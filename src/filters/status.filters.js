import Vue from 'vue'

Vue.filter('status', function (value) {
    if (value == 0) return "light-danger";
    return "light-success";
});

Vue.filter('contactMean', function (value) {
    if (value == 'RED SOCIAL') return 'light-danger'
    if (value == 'OTRO') return 'light-primary'
    return 'light-success'
});