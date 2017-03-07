
var gobal = {};
(function(gobal){
    //自建fn函數，輸入n得出數組為n的數組，該數組的值為2-32
    //構建過程中發現了一下問題：function串錯，多次修改之後range名字換了不知道，遞歸返回不了數據是因為自己沒有在所有分支上加上return，
    //同時後來發現當n 大於 range的範圍的時候，會報錯，所以要判斷n應該小於等於range[1]-range[0]
    //修改n判斷，加入n為undefined的情況
    gobal.fn = function(n){
        //if(isNaN(parseInt(n))){
        //    return [];
        //}

        if(n === void 0 || isNaN(n)){
            return [];
        }

        var range = [2,32];
        function generateRandom(range, len, obj, arr){
            if(len>(range[1] - range[0])){//n大於range範圍
                return [];
            } 

            if(arr.length >= len){
                return arr;
            }else{
                var r = Math.random();
                r = Math.round(r*(range[1] - range[0])) + range[0];
                if(!obj[r]){
                    obj[r] = true;
                    arr.push(r);
                }
                return generateRandom(range, len, obj, arr); //一開始沒有加上return，所有call generateRandom 的時候返回undefined
            }
        }

        return generateRandom(range, n, {}, []);
    };
})(gobal);
