// 注册一个自定义的组件
Vue.component('todo-items', {
    props: ['message'],
    template: '<li>{{ message }}</li>'
});
new Vue({
    // state
    el: "#app",
    data: {
        return: {
            message: [],
            info: '',
            list: [],
        },
    },
    methods: {
        handleClick: function() {
            this.list.push(this.info);
            this.info = '';
        },
        clearClick: function() {
            this.list.pop(this.item);
        },
        getName: function() {
            // ref 传递参数
            this.name = this.$refs.age.value;
        },
        getAge: function() {
            this.age = this.$refs.name.value;
        },
    },
    watch: {
        name: function(val, oldVal) {
            console.log(val, oldVal);
        },
        age: function(val, oldVal) {
            console.log(val, oldVal);
        }
    },

});