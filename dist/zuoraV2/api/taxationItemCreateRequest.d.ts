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
import type { TaxationItemCreateRequestTaxRateType } from './taxationItemCreateRequestTaxRateType';
export interface TaxationItemCreateRequest {
    /** The amount of the tax applied to the total price. */
    amount: number;
    /** The calculated tax amount excluded due to the exemption. */
    amount_exempt?: number;
    /** Unique identifier of the invoice item to which the taxation item applies. **This field is required if you are creating a credit memo or debit memo from an invoice, and is not applicable if you are creating an invoice.**.      */
    invoice_item_id?: string;
    /**
     * The jurisdiction that applies the tax or VAT. This value is typically a state, province, county, or city.
     * @maxLength 32
     */
    jurisdiction?: string;
    /**
     * The identifier for the location based on the value of the `tax_code` field.
     * @maxLength 32
     */
    location_code?: string;
    /**
     * The name of the taxation item.
     * @maxLength 128
     */
    name: string;
    /** An active account in your Zuora Chart of Accounts. */
    on_account_account?: string;
    /** The ID of the taxation item of the invoice, from which the credit or debit memo is created. This field is only applicable when the `type` of the billing document is `credit_memo` and `debit_memo`. */
    source_tax_item_id?: string;
    /** A tax code identifier. If a `tax_code` of a price is not provided when you create or update a price, Zuora will treat the charged amount as non-taxable. If this code is provide, Zuora considers that this price is taxable and the charged amount will be handled accordingly. */
    tax_code: string;
    /** The amount of the tax applied to the total price. */
    tax_code_name?: string;
    /** The date on which the tax is applied. */
    tax_date: Date;
    /** If set to `true`, it indicates that amounts are inclusive of tax. */
    tax_inclusive?: boolean;
    /** The amount of the tax applied to the total price. */
    tax_rate: number;
    /** The name of the tax rate, such as sales tax or GST. This name is displayed on billing documents. */
    tax_rate_name?: string;
    /** Indicates whether the tax rate is an amount or a percentage. */
    tax_rate_type?: TaxationItemCreateRequestTaxRateType;
}
