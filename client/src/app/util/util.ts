export function getCookie(key: string) {
  const value =
    document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)")?.pop() || "";
  return value;
}

export function currencyFormat(amount: number) {
  return "$" + (amount / 100).toFixed(2);
}
