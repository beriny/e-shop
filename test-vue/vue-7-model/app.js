new Vue({
    el: "#app",
    data: {
        msg: "hello welcome to Vue.js",
        name: "",
        age: "",
    },
    methods: {
        logName: function() {
            console.log("请输入姓名");
            // console.log(this.$refs.name.value);
            this.name = this.$refs.name.value;
        },
        logAge: function() {
            console.log("请输入年龄");
            // console.log(this.$refs.age.value);
            this.age = this.$refs.age.value;
        },
    },
});