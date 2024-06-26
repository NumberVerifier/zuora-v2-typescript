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
import type { FulfillmentItemCreateRequestForFulfillmentPost } from './fulfillmentItemCreateRequestForFulfillmentPost';
import type { Revenue } from './revenue';
import type { FulfillmentRequestState } from './fulfillmentRequestState';
import type { FulfillmentRequestType } from './fulfillmentRequestType';

/**
 */
export interface FulfillmentRequest {
  /** The name of the shipping carrier for this fulfillment. */
  carrier?: string;
  custom_fields?: CustomFields;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: string;
  /** An external identifier for the fulfillment */
  external_id?: string;
  /** The date of the fulfillment. */
  fulfillment_date: Date;
  /** The fulfillment system for the fulfillment. */
  fulfillment_system?: string;
  /** Information of all fulfillment items. */
  items?: FulfillmentItemCreateRequestForFulfillmentPost[];
  /** The fulfillment location of the fulfillment. */
  location?: string;
  /** The unique identifier of the associated order line item. */
  order_line_item_id: string;
  /** The number of units of this item. */
  quantity: number;
  revenue?: Revenue;
  /** The status of the invoice. */
  state?: FulfillmentRequestState;
  /** The tracking number of the fulfillment. */
  tracking_number?: string;
  /** The type of fulfillment. */
  type?: FulfillmentRequestType;
}
