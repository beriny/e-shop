var app = new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        age: 20,
    },
    methods: {
        // addToA: () => {
        //     console.log("Add to A");
        //     return this.a + this.age;
        // },
        // addToB: () => {
        //     console.log("Add to B");
        //     return this.b + this.age;
        // },
    },
    computed: {
        // 这里不能使用箭头函数，this的指向是全局变量
        addToA: function() {
            console.log("Add to A");
            return this.a + this.age;
        },
        addToB: function() {
            console.log("Add to B");
            return this.b + this.age;
        },
    }

});