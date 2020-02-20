module.exports = function transform(arr) {
    if(!Array.isArray(arr)) throw new Error;
    return arr.reduce((acc, el, i, array) => {
        switch (el) {
            case '--discard-next':
              break;
            
            case '--discard-prev':
              if(acc.length > 0) acc.pop();
              break;
  
            case '--double-next':
              if(i + 1 < array.length) acc.push(array[i + 1]) ;
              break;
            
            case '--double-prev':
              if(i > 0) acc.push(array[i - 1]);
              break;
          
            default:
              if(i > 0 && array[i - 1] === '--discard-next') break;
              acc.push(el);
              break;
          }
      return acc;
    }, []);
};
