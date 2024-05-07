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
import type { Contact } from './contact';
import type { AccountBillingDocumentSettings } from './accountBillingDocumentSettings';
import type { BillingDocumentListResponse } from './billingDocumentListResponse';
import type { CreditMemoListResponse } from './creditMemoListResponse';
import type { AccountCustomFields } from './accountCustomFields';
import type { AccountCustomObjects } from './accountCustomObjects';
import type { DebitMemoListResponse } from './debitMemoListResponse';
import type { PaymentMethod } from './paymentMethod';
import type { InvoiceListResponse } from './invoiceListResponse';
import type { PaymentMethodListResponse } from './paymentMethodListResponse';
import type { PaymentListResponse } from './paymentListResponse';
import type { SubscriptionListResponse } from './subscriptionListResponse';
import type { AccountTaxCertificate } from './accountTaxCertificate';
import type { AccountTaxIdentifier } from './accountTaxIdentifier';
import type { ListUsageResponse } from './listUsageResponse';
/**
 * The account data.
 */
export interface Account {
    /** Human-readable identifier of the account. It can be user-supplied. */
    account_number?: string;
    /** Controls whether future payments are automatically billed when they are due. */
    auto_pay?: boolean;
    /** The identifier of a bill run batch. */
    batch?: string;
    /**
     * The day of the month on which your customer will be invoiced. For month-end specify 31.
     * @minimum 0
     * @maximum 31
     */
    bill_cycle_day?: number;
    /** Customer billing address. */
    readonly bill_to?: Contact;
    /** Customer billing address. */
    bill_to_id?: string;
    /** Billing document settings for an account */
    billing_document_settings?: AccountBillingDocumentSettings;
    /** List of customer billing documents. */
    readonly billing_documents?: BillingDocumentListResponse;
    /** Identifier of the communication profile associated with this customer. */
    communication_profile_id?: string;
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** List of credit memo */
    readonly credit_memos?: CreditMemoListResponse;
    /** CRM account identifier. */
    crm_id?: string;
    /** Three-letter ISO currency code. Once the currency is set for an account, it cannot be updated. */
    currency?: string;
    /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
    custom_fields?: AccountCustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: AccountCustomObjects;
    /** List of debit memo */
    readonly debit_memos?: DebitMemoListResponse;
    /** The default payment method for the customer. */
    default_payment_method?: PaymentMethod;
    /** Identifier of the default payment method on the customer account. */
    default_payment_method_id?: string;
    /** An arbitrary string attached to the object. Often useful for displaying to users. */
    description?: string;
    /** Usually used to disable the customer account. The default is true. If false, attempts to create subscriptions for the customer account will fail. */
    readonly enabled?: boolean;
    /** Unique identifier for the object. */
    readonly id?: string;
    /** List of invoices */
    readonly invoices?: InvoiceListResponse;
    /** The name of the customer account. */
    name?: string;
    /** Identifier of this customer's parent account, if any. */
    parent_account_id?: string;
    /** Payment gateway name. */
    payment_gateway?: string;
    /** List of customer payment methods. */
    readonly payment_methods?: PaymentMethodListResponse;
    /** Payment terms configured in **Billing Settings > Payment Terms** of your Zuora tenant. */
    payment_terms?: string;
    /** List of customer payments. */
    readonly payments?: PaymentListResponse;
    /** Total remaining balance of all posted credit memos. */
    readonly remaining_credit_memo_balance?: number;
    /** Total remaining balance of all posted debit memos. */
    readonly remaining_debit_memo_balance?: number;
    /** Total remaining balance of all posted invoices. */
    readonly remaining_invoice_balance?: number;
    /** Total remaining balance of all posted payments. */
    readonly remaining_payment_balance?: number;
    /** The name of the sales representative associated with this account */
    sales_rep?: string;
    /** The identifier or the billing document sequence set that is assigned to the customer account. */
    sequence_set_id?: string;
    /** Customer address used for calculating tax. */
    readonly sold_to?: Contact;
    /** Customer address used for calculating tax. */
    sold_to_id?: string;
    /** List of customer subscriptions. */
    readonly subscriptions?: SubscriptionListResponse;
    /** The tax certificate information. */
    tax_certificate?: AccountTaxCertificate;
    /** An object that contains the VAT Identification number. */
    tax_identifier?: AccountTaxIdentifier;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
    /** List of customer usages. */
    readonly usage_records?: ListUsageResponse;
}
