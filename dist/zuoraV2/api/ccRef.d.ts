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
import type { CcRefCardProperty } from './ccRefCardProperty';
import type { CcRefMandateProperty } from './ccRefMandateProperty';
/**
 * If the `type` of the payment method is `cc_ref`, this hash contains details about the Credit Card Reference Transactions payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method.
 */
export interface CcRef {
    /** */
    card?: CcRefCardProperty;
    /** The mandate information for the Credit Card, Credit Card Reference Transaction, ACH, or Bank Transfer payment method. */
    mandate?: CcRefMandateProperty;
    /** A gateway unique identifier that replaces sensitive payment method data. This field is conditionally required only when `token` is being used to represent a gateway customer profile. */
    second_token?: string;
    /** A gateway unique identifier that replaces sensitive payment method data or represents a gateway's unique customer profile. When `token` is used to represent a customer profile, `second_token` is conditionally required for representing the underlying tokenized payment method. */
    token: string;
}
//# sourceMappingURL=ccRef.d.ts.map