function produceDrivingRange(blockRange) {
  return function(start, end) {
    let tripStart = parseInt(start);
    let tripEnd = parseInt(end);
    let distance = Math.abs(tripEnd - tripStart)
    let range = blockRange - distance;

    if (range > 0) {
      return (`within range by ${range}`);
    } else {
      return (`${Math.abs(range)} blocks out of range`);
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  }
}
