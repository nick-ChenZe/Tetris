/**
 * Created by Administrator on 2015/11/1.
 */
Array.prototype.indexArray2D = function (arr) {
        var that = this;
        var n, m,i= arr.length,isEqual;
        for(n=0;n<that.length;n++){
            //console.log(that.length);
            if(arr[0] == that[n][0]){
                if(arr.length == that[n].length){
                    for(m=0;m<i;m++){
                        if(arr[m] == that[n][m]){
                            if(m+1 == i){
                                isEqual = 1;
                            }
                        }else{
                            break;
                        }
                    }
                }
            }
        }
    isEqual = isEqual || 0;
    return isEqual;
};
Array.prototype.push2D = function(arr){
        var n,len = arr.length,that = this;
        for(n= 0;n<len;n++){
            that.push(arr[n]);
        }
};
var addFunction = function (obj,func) {
    var n,len = func.length;
    for(n =0;n<len;n++){
        obj.prototype[func] = function(){};
    }
};
var whichKeyCode = function(keyCode){
    switch(keyCode){
        case(38):_action = "up";break;
        case(40):_action = "down";break;
        case(37):_action = "left";break;
        case(39):_action = "right";break;
    }
    return _action;
};
var min = function (arr,start,space) {
    var min = arr[start], x,len = arr.length;
    for(x = start; x<len; x+=space){
        if(min > arr[x]){
            min = arr[x];
        }
    }
    return min;
};

var max = function (arr,start,space) {
    var max = arr[start], x,len = arr.length;
    for(x = start; x<len; x+=space){
        if(max < arr[x]){
            max = arr[x];
        }
    }
    return max;
};
