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
import type { AccountCreateRequest } from './accountCreateRequest';
import type { OrderCreateRequestCategory } from './orderCreateRequestCategory';
import type { CustomFields } from './customFields';
import type { OrderCreateRequestCustomObjects } from './orderCreateRequestCustomObjects';
import type { LineItemCreateRequest } from './lineItemCreateRequest';
import type { OrdersProcessingOption } from './ordersProcessingOption';
import type { OrderCreateRequestState } from './orderCreateRequestState';
import type { PostSubscriptionOrderRequest } from './postSubscriptionOrderRequest';
/**
 */
export interface OrderCreateRequest {
    /** The information of the new account that owns the subscription. The subscription owner account can be different from the invoice owner account. If you specify this field, do not specify `account_id`. */
    account_data?: AccountCreateRequest;
    /** Identifier of the account. */
    account_id?: string;
    /** Human-readable identifier of the account. It can be user-supplied. */
    account_number?: string;
    /** Category of the order to indicate a product sale or return. Default value is `sale`. */
    category?: OrderCreateRequestCategory;
    custom_fields?: CustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: OrderCreateRequestCustomObjects;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** Order line items are non-subscription-based items created by an order, representing transactional charges such as one-time fees, physical goods, or professional service charges that are not sold as subscription services.    By specifying this field, you can launch non-subscription and unified monetization business models in Zuora, in addition to subscription business models. */
    line_items?: LineItemCreateRequest[];
    /** The date when the order is signed. All the order actions under this order will use this order date as the contract effective date if the contract effective date field is skipped or its value is left as null. */
    order_date?: Date;
    /** The order number of the new order. If not provided, system will auto-generate a number for this order.     Note: Ensure that the order number does not contain a slash. */
    order_number?: string;
    processing_options?: OrdersProcessingOption;
    /** The status of the order. */
    state?: OrderCreateRequestState;
    /** Based on the intended order action, each item should include specific fields.     For example, to create a new subscription for a new account, you must specify the `account_data` and `subscription_plans` fields at a minimum. */
    subscriptions?: PostSubscriptionOrderRequest[];
}
