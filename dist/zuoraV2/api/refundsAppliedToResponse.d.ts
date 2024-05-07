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
import type { BillingDocument } from './billingDocument';
import type { RefundsAppliedToResponseBillingDocumentType } from './refundsAppliedToResponseBillingDocumentType';
import type { RefundAppliedToItemResponse } from './refundAppliedToItemResponse';
import type { Payment } from './payment';
/**
 */
export interface RefundsAppliedToResponse {
    /** The amount of the payment that is applied to the specific billing document item or taxation item. */
    amount?: number;
    /** The related billing document. */
    billing_document?: BillingDocument;
    /** Identifier of an invoice or a debit memo. */
    billing_document_id?: string;
    /** The type of billing document. Can be one of the credit memo or invoice. */
    billing_document_type?: RefundsAppliedToResponseBillingDocumentType;
    /** Identifier of the refund application. */
    id?: string;
    /** The related credit memo item. */
    items?: RefundAppliedToItemResponse[];
    payment?: Payment;
}
