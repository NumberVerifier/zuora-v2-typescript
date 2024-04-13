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
import type { InvoiceItemPreviewResponseProcessingType } from './invoiceItemPreviewResponseProcessingType';
/**
 */
export interface InvoiceItemPreviewResponse {
    /** The total amount of this invoice item. */
    amount?: number;
    /** Identifier of an invoice item or a debit memo item that this discount item or credit memo item is applied to. */
    applied_to_item_id?: string;
    /** Type of the charge. It can be one of the following types: one-time, recurring, or usage. */
    charge_type?: string;
    document_date?: Date;
    /** Unique identifier of the object */
    id?: string;
    processing_type?: InvoiceItemPreviewResponseProcessingType;
    product_name?: string;
    /** The number of units of this item. */
    quantity?: number;
    /** The end date of the service period associated with this invoice item. If the associated charge is a one-time fee, then this date is the date of that charge. */
    service_end_date?: string;
    /** The start date of the service period associated with this invoice item. If the associated charge is a one-time fee, then this date is the date of that charge. */
    service_start_date?: string;
    /** The identifier of the subscription associated with the invoice item. */
    subscription_id?: string;
    subscription_item_description?: string;
    /** The identifier the subscription item associated with this invoice item. */
    subscription_item_id?: string;
    subscription_item_name?: string;
    /** Human-readable identifier of the subscription item. It can be user-supplied. */
    subscription_item_number?: string;
    /** The name of the subscription associated with this item. */
    subscription_name?: string;
    /** The subscription number of the subscription associated with this item. */
    subscription_number?: string;
    /** The amount of tax applied to the invoice item. */
    tax?: number;
    /** Specifies the units used to measure usage. */
    unit_of_measure?: string;
}
//# sourceMappingURL=invoiceItemPreviewResponse.d.ts.map