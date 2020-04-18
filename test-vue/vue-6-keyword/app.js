var app = new Vue({
    el: "#app",
    data: {
        name: "qiong",
        age: 24,
    },
    methods: {
        logName: function() {
            console.log("正在输入姓名");
        },
        logAge: function() {
            console.log("正在输入年龄");
        }
    }
});