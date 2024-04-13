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
import type { OrderAction } from './orderAction';
import type { ArTransactionsOrders } from './arTransactionsOrders';
import type { Contact } from './contact';
import type { FlexibleBillingDocumentSettings } from './flexibleBillingDocumentSettings';
import type { Term } from './term';
import type { PostSubscriptionOrderResponseCustomFields } from './postSubscriptionOrderResponseCustomFields';
import type { PostSubscriptionOrderResponseCustomObjects } from './postSubscriptionOrderResponseCustomObjects';
import type { InvoiceItemListResponse } from './invoiceItemListResponse';
import type { PrepaidBalance } from './prepaidBalance';
import type { PrepaidBalances } from './prepaidBalances';
import type { PostSubscriptionOrderResponseState } from './postSubscriptionOrderResponseState';
import type { SubscriptionPlanListResponse } from './subscriptionPlanListResponse';

/**
 */
export interface PostSubscriptionOrderResponse {
  /** Information of the new account associated with the subscription. */
  account?: Account;
  /** Identifier of the account associated with this subscription. */
  account_id?: string;
  actions?: OrderAction[];
  ar_transactions?: ArTransactionsOrders;
  /** If this field is set to `true`, the subscription automatically renews at the end of the current term. */
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
  /** The reason for cancelling the subscription. */
  cancel_reason?: string;
  /** Date when the subscriber contract is effective. */
  contract_effective?: Date;
  /** Monthly recurring revenue of the subscription. */
  contracted_mrr?: string;
  /** Unique identifier of the Zuora user who created the object */
  readonly created_by_id?: string;
  /** The date and time when the object was created in ISO 8601 UTC format. */
  readonly created_time?: Date;
  /** 3-letter ISO 4217 currency code. This field is available only if you have the [Multiple Currencies](https://knowledgecenter.zuora.com/Zuora_Billing/Bill_your_customers/Flexible_Billing/Multiple_Currencies) feature enabled. */
  currency?: string;
  /** Current term information for the subscription */
  current_term?: Term;
  /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
  custom_fields?: PostSubscriptionOrderResponseCustomFields;
  /** The custom objects associated with a Zuora standard object. */
  readonly custom_objects?: PostSubscriptionOrderResponseCustomObjects;
  /** Date when all the services or products in the subscription are accepted by the subscriber. */
  customer_acceptance?: Date;
  /** Description of the subscription. Often useful for displaying to users. */
  description?: string;
  /** Date when the subscription ends. */
  end_date?: Date;
  /** Unique identifier for the object. */
  readonly id?: string;
  /** Initial term information for the subscription. */
  initial_term?: Term;
  /** List of invoice items. */
  readonly invoice_items?: InvoiceItemListResponse;
  /** Identifier of the account that owns the subscription. */
  invoice_owner_account?: Account;
  /** Identifier of the account that owns the invoice associated with this subscription. */
  invoice_owner_account_id?: string;
  /** If true, the subscription is billed separately from other subscriptions. If false, the subscription is included with other subscriptions in the account invoice. The default is false. */
  invoice_separately?: boolean;
  /** The last booking date of the subscription object. You can override the date value when creating a subscription through the "Subscribe and Amend" API. The default value `today` is set per the user's timezone. The value of this field is as follows:    <ul>     <li>For a new subscription created by the [Subscribe and Amend](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Migration_Guidance#Subscribe_and_Amend_APIs_to_Migrate) APIs, this field has the value of the subscription creation date. </li>     <li>For a subscription changed by an amendment, this field has the value of the amendment booking date.</li>     <li>For a subscription created or changed by an order, this field has the value of the order date.</li>     </ul>   */
  last_booking_date?: Date;
  /** If true, this is the latest version of the subscription */
  latest_version?: boolean;
  /** The order number of the order created by Zuora. */
  order_number?: string;
  /**
   * The name of payment term associated with the invoice.
   * @nullable
   */
  payment_terms?: string | null;
  /**
   * Total prepaid units available during a subscription. It is an aggregate of all funds under a subscription. **Deprecated, please use `prepaid_balances` instead.**
   * @deprecated
   */
  readonly prepaid_balance?: readonly PrepaidBalance[];
  /** Total prepaid units available during a subscription. It is an aggregate of all funds under a subscription. */
  readonly prepaid_balances?: readonly PrepaidBalances[];
  /** Renewal term information for the subscription. */
  renewal_term?: Term;
  /** Date when the subscribed-to service is activated. */
  service_activation?: Date;
  /** The selling address for the customer. */
  readonly sold_to?: Contact;
  /**
   * ID of the sold-to contact.
   * @nullable
   */
  sold_to_id?: string | null;
  /** Date when the subscription starts. */
  start_date?: Date;
  /** Status of the subscription. */
  state?: PostSubscriptionOrderResponseState;
  /** Human-readable identifier of the subscription. It can be user-supplied. */
  subscription_number?: string;
  /** List of subscription plans. */
  readonly subscription_plans?: SubscriptionPlanListResponse;
  /** Unique identifier of the Zuora user who last updated the object */
  readonly updated_by_id?: string;
  /** The date and time when the object was last updated in ISO 8601 UTC format. */
  readonly updated_time?: Date;
  /** The version of the subscription. This version can be used in the `filter[]` query parameter to filter subscriptions. */
  version?: number;
}
