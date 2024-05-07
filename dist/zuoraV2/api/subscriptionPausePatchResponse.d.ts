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
import type { SubscriptionPausePatchResponsePauseAt } from './subscriptionPausePatchResponsePauseAt';
import type { SubscriptionPausePatchResponsePauseInterval } from './subscriptionPausePatchResponsePauseInterval';
import type { ResumeSubscriptionRequest } from './resumeSubscriptionRequest';
/**
 * Specify this field if you want to pause a subscription.
 */
export interface SubscriptionPausePatchResponse {
    custom_fields?: CustomFields;
    /** Can be either the end of the current billing period or a specific date. */
    pause_at?: SubscriptionPausePatchResponsePauseAt;
    /** Date on which the subscription is paused. */
    pause_date?: string;
    /** Unit in which the pause duration is defined. One of day, week, month or year. */
    pause_interval?: SubscriptionPausePatchResponsePauseInterval;
    /** The number of intervals in a duration where the subscription is paused. For example, pause_interval=year and pause_interval_count=1 represents a 1-year pause. */
    pause_interval_count?: number;
    resume_behavior?: ResumeSubscriptionRequest;
}
