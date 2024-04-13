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
import type { PlanCustomFields } from './planCustomFields';
import type { PlanCustomObjects } from './planCustomObjects';
import type { PriceListResponse } from './priceListResponse';
import type { Product } from './product';
/**
 * Plan information.
 */
export interface Plan {
    /** Whether the plan can be used for new purchases. */
    active?: boolean;
    /** A list of 3-letter ISO-standard currency codes representing active currencies for the plan. */
    active_currencies?: string[];
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
    custom_fields?: PlanCustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: PlanCustomObjects;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** The date on which the plan can no longer be used for new purchases. */
    end_date?: Date;
    /** Unique identifier for the object. */
    readonly id?: string;
    /** The name of the plan. */
    name?: string;
    /** Human-readable identifier of the plan. It can be user-supplied. */
    plan_number?: string;
    /** A list of prices. */
    readonly prices?: PriceListResponse;
    /** The product associated with this plan. */
    product?: Product;
    /** Identifier of the product associated with this plan. */
    product_id?: string;
    /** The product sku. This field is only availble for customers using high speed cache. */
    sku?: string;
    /** The date from which the plan can be used for new purchases. */
    start_date?: Date;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
}
//# sourceMappingURL=plan.d.ts.map