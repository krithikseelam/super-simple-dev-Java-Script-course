export function formatCurrency(priceCents){
  return (Math.round(priceCents)/100).toFixed(2);
}

export default formatCurrency; // this is default export which can only be used once per file