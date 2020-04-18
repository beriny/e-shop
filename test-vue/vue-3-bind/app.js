var app = new Vue({
    el: "#app",
    data: {
        name: "琼",
        job: "teacher",
        website: "http://www.qiongium.xyz",
        websiteTag: "<a href='http://www.qiongium.xyz'>web dev</a>",
    },
    methods: {
        greet: function() {
            return "hello Vue!";
        }
    }
});


// el: element 需要获取的元素，一定是HTML中的根容器元素
// data: 用于数据的储存，模板的上下文
// methods: 各种方法的定义
// v-bind: 给属性绑定对应值