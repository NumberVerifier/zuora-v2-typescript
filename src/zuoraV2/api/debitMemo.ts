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
import type { Account } from './account';
import type { Contact } from './contact';
import type { FlexibleBillingDocumentSettings } from './flexibleBillingDocumentSettings';
import type { DebitMemoCustomFields } from './debitMemoCustomFields';
import type { DebitMemoCustomObjects } from './debitMemoCustomObjects';
import type { BillingDocumentItemListResponse } from './billingDocumentItemListResponse';
import type { DebitMemoState } from './debitMemoState';
import type { DebitMemoStateTransitionsAllOf } from './debitMemoStateTransitionsAllOf';

/**
 */
export interface DebitMemo {
  /** The account that owns the billing document. EXPANDABLE */
  account?: Account;
  /** Identifier of the account that owns the debit memo. */
  account_id?: string;
  /** Human-readable identifier of the account that owns the debit memo. */
  account_number?: string;
  /** The total amount paid. */
  readonly amount_paid?: number;
  /** The amount of this billing document item refunded. */
  amount_refunded?: number;
  /**
   * The total balance remaining.  This field is deprecated. Use `remaining_balance` field.
   * @deprecated
   */
  readonly balance?: number;
  /** The billing address for the customer. */
  readonly bill_to?: Contact;
  /**
   * ID of the bill-to contact.
   * @nullable
   */
  bill_to_id?: string | null;
  /** The billing document settings for the customer. */
  billing_document_settings?: FlexibleBillingDocumentSettings;
  /** Unique identifier of the Zuora user who created the object */
  readonly created_by_id?: string;
  /** The date and time when the object was created in ISO 8601 UTC format. */
  readonly created_time?: Date;
  /** 3-letter ISO 4217 currency code */
  currency?: string;
  /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
  custom_fields?: DebitMemoCustomFields;
  /** The custom objects associated with a Zuora standard object. */
  readonly custom_objects?: DebitMemoCustomObjects;
  /** A human-readable identifier for the billing document; may be user-supplied. */
  readonly debit_memo_number?: string;
  /** An arbitrary string associated with the object. Often useful for displaying to users. */
  description?: string;
  /** The date when the debit memo takes effect. */
  document_date?: Date;
  /** The date on which payment for the billing document is due. */
  due_date?: Date;
  /** Indicates whether to exclude this credit memo from the rule of automatically applying it to invoices. This field is applicable only if the `type` field is set to `credit_memo`. */
  exclude_from_auto_apply_rules?: boolean;
  /** Unique identifier for the object. */
  readonly id?: string;
  /** The identifier of the invoice from which this credit memo or debit memo is created. This field is applicable only if the `type` field is set to `credit_memo` or `debit_memo`. */
  invoice_id?: string;
  /** List of debit memo items. */
  readonly items?: BillingDocumentItemListResponse;
  /** Whether payment was successfully collected for this invoice. An invoice can be paid with a payment or a credit memo. */
  readonly paid?: boolean;
  /** Whether payment is past due. */
  readonly past_due?: boolean;
  /** Indicates whether this billing document is automatically picked up for processing in the corresponding payment run. */
  pay?: boolean;
  /**
   * The name of payment term associated with the invoice.
   * @nullable
   */
  payment_terms?: string | null;
  /** Identifier of the Zuora user who posted the debit memo. */
  readonly posted_by_id?: string;
  /** Reason for issuing this debit memo. This field is applicable only if the `type` field is set to `credit_memo` or `debit_memo`. */
  reason_code?: string;
  /** The total balance remaining. */
  readonly remaining_balance?: number;
  /** The status of the debit memo. */
  state?: DebitMemoState;
  state_transitions?: DebitMemoStateTransitionsAllOf;
  /** The total amount exclusive of tax. */
  readonly subtotal?: number;
  /** The total tax amount. */
  readonly tax?: number;
  /** The total amount. */
  readonly total?: number;
  /** Whether to transfer to an external accounting system. */
  transfer_to_accounting?: boolean;
  /** Unique identifier of the Zuora user who last updated the object */
  readonly updated_by_id?: string;
  /** The date and time when the object was last updated in ISO 8601 UTC format. */
  readonly updated_time?: Date;
}
