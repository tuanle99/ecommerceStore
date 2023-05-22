import { Elements } from "@stripe/react-stripe-js";

import CheckoutPage from "./CheckoutPage";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NAKdQGNeWPtcfPOt6To5MYuakIBKHFwP3tXBW5WgbW9Y7tJvvuVbkaaofBMz4wwvqo0bYSDY4ZEZo6DPI9h86if00yYJ4lfEe"
);

export default function CheckoutWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutPage />
    </Elements>
  );
}
