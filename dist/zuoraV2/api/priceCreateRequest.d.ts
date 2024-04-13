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
import type { Money } from './money';
import type { PriceCreateRequestApplyDiscountToItem } from './priceCreateRequestApplyDiscountToItem';
import type { CustomFields } from './customFields';
import type { PriceCreateRequestCustomObjects } from './priceCreateRequestCustomObjects';
import type { PriceCreateRequestDiscountLevel } from './priceCreateRequestDiscountLevel';
import type { Drawdown } from './drawdown';
import type { Overage } from './overage';
import type { Prepayment } from './prepayment';
import type { PriceCreateRequestPriceBaseInterval } from './priceCreateRequestPriceBaseInterval';
import type { Recurring } from './recurring';
import type { Revenue } from './revenue';
import type { PriceCreateRequestRevenueRecognitionRule } from './priceCreateRequestRevenueRecognitionRule';
import type { PriceCreateRequestStartEvent } from './priceCreateRequestStartEvent';
import type { Tier } from './tier';
import type { PriceCreateRequestTiersMode } from './priceCreateRequestTiersMode';
export interface PriceCreateRequest {
    /** An active accounting code defined in **Finance Settings > Configure Accounting Codes** in your Zuora tenant. */
    accounting_code?: string;
    amounts?: Money;
    /** Any combination of one_time, recurring and plan. */
    apply_discount_to?: PriceCreateRequestApplyDiscountToItem[];
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** Name of the custom field that will be used to set a per unit rate under the `Pre-Rated Per Unit` charge model  */
    custom_field_per_unit_rate?: string;
    /** Name of the custom field that will be used to set a total amount under the `Pre-Rated` charge model  */
    custom_field_total_amount?: string;
    custom_fields?: CustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: PriceCreateRequestCustomObjects;
    /**
     * An active accounting code in your Zuora chart of accounts.
     * @maxLength 100
     */
    deferred_revenue_accounting_code?: string;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    discount_amounts?: Money;
    /** Specifies at what level a discount should be applied: account, subscription, or plan. */
    discount_level?: PriceCreateRequestDiscountLevel;
    /** Discount percent. Specify this field if you offer a percentage-based discount. */
    discount_percent?: number;
    drawdown?: Drawdown;
    /** Unique identifier for the object. */
    readonly id?: string;
    /** The maximum quantity for a price. Specify this field and the `min_quantity` field to create a range of quantities allowed in a price. */
    max_quantity?: number;
    /** The minimum quantity for a price. Specify this field and the `max_quantity` field to create a range of quantities allowed in a price. */
    min_quantity?: number;
    /** The name of the price. */
    name: string;
    /** @deprecated */
    overage?: Overage;
    /** Specify the ID of a plan to which this price is associated. */
    plan_id?: string;
    /** Specify the number of a plan to which this price is associated. This field is required if plan_id is not supplied */
    plan_number?: string;
    prepayment?: Prepayment;
    /** Specifies the base interval of a price. If not provided, this field defaults to `billing_period`. */
    price_base_interval?: PriceCreateRequestPriceBaseInterval;
    /** Quantity of the product to which your customers subscribe. */
    quantity?: number;
    /**
     * An active accounting code in your Zuora chart of accounts.
     * @maxLength 100
     */
    recognized_revenue_accounting_code?: string;
    recurring?: Recurring;
    revenue?: Revenue;
    /** Determines when to recognize the revenue for this charge. You can choose to recognize upon invoicing or daily over time. */
    revenue_recognition_rule?: PriceCreateRequestRevenueRecognitionRule;
    /** This field is only applicable for the Percentage Discount price. This field indicates whether the discount is to be calculated as stacked discount. Possible values are as follows:        <ul>       <li>`true`: This is a stacked discount, which should be calculated by stacking with other discounts.</li>       <li> `false`: This is not a stacked discount, which should be calculated in sequence with other discounts.</li></ul> For more information, see <a href='https://knowledgecenter.zuora.com/Zuora_Billing/Products/Product_Catalog/B_Charge_Models/B_Discount_Charge_Models' target='_blank'>Stacked discounts</a> */
    stacked_discount?: boolean;
    /** Specifies when to start billing your customer. */
    start_event?: PriceCreateRequestStartEvent;
    /** A tax code identifier. If a `tax_code` of a price is not provided when you create or update a price, Zuora will treat the charged amount as non-taxable. If this code is provide, Zuora considers that this price is taxable and the charged amount will be handled accordingly. */
    tax_code?: string;
    /** If this field is set to `true`, it indicates that amounts are inclusive of tax. */
    tax_inclusive?: boolean;
    taxable?: boolean;
    /** Price information for different tiers. When creating or updating tiered prices, you must specify this field and the `tiers_mode` field. */
    tiers?: Tier[];
    /**
     * Specifies the mode for tiered prices.
     * @deprecated
     */
    tiers_mode?: PriceCreateRequestTiersMode;
    unit_amounts?: Money;
    /** A configured unit of measure. This field is required for per-unit prices. */
    unit_of_measure?: string;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
}
//# sourceMappingURL=priceCreateRequest.d.ts.map