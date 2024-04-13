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
import type { GetCardList } from './getCardList';
import type { ApplePayMandate } from './applePayMandate';
/**
 * If the `type` of the payment method is `apple_pay`, this hash contains details about the Apple Pay payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method.
 */
export interface ApplePay {
    /** Credit card information. When providing a card number, you must meet the requirements for PCI compliance. We strongly recommend using Zuora.js instead of interacting with this API directly. */
    card?: GetCardList;
    /** The mandate information for the Credit Card, Credit Card Reference Transaction, ACH, or Bank Transfer payment method. */
    mandate?: ApplePayMandate;
    /** The ID of newly processed payment. Only available in the response of the Create Payment Method API request. */
    payment_id?: string;
    /** A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile. When `token` is used to represent a customer profile, `second_token` is conditionally required for representing the underlying tokenized payment method. */
    token?: string;
}
//# sourceMappingURL=applePay.d.ts.map