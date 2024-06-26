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
export interface UsageCreateRequest {
    /** Identifier of the account associated with this subscription. Either `account_id` or `account_number` is required. */
    account_id?: string;
    /** Human-readable identifier of the account. It can be user-supplied. Either `account_number` or `account_id` is required. */
    account_number?: string;
    custom_fields?: CustomFields;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** The end time for which usage is recorded. */
    end_time?: Date;
    /** The number of units of this item. */
    quantity: number;
    /** The start time for which usage is recorded. */
    start_time: Date;
    /** The identifier of the subscription associated with the billing document item. */
    subscription_id?: string;
    /** Identifier of the subscription item. */
    subscription_item_id?: string;
    /** Specifies the units to measure usage. Units of measure are configured in Zuora Central. Your values depend on your configuration in Billing Settings. */
    unit_of_measure: string;
}
