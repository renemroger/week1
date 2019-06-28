const calculateSalesTax = function(salesData, taxRates) {
  const result = {};
  for (let i = 0; i < salesData.length; i++) {
    if (result[salesData[i].name]) {

      result[salesData[i].name].totalSales = salesData[i].sales.reduce(function(total, sale) {
        return total + sale;
      }, result[salesData[i].name].totalSales);
    } else {

      result[salesData[i].name] = {
        totalSales: salesData[i].sales.reduce(function(total, sale) {
          return total + sale;
        }, 0),
        totalTaxes: 0
      };
    }
  }
  return result;
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const result = calculateSalesTax(companySalesData, salesTaxRates);

console.log(result);