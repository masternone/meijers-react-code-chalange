// If this was a production application I would like to look for a library for handling currency
export const currencyToNumber = (currency) => Number(currency.replace(/[^0-9-]+/g, ''));
export const numberToCurrency = (number) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(number);
};
