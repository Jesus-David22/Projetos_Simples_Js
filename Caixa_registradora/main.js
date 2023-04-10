function checkCashRegister(price, cash, cid) {
    const CURRENCY_UNITS = [
      { name: "ONE HUNDRED", value: 100 },
      { name: "TWENTY", value: 20 },
      { name: "TEN", value: 10 },
      { name: "FIVE", value: 5 },
      { name: "ONE", value: 1 },
      { name: "QUARTER", value: 0.25 },
      { name: "DIME", value: 0.1 },
      { name: "NICKEL", value: 0.05 },
      { name: "PENNY", value: 0.01 },
    ];
  
    let changeDue = cash - price;
  
    let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);
  
    if (totalCid < changeDue) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    if (totalCid === changeDue) {
      return { status: "CLOSED", change: cid };
    }
  
    let change = [];
  
    cid = cid.reverse();
  
    for (let i = 0; i < cid.length; i++) {
      let currencyUnit = CURRENCY_UNITS[i];
      let cidAmount = cid[i][1];
      let unitAmount = 0;
  
      while (changeDue >= currencyUnit.value && cidAmount > 0) {
        unitAmount += currencyUnit.value;
        changeDue -= currencyUnit.value;
        cidAmount -= currencyUnit.value;
        changeDue = Math.round(changeDue * 100) / 100;
      }
  
      if (unitAmount > 0) {
        change.push([currencyUnit.name, unitAmount]);
      }
    }
  
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  
    return { status: "OPEN", change: change };
  }