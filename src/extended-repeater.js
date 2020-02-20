module.exports = function repeater(str, options) {
    let output = '';
    let separator = options.hasOwnProperty('separator') ? options.separator : '+';
    let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
    if(!options.repeatTimes) {
      let addition = options.hasOwnProperty('addition') ? options.addition : '';
        for (let j = 2; j <= options.additionRepeatTimes; j++) {
          addition += additionSeparator + options.addition;
        }
      output += str + addition;
      return output;
    } else {
      for (let i = 1; i <= options.repeatTimes; i++) {
        let addition = options.hasOwnProperty('addition') ? options.addition : '';
        for (let j = 2; j <= options.additionRepeatTimes; j++) {
            addition += additionSeparator + options.addition;
        }
        output += str + addition + separator;
      }
      return output.slice(0, -(separator.length));
    }
  };
  