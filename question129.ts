/* Explain how this behaves differently in arrow functions compared to traditional functions.*/

let traditionalVsArrow = {
    value: "Traditional Vs Arrows",
    traditionalFunc: function() {
        console.log("Traditional Function:", this.value);
        
    },
    arrowFunction: () => {
        console.log("Arrow Function:", this.value);
        
    },
    traditionalFnc1: function(){
        console.log("Traditional Function:", this.value);
        
    }
};
traditionalVsArrow.traditionalFunc();
traditionalVsArrow.arrowFunction();
traditionalVsArrow.traditionalFnc1();