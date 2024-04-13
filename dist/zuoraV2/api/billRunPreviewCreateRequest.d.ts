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
import type { BillRunPreviewCreateRequestAssumeRenewal } from './billRunPreviewCreateRequestAssumeRenewal';
import type { BillRunPreviewCreateRequestChargesExcludedItem } from './billRunPreviewCreateRequestChargesExcludedItem';
export interface BillRunPreviewCreateRequest {
    /** Indicates whether to generate a preview of future invoice items and credit memo items with the assumption that the subscriptions are renewed. **all**: The assumption is applied to all the subscriptions. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. **auto_renew_only**: The assumption is applied to the subscriptions that have auto_renew enabled. Zuora generates preview invoice item data and credit memo item data from the first day of the customer's next billing period to the target date. */
    assume_renewal?: BillRunPreviewCreateRequestAssumeRenewal;
    /** Identifiers of the customer account batches to be included in this bill run preview. */
    batches?: string[];
    /** Charge type or types to be excluded from this bill run preview. */
    charges_excluded?: BillRunPreviewCreateRequestChargesExcludedItem[];
    /** If true, draft items will be included in this bill run preview. */
    include_draft_items?: boolean;
    /** If true, evergreen subscriptions will be included in this bill run preview. */
    include_evergreen_subscriptions?: boolean;
    /** All unbilled items on or before this date are included in this bill run. */
    target_date: Date;
}
//# sourceMappingURL=billRunPreviewCreateRequest.d.ts.map