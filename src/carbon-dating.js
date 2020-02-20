const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || typeof(sampleActivity) !== 'string' || !+parseFloat(sampleActivity) || sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY ) return false;
  const a = MODERN_ACTIVITY / parseFloat(sampleActivity);
  const rate = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(a) / rate);
};
