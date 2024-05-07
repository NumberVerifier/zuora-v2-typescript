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
import type { TaxationItemCreateRequest } from './taxationItemCreateRequest';
export interface CreditMemoItemCreateRequest {
    /** An active account in your Zuora Chart of Accounts. */
    accounting_code?: string;
    /** Amount of the credit memo item. This should always be equal to unit_amount * quantity.      Required when creating credit memos from an invoice. */
    amount?: number;
    custom_fields?: CustomFields;
    /** An active account in your Zuora Chart of Accounts. */
    deferred_revenue_account?: string;
    /** An arbitrary string associated with the object. Often useful for displaying to users. */
    description?: string;
    /** The identifier of the invoice item associated with this credit memo item.    **Required when creating credit memos from an invoice.** */
    invoice_item_id?: string;
    /** Name of the billing document item displayed to customers on the billing document.      **Required when creating credit memos from an invoice** */
    name?: string;
    /** An active account in your Zuora Chart of Accounts. */
    on_account_account?: string;
    /** The identifier of the price this credit memo item is associated with.    Required when creating credit memos from a price(charge in the v1 API). */
    price_id?: string;
    /** The purchase order number associated with this billing document item. */
    purchase_order_number?: string;
    /** The number of units of this item. */
    quantity?: number;
    /** An active account in your Zuora Chart of Accounts. */
    recognized_revenue_account?: string;
    /** The name of the revenue recognition rule governing the revenue schedule. */
    revenue_recognition_rule_name?: string;
    /** The end date of the service period associated with this credit memo item. If the price for the associated subscription item is a one-time fee, then this date is the date of that subscription item. */
    service_end?: Date;
    /** The start date of the service period associated with this credit memo item. If the price for the associated subscription item is a one-time fee, then this date is the date of that subscription item. */
    service_start: Date;
    /** The unique SKU (stock keeping unit) of the product associated with this item. */
    sku?: string;
    /** The designated tax code. */
    tax_code?: string;
    /** Indicates whether the credit memo item amount is inclusive or exclusive of tax. */
    tax_inclusive?: boolean;
    /** List of taxation items. */
    taxation_items?: TaxationItemCreateRequest[];
    /** Unit amount of the credit memo item. */
    unit_amount?: number;
    /** Specifies the units used to measure usage. */
    unit_of_measure?: string;
}
