# ecommerceStore

Front-end

- react js
- - components
- - router
- - material ui
- - axios
- - redux
- - redux toolkit
- - redux devtools
- - redux thunk
- - error handling (error page)
- - react-toastify
- - stripe (hold credit card info)
    publishable key - identify your account with stripe, allow to create token
    secret key - perform api request to stripe without restriction
- - stripe web hook

Back-end

- dotnet
- - handling exception
- - middleware
- - sort, search, filter
- - pagination

setting up asp.net

- asp.net identity - security
- password hashing : browser -> identity -> database
  jwt tokens

- - pci compliance payment
    don't ever store user credit card on server

stripe site - https://dashboard.stripe.com/test/payments/pi_3NALynGNeWPtcfPO1x5QWxB6

stripe key (exp after 90 days 5/21) - acct_1NAKdQGNeWPtcfPO

stripe cli - stripe listen -f http://localhost:5000/api/payments/webhook -e charge.succeeded
need to run this to check whether the payment received successful
