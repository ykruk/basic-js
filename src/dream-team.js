module.exports = function createDreamTeam(members) {
  if (!(Array.isArray(members))) return false;
  const res = members.map(el => {
    if (typeof(el) === 'string') return el.trim().slice(0, 1).toUpperCase();
    return '';
  }).sort().join('');
  return res.length > 0 ? res : false;
};