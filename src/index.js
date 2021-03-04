
exports.min = function min (array) {
   array = array || [];
   if(array[0]!==undefined){
      array.sort((a, b) => a - b )
      return array[0];
   }
   return 0;
}

exports.max = function max (array) {
   array = array || [];
   if(array[0]!==undefined){
      array.sort((a, b) => b - a);
      return array[0];
   }
   return 0;

}

exports.avg = function avg (array) {
  array = array || [];
  if(array[0]!==undefined){
     let sum = array.reduce((r,v) => r+=v);
     return (sum/array.length);
  }
  return 0;
}
