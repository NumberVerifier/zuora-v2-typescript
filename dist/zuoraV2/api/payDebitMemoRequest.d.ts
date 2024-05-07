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
import type { CustomFields } from './customFields';
import type { PayDebitMemoRequestGatewayOptions } from './payDebitMemoRequestGatewayOptions';
export interface PayDebitMemoRequest {
    /** Identifier of the account that owns the debit memo. */
    account_id?: string;
    /** Human-readable identifier of the account that owns the debit memo. */
    account_number?: string;
    /** The amount of the payment. */
    amount?: number;
    /** Identifier of the authorization transaction from the payment gateway. */
    authorization_id?: string;
    /** An active account in your Zuora Chart of Accounts. */
    bank_account_account?: string;
    /** 3-letter ISO 4217 currency code. This field is available only if you have the [Multiple Currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies) feature enabled and are creating a debit memo from a charge. */
    currency: string;
    custom_fields?: CustomFields;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** If true, indicates that this payment is not handled by Zuora. */
    external?: boolean;
    /** Identifier of the payment gateway that Zuora will use to authorize this payment. */
    gateway_id?: string;
    gateway_options?: PayDebitMemoRequestGatewayOptions;
    /** A merchant-specified natural key value that can be passed to the payment gateway when a payment is created. If not specified, the payment number will be passed in instead. */
    gateway_order_id?: string;
    /** The date and time when the payment takes effect. */
    payment_date?: Date;
    /** Identifier of the payment method used to create this payment. */
    payment_method_id?: string;
    /** A second transaction identifier returned by the payment gateway if there is an additional transaction for the refunds. You may use this field to reconcile payments between your payment gateway and Zuora Payments. */
    reference_id?: string;
    /** A payment gateway-specific field used by Orbital, Vantiv and Verifi. */
    statement_descriptor?: string;
    /** A payment gateway-specific field used by Orbital, Vantiv and Verifi. */
    statement_descriptor_phone?: string;
}