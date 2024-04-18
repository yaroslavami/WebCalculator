the ECMAScript specification requires that 0.1 + 0.2 ≠ 0.3
use toFixed and floating point numbers have slight mis-calculations
console.log((0.1 + 0.2).toFixed(1)); // 0.3
