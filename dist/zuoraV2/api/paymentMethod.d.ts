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
import type { PaymentMethodAchDebit } from './paymentMethodAchDebit';
import type { PaymentMethodApplePay } from './paymentMethodApplePay';
import type { PaymentMethodAuBecsDebit } from './paymentMethodAuBecsDebit';
import type { PaymentMethodAutogiroDebit } from './paymentMethodAutogiroDebit';
import type { PaymentMethodBacsDebit } from './paymentMethodBacsDebit';
import type { PaymentMethodBetalingsDebit } from './paymentMethodBetalingsDebit';
import type { PaymentMethodBillingDetails } from './paymentMethodBillingDetails';
import type { PaymentMethodCard } from './paymentMethodCard';
import type { PaymentMethodCcRef } from './paymentMethodCcRef';
import type { PaymentMethodCustomFields } from './paymentMethodCustomFields';
import type { PaymentMethodCustomObjects } from './paymentMethodCustomObjects';
import type { PaymentMethodGooglePay } from './paymentMethodGooglePay';
import type { PaymentMethodNzBecsDebit } from './paymentMethodNzBecsDebit';
import type { PaymentMethodPadDebit } from './paymentMethodPadDebit';
import type { PaymentMethodPaypalAdaptive } from './paymentMethodPaypalAdaptive';
import type { PaymentMethodPaypalExpress } from './paymentMethodPaypalExpress';
import type { PaymentMethodPaypalExpressNative } from './paymentMethodPaypalExpressNative';
import type { PaymentMethodSepaDebit } from './paymentMethodSepaDebit';
import type { PaymentMethodState } from './paymentMethodState';
import type { PaymentMethodType } from './paymentMethodType';
/**
 * Payment method information.
 */
export interface PaymentMethod {
    /** The customer account associated with this payment method. */
    readonly account?: Account;
    /** A customer account identifier. */
    account_id?: string;
    /** If the `type` of the payment method is `ach_debit`, this hash contains details about the ACH bank account. */
    ach_debit?: PaymentMethodAchDebit;
    /** If the `type` of the payment method is `apple_pay`, this hash contains details about the Apple Pay payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method. */
    apple_pay?: PaymentMethodApplePay;
    /** If the `type` of the payment method is `au_becs_debit`, this hash contains details about the BECS bank account. */
    au_becs_debit?: PaymentMethodAuBecsDebit;
    auto_generated?: boolean;
    /** If the `type` of the payment method is `autogiro_debit`, this hash contains details about the Autogiro bank account. */
    autogiro_debit?: PaymentMethodAutogiroDebit;
    /** If the `type` of the payment method is `bacs_debit`,, this hash contains details about the BACS bank account. */
    bacs_debit?: PaymentMethodBacsDebit;
    bank_identification_number?: string;
    /** If the `type` of the payment method is `betalings_debit`, this hash contains details about the Betalingsservice bank account. */
    betalings_debit?: PaymentMethodBetalingsDebit;
    /** Billing information associated with the payment method that may be used or required by specific payment method types. */
    billing_details?: PaymentMethodBillingDetails;
    /** Credit card information. */
    card?: PaymentMethodCard;
    /** If the `type` of the payment method is `cc_ref`, this hash contains details about the Credit Card Reference Transactions payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method. */
    cc_ref?: PaymentMethodCcRef;
    /** Unique identifier of the Zuora user who created the object */
    readonly created_by_id?: string;
    /** The date and time when the object was created in ISO 8601 UTC format. */
    readonly created_time?: Date;
    /** Set of user-defined fields associated with this object. Useful for storing additional information about the object in a structured format. */
    custom_fields?: PaymentMethodCustomFields;
    /** The custom objects associated with a Zuora standard object. */
    readonly custom_objects?: PaymentMethodCustomObjects;
    /** The custom type of the payment method from Universal Payment Connector. */
    custom_type?: string;
    device_session_id?: string;
    existing_mandate?: boolean;
    /** If the `type` of the payment method is `apple_pay`, this hash contains details about the Apple Pay payment method. See [Supported payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/L_Payment_Methods/A_Supported_Payment_Methods) for payment gateways that support this type of payment method. */
    google_pay?: PaymentMethodGooglePay;
    /** Unique identifier for the object. */
    readonly id?: string;
    /**
     * The IP address from which the Mandate was accepted by the customer.
     * @nullable
     */
    ip_address?: string | null;
    last_failed_sale_transaction_time?: Date;
    last_transaction_status?: string;
    last_transaction_time?: Date;
    /** Maximum number of consecutive failed retry payment attempts using this payment method before retries are stopped. */
    maximum_payment_attempts?: number;
    number_of_consecutive_failures?: number;
    /** If the `type` of the payment method is `nz_becs_debit`, this hash contains details about the BECS-NZ bank account. */
    nz_becs_debit?: PaymentMethodNzBecsDebit;
    /** If the `type` of the payment method is `pad_debit`, this hash contains details about the PAD bank account. */
    pad_debit?: PaymentMethodPadDebit;
    /** The retry interval in hours. */
    payment_retry_interval?: number;
    /** If it is a `paypal_adaptive` payment method, this hash contains details about the PayPal Adaptive payment method. */
    paypal_adaptive?: PaymentMethodPaypalAdaptive;
    /** If it is a `paypal_express` payment method, this hash contains details about the PayPal Express payment method. */
    paypal_express?: PaymentMethodPaypalExpress;
    /** If it is a `paypal_express_native` payment method, this hash contains details about the PayPal Express Native payment method. */
    paypal_express_native?: PaymentMethodPaypalExpressNative;
    /** If the `type` of the payment method is `sepa_debit`, this hash contains details about the SEPA bank account. */
    sepa_debit?: PaymentMethodSepaDebit;
    /** The state of the payment method. */
    state?: PaymentMethodState;
    total_number_of_error_payments?: number;
    total_number_of_processed_payments?: number;
    /** The type of the payment method. An additional hash is included on the payment method with a name matching this value. It contains additional information specific to the payment method type. */
    type?: PaymentMethodType;
    /** Unique identifier of the Zuora user who last updated the object */
    readonly updated_by_id?: string;
    /** The date and time when the object was last updated in ISO 8601 UTC format. */
    readonly updated_time?: Date;
    use_default_retry_rule?: boolean;
}
//# sourceMappingURL=paymentMethod.d.ts.map