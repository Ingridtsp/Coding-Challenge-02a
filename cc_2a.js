    // coding challenge 2a product pricing assistant
    // // variable for the product name.
const productName = "Protein Ice Coffee";

// Declare variables for numeric inputs.
const costPerUnit = 2.50;
const basePrice = 7.50;
const discountRate = 0.10; // 10% discount
const salesTaxRate = 0.07; // 7% sales tax
const fixedMonthlyCosts = 1500.00;

// Pricing & Profit Metrics

// Calculate the discounted price before tax.
const discountedPrice = basePrice * (1 - discountRate);

// Calculate the final price after tax.
const finalPriceWithTax = discountedPrice * (1 + salesTaxRate);

// Calculate the profit per unit.
const profitPerUnit = finalPriceWithTax - costPerUnit;

// Calculate the break-even quantity, rounded up to the nearest whole unit.
// This is the number of units that must be sold to cover the fixed monthly costs.
const breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);

// Determine if the product is profitable on a per-unit basis.
const isProfitablePerUnit = profitPerUnit > 0;

// Print to Console
// Use console.log() to display all the computed metrics.
console.log("--- Product Pricing Assistant ---");
console.log(`Product Name: ${productName}`);
console.log(`Cost per unit: $${costPerUnit.toFixed(2)}`);
console.log(`Base price: $${basePrice.toFixed(2)}`);
console.log(`Discount rate: ${(discountRate * 100).toFixed(0)}%`);
console.log(`Sales tax rate: ${(salesTaxRate * 100).toFixed(0)}%`);
console.log(`Fixed monthly costs: $${fixedMonthlyCosts.toFixed(2)}`);
console.log("----------------------------------");

console.log(`Discounted price (before tax): $${discountedPrice.toFixed(2)}`);
console.log(`Final price (with tax): $${finalPriceWithTax.toFixed(2)}`);
console.log(`Profit per unit: $${profitPerUnit.toFixed(2)}`);
console.log(`Break-even units: ${breakEvenUnits}`);
console.log(`Is profitable per unit: ${isProfitablePerUnit}`);
console.log("----------------------------------"); 