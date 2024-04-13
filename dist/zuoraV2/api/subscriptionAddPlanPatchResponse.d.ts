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
import type { SubscriptionItemListResponse } from './subscriptionItemListResponse';
/**
 */
export interface SubscriptionAddPlanPatchResponse {
    custom_fields?: CustomFields;
    /** The id of the subscription plan to be updated. It can be the latest version or any history version id. */
    plan_id?: string;
    subscription_items?: SubscriptionItemListResponse;
    /** A unique string to represent the subscription plan in the order. The unique token is used to perform multiple actions against a newly added subscription plan. For example, if you want to add and update a product in the same order, assign a unique token to the newly added subscription plan and use that token in future order actions. */
    unique_token?: string;
}
//# sourceMappingURL=subscriptionAddPlanPatchResponse.d.ts.map