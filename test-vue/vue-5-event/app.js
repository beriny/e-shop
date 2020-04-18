var app = new Vue({
    el: "#app",
    data: {
        name: "qiong",
        x: 0,
        y: 0,
    },
    methods: {
        updateXY: function(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
            return console.log(this.x, this.y);
        },
        // 阻止事件冒泡
        stopMoving: function(event) {
            event.stopPropagation();
        },
        alert: function() {
            return alert("欢迎进入！将转向阿里");
        },
    },
});