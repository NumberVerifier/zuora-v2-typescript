/**
 * Generated by orval v6.27.1 🍺
 * Do not edit manually.
 * Quickstart API Reference
 * Zuora Quickstart API is recommended for new customers and integrators, allowing new integrators to swiftly integrate with Zuora. It supports essential business use cases. 

To use the Quickstart API, you must have the following features enabled on your tenant:
 
* [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization) 
* [Invoice Settlement](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/Invoice_Settlement)

To find the latest changes made to the Zuora Quickstart API, check the [Quickstart API Changelog](https://developer.zuora.com/quickstart-api/changelog/2022q4-changelog/). 
We recommend that you subscribe to [Developers Community](https://community.zuora.com/communities/community-home?communitykey=e2a932b4-50c4-4019-a3e8-362e38714df3) to get notifications when a new version is released.


 * OpenAPI spec version: 2024-01-24
 */
import type { ApplePayCreateCustomerToken } from './applePayCreateCustomerToken';
import type { Mandate } from './mandate';

/**
 * If the `type` of the payment method is `apple_pay`, this hash contains details about the Apple Pay payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method.
 */
export interface ApplePayCreate {
  /** A boolean flag to control whether a payment should be processed       after creating payment method. The payment amount will be equivalent to       the amount the merchant supplied in the ApplePay session. Default is false.
      
If this field is set to `true`, you must specify the `gateway_id`       field with the payment gateway instance name.

If this field is set       to `false`:
  - The default payment gateway of your Zuora customer account       will be used no matter whether a payment gateway instance is specified       in the `gateway_id` field. 
  - You must select the **Verify new       credit card** check box on the gateway instance settings page. Otherwise,       the cryptogram will not be sent to the gateway.
  - A separate subscribe       or payment API call is required after this payment method creation call.
 */
  collect_payment?: boolean;
  /** The complete JSON Object representing the encrypted payment token payload returned in the response from the Apple Pay session. */
  customer_token: ApplePayCreateCustomerToken;
  /** The Merchant ID that was configured for use with Apple Pay in the Apple iOS Developer Center. */
  id?: string;
  /** The id of invoice this payment will apply to.      Note: When `collect_payment` is true, this field is required.      Only one invoice can be paid; for scenarios where you want to pay for multiple invoices, set collect_payment to false and use [Create Payment](#operation/createPayment) API separately. */
  invoice_id?: string;
  mandate?: Mandate;
}
