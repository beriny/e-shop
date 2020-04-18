// @ts-ignore
var app = new Vue({
    el: "#app",
    data: {
        todo: "",
        todos: [],
        name: "qiong",
        age: 23,

    },
    methods: {
        add: function() {
            // @ts-ignore
            this.age++;
        },
        get: function() {
            fetch("http://jsonplacehodler.typeapi.com/todos")
                .then(function(res) {
                    console.log(res);
                });
        },

    },
    mounts: {
        alert: function() {
            // @ts-ignore
            alert("hello" + "!/n");
        },
    },

});