module.exports = class DepthCalculator {
    calculateDepth(arr, len) {
        if (!len) len = 1;
        let subLen = len;
        let maxLen = 1;
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
            if(Array.isArray(element)) {
                subLen = this.calculateDepth(element, len + 1);
                if(subLen > maxLen) maxLen = subLen;
            }
        }
        if(subLen > maxLen) maxLen = subLen;
        return maxLen;
    }
};
 