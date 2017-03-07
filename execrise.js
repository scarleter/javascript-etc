  var gobal = {};
  (function(gobal){

      gobal.fn = function(n){
          //if(isNaN(parseInt(n))){
          //    return [];
          //}

          if(n === void 0 || isNaN(n)){
              return [];
          }

          var range = [2,32];
          function generateRandom(range, len, obj, arr){
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

              }

          }

          return generateRandom(range, n, {}, []);
      };
  })(gobal);
