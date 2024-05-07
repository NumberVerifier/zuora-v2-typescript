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
import type { Contact } from './contact';
import type { FlexibleBillingDocumentSettings } from './flexibleBillingDocumentSettings';
import type { CustomFields } from './customFields';
import type { Term } from './term';
import type { ProcessingOptions } from './processingOptions';
import type { StartOn } from './startOn';
import type { SubscriptionPlanCreateRequest } from './subscriptionPlanCreateRequest';
/**
 */
export interface SubscriptionCreateRequest {
    /** The information of the new account that owns the subscription. The subscription owner account can be different from the invoice owner account. If you specify this field, do not specify `account_id`. */
    account_data?: AccountCreateRequest;
    /** Identifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. If you specify this field, do not specify `account_data`. */
    account_id?: string;
    /** Identifier of the account that owns the subscription. Subscription owner account can be different from the invoice owner account. If you specify this field, do not specify `account_data`. */
    account_number?: string;
    /** If true, the subscription automatically renews at the end of the current term. */
    auto_renew?: boolean;
    /** The billing address for the customer. */
    readonly bill_to?: Contact;
    /**
     * ID of the bill-to contact.
     * @nullable
     */
    bill_to_id?: string | null;
    /** The billing document settings for the customer. */
    billing_document_settings?: FlexibleBillingDocumentSettings;
    /** 3-letter ISO 4217 currency code. This field is available only if you have the [Multiple Currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies) feature enabled. */
    currency?: string;
    custom_fields?: CustomFields;
    /** Description of the subscription. Often useful for displaying to users. */
    description?: string;
    /** Initial term information for the subscription. */
    initial_term?: Term;
    /** The information of the new account that owns the invoice associated with this subscription. If you specify this field, do not specify `invoice_owner_account_id`. */
    invoice_owner_account_data?: AccountCreateRequest;
    /** Identifier of the account that owns the invoice associated with this subscription. If you specify this field, do not specify `invoice_owner_account_data`. */
    invoice_owner_account_id?: string;
    /** Identifier of the account that owns the invoice associated with this subscription. If you specify this field, do not specify `invoice_owner_account_data`. */
    invoice_owner_account_number?: string;
    /** Separates a single subscription from other subscriptions and creates an invoice for this subscription. If the value is `true`, the subscription is billed separately from other subscriptions. If the value is `false`, the subscription is included with other subscriptions in the account invoice. */
    invoice_separately?: boolean;
    /**
     * The name of payment term associated with the invoice.
     * @nullable
     */
    payment_terms?: string | null;
    processing_options?: ProcessingOptions;
    /** Renewal term information for the subscription */
    renewal_term?: Term;
    /** The selling address for the customer. */
    readonly sold_to?: Contact;
    /**
     * ID of the sold-to contact.
     * @nullable
     */
    sold_to_id?: string | null;
    start_on?: StartOn;
    /** Human-readable identifier of the subscription; maybe user-supplied. */
    subscription_number?: string;
    /** The plans associated with the new subscription. */
    subscription_plans?: SubscriptionPlanCreateRequest[];
}
