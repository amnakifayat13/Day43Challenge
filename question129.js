/* Explain how this behaves differently in arrow functions compared to traditional functions.*/
var traditionalVsArrow = {
    value: "Traditional Vs Arrows",
    traditionalFunc: function () {
        console.log("Traditional Function:", this.value);
    },
    // arrowFunction: () => {
    //     console.log("Arrow Function:", this.value);
    // },
    traditionalFnc1: function () {
        console.log("....", this.value);
    }
};
traditionalVsArrow.traditionalFunc();
//traditionalVsArrow.arrowFunction();
traditionalVsArrow.traditionalFnc1();
