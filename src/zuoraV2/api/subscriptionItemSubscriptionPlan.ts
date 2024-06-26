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
import type { SubscriptionItemSubscriptionPlanCustomFields } from './subscriptionItemSubscriptionPlanCustomFields';
import type { SubscriptionItemSubscriptionPlanCustomObjects } from './subscriptionItemSubscriptionPlanCustomObjects';
import type { Plan } from './plan';
import type { Product } from './product';
import type { Subscription } from './subscription';
import type { SubscriptionItemListResponse } from './subscriptionItemListResponse';

/**
 * Subscription plan information.
 */
export type SubscriptionItemSubscriptionPlan = {
  /** Unique identifier of the Zuora user who created the object */
  readonly created_by_id?: string;
  /** The date and time when the object was created in ISO 8601 UTC format. */
  readonly created_time?: Date;
  /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
  custom_fields?: SubscriptionItemSubscriptionPlanCustomFields;
  /** The custom objects associated with a Zuora standard object. */
  readonly custom_objects?: SubscriptionItemSubscriptionPlanCustomObjects;
  /** Unique identifier for the object. */
  readonly id?: string;
  /** The name of the subscription plan. */
  name?: string;
  /** The plan object associated with this subscription plan. */
  plan?: Plan;
  /** Identifier of the plan associated with this subscription plan. */
  plan_id?: string;
  /** The product associated with the subscription plan. */
  product?: Product;
  /** Identifier of the product associated with this subscription plan. */
  product_id?: string;
  /** The subscription to which this subscription plan belongs. */
  subscription?: Subscription;
  /** Identifier of the subscription this subscription plan belongs to. */
  subscription_id?: string;
  /** List of subscription items. */
  readonly subscription_items?: SubscriptionItemListResponse;
  /** Unique identifier of the Zuora user who last updated the object */
  readonly updated_by_id?: string;
  /** The date and time when the object was last updated in ISO 8601 UTC format. */
  readonly updated_time?: Date;
};
