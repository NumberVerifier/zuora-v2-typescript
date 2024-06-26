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
import type { AccountContactCreateRequest } from './accountContactCreateRequest';
import type { BillingDocumentSettings } from './billingDocumentSettings';
import type { CustomFields } from './customFields';
import type { AccountCreateRequestCustomObjects } from './accountCreateRequestCustomObjects';
import type { AccountPaymentMethodRequest } from './accountPaymentMethodRequest';
import type { TaxCertificate } from './taxCertificate';
import type { TaxIdentifier } from './taxIdentifier';

export interface AccountCreateRequest {
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
  bill_to: AccountContactCreateRequest;
  billing_document_settings?: BillingDocumentSettings;
  /** Identifier of the communication profile associated with this customer. */
  communication_profile_id?: string;
  /** Unique identifier of the Zuora user who created the object */
  readonly created_by_id?: string;
  /** The date and time when the object was created in ISO 8601 UTC format. */
  readonly created_time?: Date;
  /** CRM account identifier. */
  crm_id?: string;
  /** Three-letter ISO currency code. Once the currency is set for an account, it cannot be updated. */
  currency: string;
  custom_fields?: CustomFields;
  /** The custom objects associated with a Zuora standard object. */
  readonly custom_objects?: AccountCreateRequestCustomObjects;
  /** Identifier of the default payment method on the customer account. */
  default_payment_method_id?: string;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: string;
  /** Unique identifier for the object. */
  readonly id?: string;
  /** The name of the customer account. */
  name: string;
  /** Identifier of this customer's parent account, if any. */
  parent_account_id?: string;
  /** Payment gateway name. */
  payment_gateway?: string;
  /** A new payment method for the account. */
  payment_method?: AccountPaymentMethodRequest;
  /** Payment terms configured in **Billing Settings > Payment Terms** of your Zuora tenant. */
  payment_terms?: string;
  /** The name of the sales representative associated with this account */
  sales_rep?: string;
  /** The identifier or the billing document sequence set that is assigned to the customer account. */
  sequence_set_id?: string;
  /** Customer address used for calculating tax. */
  sold_to?: AccountContactCreateRequest;
  tax_certificate?: TaxCertificate;
  tax_identifier?: TaxIdentifier;
  /** Unique identifier of the Zuora user who last updated the object */
  readonly updated_by_id?: string;
  /** The date and time when the object was last updated in ISO 8601 UTC format. */
  readonly updated_time?: Date;
}
