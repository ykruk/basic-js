module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const turns = 2 ** disksNumber - 1;
    const turnsSecSpeed = turnsSpeed / 3600;
    const seconds = Math.floor(turns / turnsSecSpeed);
    return {
        turns,
        seconds,
    }
}