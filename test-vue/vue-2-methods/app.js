var app = new Vue({
    el: "#app",
    data: {
        msg: "hello Vue",
        name: "琼",
        jobs: "teacher",
    },
    methods: {
        greet: function(time) {
            return "Good " + time + "" + this.name + "!";
        },
    },
});