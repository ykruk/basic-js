module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!';
  if(typeof date.getMonth !== 'function') throw new Error;
  const checkDate = new Date(date.getFullYear(),date.getMonth(),date.getDate(),date.getHours(),date.getMinutes(),date.getSeconds(),date.getMilliseconds());
  if(date.toString() !== checkDate.toString()) throw new Error;
  const month = date.getMonth();
  if( month >= 2 && month < 5 ) return 'spring';
  if( month >= 5 && month < 8 ) return 'summer';
  if( month >= 7 && month < 11 ) return 'autumn';
  if( month === 11 || month === 0 || month === 1 ) return 'winter';
};
