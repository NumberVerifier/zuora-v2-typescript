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
import type { BillingDocumentItemCreateRequest } from './billingDocumentItemCreateRequest';
/**
 */
export interface DebitMemoCreateRequest {
    /** Identifier of the account that owns the debit memo. */
    account_id?: string;
    /** Human-readable identifier of the account that owns the debit memo. */
    account_number?: string;
    /** Whether to automatically apply the billing document upon posting. */
    apply?: boolean;
    /** 3-letter ISO 4217 currency code */
    currency?: string;
    custom_fields?: CustomFields;
    /** An arbitrary string associated with the object. Often useful for displaying to users. */
    description?: string;
    /** The date when the debit memo takes effect. */
    document_date?: Date;
    /** The date on which payment for the debit memo is due. */
    due_date?: Date;
    /** Indicates whether to exclude this credit memo from the rule of automatically applying it to invoices. This field is applicable only if the `type` field is set to `credit_memo`. */
    exclude_from_auto_apply_rules?: boolean;
    /** The identifier of the invoice from which this credit memo or debit memo is created. This field is applicable only if the `type` field is set to `credit_memo` or `debit_memo`. */
    invoice_id?: string;
    /** Information of all billing document items. */
    items?: BillingDocumentItemCreateRequest[];
    /** Indicates whether this billing document is automatically picked up for processing in the corresponding payment run. */
    pay?: boolean;
    /** Whether to automatically post a billing document after it is created. */
    post?: boolean;
    /** Reason for issuing this debit memo. This field is applicable only if the `type` field is set to `credit_memo` or `debit_memo`. */
    reason_code?: string;
    /** Whether to transfer to an external accounting system. */
    transfer_to_accounting?: boolean;
}
