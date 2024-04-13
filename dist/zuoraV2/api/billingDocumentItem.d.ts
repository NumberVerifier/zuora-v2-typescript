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
import type { BillingDocument } from './billingDocument';
import type { BillingDocumentItemCustomFields } from './billingDocumentItemCustomFields';
import type { BillingDocumentItemCustomObjects } from './billingDocumentItemCustomObjects';
import type { Subscription } from './subscription';
import type { SubscriptionItem } from './subscriptionItem';
import type { TaxationItemListResponse } from './taxationItemListResponse';
import type { BillingDocumentItemType } from './billingDocumentItemType';
/**
 */
export interface BillingDocumentItem {
    accounting_code?: string;
    /** An active account in your Zuora Chart of Accounts. */
    accounts_receivable_account?: string;
    /** The total amount of this billing document item. */
    amount?: number;
    /** Identifier of an invoice item or a debit memo item that this discount item or credit memo item is applied to. */
    applied_to_item_id?: string;
    /** The related billing document. */
    billing_document?: BillingDocument;
    /** The related billing document id. */
    billing_document_id?: string;
    /** The booking reference for this billing document item. */
    booking_reference?: string;
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
    custom_fields?: BillingDocumentItemCustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: BillingDocumentItemCustomObjects;
    /** The accounting code for the deferred revenue, such as Monthly Recurring Liability. */
    deferred_revenue_account?: string;
    /** An arbitrary string associated with the object. Often useful for displaying to users. */
    description?: string;
    /** If true, indicates that the item is a discount item. */
    discount_item?: boolean;
    /** The date when the billing document item takes effect. */
    document_item_date?: Date;
    /** Unique identifier for the object. */
    readonly id?: string;
    /** The identifier of the invoice item associated with this billing document item. */
    invoice_item_id?: string;
    /** Name of the billing document item displayed to customers on the billing document. */
    name?: string;
    /** The accounting code that maps to an on account in your accounting system. */
    on_account_account?: string;
    /** The description of the price this billing document item is associated with. */
    price_description?: string;
    /** The identifier of the price this billing document item is associated with. */
    price_id?: string;
    /** The name of the product associated with this item. */
    product_name?: string;
    /** The purchase order number associated with this billing document item. */
    purchase_order_number?: string;
    /** The number of units of this item. */
    quantity?: number;
    /** The accounting code for the recognized revenue, such as Monthly Recurring Charges or Overage Charges. */
    recognized_revenue_account?: string;
    /** The remaining balance of this billing document item. */
    remaining_balance?: number;
    /** The name of the revenue recognition rule governing the revenue schedule. */
    revenue_recognition_rule_name?: string;
    /** The end date of the service period associated with this billing document item. If the associated charge is a one-time fee, then this date is the date of that charge. */
    service_end?: string;
    /** The start date of the service period associated with this billing document item. If the associated charge is a one-time fee, then this date is the date of that charge. */
    service_start?: string;
    /** The unique SKU (stock keeping unit) of the product associated with this item. */
    sku?: string;
    /** The expandable subscription associated with the billing document item. */
    subscription?: Subscription;
    /** The identifier of the subscription associated with the billing document item. */
    subscription_id?: string;
    /** The expandable subscription item associated with this billing document item. */
    subscription_item?: SubscriptionItem;
    /** The identifier the subscription item associated with this billing document item. */
    subscription_item_id?: string;
    /** The total amount of this billing document item exclusive of tax. */
    subtotal?: number;
    /** The amount of tax applied to the billing document item. */
    tax?: number;
    /** The designated tax code. */
    tax_code?: string;
    /** This specifies if the billing document item amount is inclusive or exclusive of tax. */
    tax_inclusive?: boolean;
    /** List of taxation items. */
    taxation_items?: TaxationItemListResponse;
    /** The type of billing document, one of credit_memo, debit_memo or invoice. */
    type?: BillingDocumentItemType;
    /** Unit amount (in the currency specified) of the billing document item. */
    unit_amount?: number;
    /** Specifies the units used to measure usage. */
    unit_of_measure?: string;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
}
//# sourceMappingURL=billingDocumentItem.d.ts.map