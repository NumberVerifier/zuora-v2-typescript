"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuickstartAPIReference = void 0;
const custom_instance_1 = require("../custom-instance");
const getQuickstartAPIReference = () => {
    /**
     * Returns a dictionary with a data property that contains an array of accounts, starting after the cursor, if used. Each entry in the array is a separate account object. If no more accounts are available, the resulting array will be empty. This request should never return an error.
     * @summary List accounts
     */
    const getAccounts = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new account object.
     * @summary Create an account
     */
    const createAccount = (accountCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: accountCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the account with the given ID.
     * @summary Retrieve an account
     */
    const getAccount = (accountId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts/${accountId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified account by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update an account
     */
    const updateAccount = (accountId, accountPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts/${accountId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: accountPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes an account. It cannot be undone.
     * @summary Delete an account
     */
    const deleteAccount = (accountId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts/${accountId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Creates billing documents for an account.
     * @summary Generate billing documents for an account
     */
    const generateBillingDocuments = (accountId, generateBillingDocumentsAccountRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts/${accountId}/bill`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: generateBillingDocumentsAccountRequest
        }, options);
    };
    /**
     * Generates a preview of future invoice and credit memo items for a customer account.              Previewing a customer account shows you how much a single customer will be invoiced from the most recent invoice to a specific end of term date in the future.      <br/>      Previewing a customer account only calculates taxes for charges if you use <a href='https://knowledgecenter.zuora.com/Billing/Taxes/A_Zuora_Tax' target='_blank'>Zuora Tax</a> and the price associated with the invoice item is tax inclusive; otherwise, it does not calculate taxes.
     * @summary Preview an account
     */
    const previewAccount = (accountId, accountPreviewRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/accounts/${accountId}/preview`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: accountPreviewRequest
        }, options);
    };
    /**
     * Retrieves the billing document with the given ID.
     * @summary Retrieve a billing document
     */
    const getBillingDocument = (billingDocumentId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/billing_documents/${billingDocumentId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of billing documents, starting after cursor. Each entry in the array is a separate billing document object. If no more billing documents are available, the resulting array will be empty. This request should never return an error.
     * @summary List billing documents
     */
    const getBillingDocuments = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/billing_documents`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates different types of billing document objects, including invoices, credit memos, and debit memos.
     * @summary Create a billing document
     */
    const postBillingDocument = (billingDocumentCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/billing_documents`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: billingDocumentCreateRequest,
            params
        }, options);
    };
    /**
     * List billing document items
     * @summary List billing document items
     */
    const getBillingDocumentItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/billing_document_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Retrieves the contact with the given ID.
     * @summary Retrieve a contact
     */
    const getContact = (contactId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts/${contactId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified contact by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a contact
     */
    const updateContact = (contactId, contactPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts/${contactId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: contactPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a contact. It cannot be undone.
     * @summary Delete a contact
     */
    const deleteContact = (contactId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts/${contactId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a  dictionary with a data property that contains an array of contacts, starting after the cursor, if used. Each entry in the array is a separate contact object. If no more contacts are available, the resulting array will be empty. This request should never return an error.
     * @summary List contacts
     */
    const getContacts = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new contact object.
     * @summary Create a contact
     */
    const createContact = (contactCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: contactCreateRequest,
            params
        }, options);
    };
    /**
     * Scrubs the sensitive data for the contact with the given ID.
     * @summary Scrub a contact
     */
    const scrubContact = (contactId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/contacts/${contactId}/scrub`, method: 'POST',
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of payment methods, starting after the cursor, if used. Each entry in the array is a separate payment method object. If no more payment methods are available, the resulting array will be empty. This request should never return an error.
     * @summary List payment methods
     */
    const getPaymentMethods = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new payment method object. See [Payment Pages 2.0 implementation overview](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/LA_Hosted_Payment_Pages/B_Payment_Pages_2.0/1_Payment_Pages_2.0_Implementation_Overview) to learn how to create payment methods through Hosted Payment Pages.
     * @summary Create a payment method
     */
    const createPaymentMethod = (paymentMethodCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentMethodCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the payment method with the given ID.
     * @summary Retrieve a payment method
     */
    const getPaymentMethodById = (paymentMethodId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified payment method by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a payment method
     */
    const updatePaymentMethod = (paymentMethodId, paymentMethodPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: paymentMethodPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a payment method. It cannot be undone.
     * @summary Delete a payment method
     */
    const deletePaymentMethod = (paymentMethodId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Sends an authorization request to the corresponding payment gateway to verify the payment method. Supported payment methods are credit cards and Paypal.
     * @summary Verify a payment method
     */
    const verifyPaymentMethod = (paymentMethodId, paymentMethodVerificationRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}/verify`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentMethodVerificationRequest,
            params
        }, options);
    };
    /**
     * Verifies a payment method and block the amount of fund that will be used for payment.
     * @summary Create a payment authorization
     */
    const authorizePaymentMethod = (paymentMethodId, paymentMethodAuthorizationRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}/authorize`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentMethodAuthorizationRequest
        }, options);
    };
    /**
     * Cancel or void the blocked fund from the specified payment method.
     * @summary Cancel a payment authorization
     */
    const voidAuthorizationPaymentMethod = (paymentMethodId, paymentMethodVoidAuthorizationRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}/void_authorization`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentMethodVoidAuthorizationRequest
        }, options);
    };
    /**
     * Scrubs sensitive data such as card number on the specified payment method.
     * @summary Scrub a payment method
     */
    const scrubPaymentMethod = (paymentMethodId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_methods/${paymentMethodId}/scrub`, method: 'POST'
        }, options);
    };
    /**
     * Retrieves the subscription with the given subscription key (number or ID).
     * @summary Retrieve a subscription
     */
    const getSubscriptionByKey = (subscriptionId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified subscription by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a subscription
     */
    const patchSubscription = (subscriptionId, subscriptionPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionPatchRequest,
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of subscriptions, starting after the cursor, if used. Each entry in the array is a separate subscription object. If no more subscriptions are available, the resulting array will be empty. This request should never return an error.
     * @summary List subscriptions
     */
    const getSubscriptions = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new subscription.
     * @summary Create a subscription
     */
    const createSubscription = (subscriptionCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionCreateRequest,
            params
        }, options);
    };
    /**
     * Pauses a subscription.
     * @summary Pause a subscription
     */
    const pauseSubscription = (subscriptionId, pauseSubscriptionRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/pause`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: pauseSubscriptionRequest,
            params
        }, options);
    };
    /**
     * Resumes a subscription.
     * @summary Resume a subscription
     */
    const resumeSubscription = (subscriptionId, resumeSubscriptionRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/resume`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: resumeSubscriptionRequest,
            params
        }, options);
    };
    /**
     * Cancels a subscription.
     * @summary Cancel a subscription
     */
    const cancelSubscription = (subscriptionId, cancelSubscriptionRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/cancel`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: cancelSubscriptionRequest,
            params
        }, options);
    };
    /**
     * Uncancel a cancelled subscription.
     * @deprecated
     * @summary Uncancel a subscription
     */
    const uncancelSubscription = (subscriptionId, subscriptionPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/keep`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionPatchRequest,
            params
        }, options);
    };
    /**
     * A subscription must be active before you can bill your subscribers. Activating a subscription requires entering at least one of the following dates: `contract_effective`, `service_activation`, and `customer_acceptance`. See [Billing Trigger Dates](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/WA_Dates_in_Zuora/B_Subscription_and_Amendment_Dates#Billing_Trigger_Dates) for more information.
     * @summary Activate a subscription
     */
    const activateSubscription = (subscriptionId, subscriptionActivateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/activate`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionActivateRequest,
            params
        }, options);
    };
    /**
     * You can preview the billing document metrics or the order delta metrics across a specified time frame.
     * @summary Preview a subscription
     */
    const previewSubscription = (subscriptionPreviewRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/preview`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionPreviewRequest
        }, options);
    };
    /**
     * You can preview the billing document metrics or the order delta metrics across a specified time frame.
     * @summary Preview an existing subscription
     */
    const previewExistingSubscription = (subscriptionId, subscriptionPreviewExistingRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/preview`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: subscriptionPreviewExistingRequest
        }, options);
    };
    /**
     * Lists all versions of the specified subscription.
     * @summary List all versions of a subscription
     */
    const getSubscriptionByVersion = (subscriptionId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscriptions/${subscriptionId}/versions`, method: 'GET',
            params
        }, options);
    };
    /**
     * Run a specified workflow. In the request body, you can include parameters that you want to pass to the workflow. For the parameters to be recognized and picked up by tasks in the workflow, you need to define the parameters first.
     * @summary Run a workflow
     */
    const runWorkflow = (workflowId, runWorkflowRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/workflows/${workflowId}/run`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: runWorkflowRequest
        }, options);
    };
    /**
     * Retrieves the product with the given ID.
     * @summary Retrieve a product
     */
    const getProduct = (productId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/products/${productId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specific product by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a product
     */
    const updateProduct = (productId, productPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/products/${productId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: productPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a product. It cannot be undone.
     * @summary Delete a product
     */
    const deleteProduct = (productId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/products/${productId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of products, starting after the cursor, if used. Each entry in the array is a separate product object. If no more products are available, the resulting array will be empty. This request should never return an error.
     * @summary List products
     */
    const getProducts = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/products`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new product object.
     * @summary Create a product
     */
    const createProduct = (productCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/products`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: productCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the plan with the given ID.
     * @summary Retrieve a plan
     */
    const getPlan = (planId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/plans/${planId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified plan by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a plan
     */
    const updatePlan = (planId, planPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/plans/${planId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: planPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a plan. It cannot be undone.
     * @summary Delete a plan
     */
    const deletePlan = (planId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/plans/${planId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of plans, starting after the cursor, if used. Each entry in the array is a separate plan object. If no more plans are available, the resulting array will be empty. This request should never return an error.
     * @summary List plans
     */
    const getPlans = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/plans`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new plan for an existing product.
     * @summary Create a plan
     */
    const createPlan = (planCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/plans`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: planCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the price with the given ID.
     * @summary Retrieve a price
     */
    const getPrice = (priceId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/prices/${priceId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified price by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a price
     */
    const patchPrice = (priceId, pricePatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/prices/${priceId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: pricePatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a price. It cannot be undone.
     * @summary Delete a price
     */
    const deletePrice = (priceId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/prices/${priceId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of prices, starting after the cursor, if used. Each entry in the array is a separate price object. If no more prices are available, the resulting array will be empty. This request should never return an error.
     * @summary List prices
     */
    const getPrices = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/prices`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new price for an existing plan.
     * @summary Create a price
     */
    const createPrice = (priceCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/prices`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: priceCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the payment with the given ID.
     * @summary Retrieve a payment
     */
    const getPayment = (paymentId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments/${paymentId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified payment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a payment
     */
    const updatePayment = (paymentId, paymentPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments/${paymentId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: paymentPatchRequest,
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of payments, starting after the cursor, if used. Each entry in the array is a separate payment object. If no more payments are available, the resulting array will be empty. This request should never return an error.
     * @summary List payments
     */
    const getPayments = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new payment object.
     * @summary Create a payment
     */
    const createPayment = (paymentCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentCreateRequest,
            params
        }, options);
    };
    /**
     * Cancels an unapplied payment.
     * @summary Cancel a payment
     */
    const cancelPayment = (paymentId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments/${paymentId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Applies a payment to one or more invoices or debit memos.
     * @summary Apply a payment
     */
    const applyPayment = (paymentId, paymentApplyUnapplyRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments/${paymentId}/apply`, method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            data: paymentApplyUnapplyRequest,
            params
        }, options);
    };
    /**
     * Unapplies an applied payment.
     * @summary Unapply a payment
     */
    const unapplyPayment = (paymentId, paymentApplyUnapplyRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payments/${paymentId}/unapply`, method: 'PUT',
            headers: { 'Content-Type': 'application/json', },
            data: paymentApplyUnapplyRequest,
            params
        }, options);
    };
    /**
     * Retrieves the subscription plan with the given ID.
     * @summary Retrieve a subscription plan
     */
    const getSubscriptionPlan = (subscriptionPlanId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscription_plans/${subscriptionPlanId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of subscription plans, starting after cursor. Each entry in the array is a separate  object. If no more  are available, the resulting array will be empty. This request should never return an error.
     * @summary List subscription plans
     */
    const getSubscriptionPlans = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscription_plans`, method: 'GET',
            params
        }, options);
    };
    /**
     * List items contained in subscriptions.
     * @summary List subscription items
     */
    const getSubscriptionItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/subscription_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of refunds, starting after cursor. Each entry in the array is a separate  object. If no more  are available, the resulting array will be empty. This request should never return an error.
     * @summary List refunds
     */
    const getRefunds = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new refund object.
     * @summary Create a refund
     */
    const createRefund = (refundCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: refundCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the refund with the given ID.
     * @summary Retrieve a refund
     */
    const getRefund = (refundId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds/${refundId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified refund by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a refund
     */
    const updateRefund = (refundId, refundPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds/${refundId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: refundPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a refund. Note that once you have deleted a refund, it cannot be undone.
     * @summary Delete a refund
     */
    const deleteRefund = (refundId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds/${refundId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Cancels an unapplied refund.
     * @summary Cancel a refund
     */
    const cancelRefund = (refundId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/refunds/${refundId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Returns a list of your custom objects.
     * @summary List custom objects
     */
    const getCustomObjects = (customObjectType, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/custom_objects/${customObjectType}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new custom object.
     * @summary Create a custom object
     */
    const createCustomObject = (customObjectType, customObjectCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/custom_objects/${customObjectType}`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: customObjectCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the custom object with the given ID.
     * @summary Retrieve a custom object
     */
    const getCustomObject = (customObjectType, customObjectId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/custom_objects/${customObjectType}/${customObjectId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified custom object by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a custom object
     */
    const updateCustomObject = (customObjectType, customObjectId, customObjectPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/custom_objects/${customObjectType}/${customObjectId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: customObjectPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a custom object. It cannot be undone.
     * @summary Delete a custom object
     */
    const deleteCustomObject = (customObjectType, customObjectId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/custom_objects/${customObjectType}/${customObjectId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Retrieves the bill run information with the given ID.
     * @summary Retrieve a bill run
     */
    const getBillRun = (billRunId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs/${billRunId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Deletes a bill run. Only the bill runs with the `canceled` status can be deleted.
     * @summary Delete a bill run
     */
    const deleteBillRun = (billRunId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs/${billRunId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns an array of bill runs. Each entry in the array is a separate bill run object.       If no more bill runs are available, the resulting array will be empty. This request should never return an error.
     * @summary List bill runs
     */
    const getBillRuns = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a bill run on a single account, or a batch of customer accounts.
     * @summary Create a bill run
     */
    const createBillRun = (billRunCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: billRunCreateRequest,
            params
        }, options);
    };
    /**
     * Posts a bill run. Only the bill runs with the `completed` status can be posted.
     * @summary Post a bill run
     */
    const postBillRun = (billRunId, billRunPostRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs/${billRunId}/post`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: billRunPostRequest,
            params
        }, options);
    };
    /**
     * Cancels a bill run. Only the bill run that has no posted invoices can be canceled.
     * @summary Cancel a bill run
     */
    const cancelBillRun = (billRunId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_runs/${billRunId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Returns an array of usage records. Each entry in the array is a separate Usage object.         If no more usages are available, the resulting array will be empty. This request should never return an error.
     * @summary List usage records
     */
    const getUsageRecords = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/usage_records`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new Usage object.
     * @summary Create a usage record
     */
    const createUsage = (usageCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/usage_records`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: usageCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the usage with the given ID.
     * @summary Retrieve a usage record
     */
    const getUsage = (id, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/usage_records/${id}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the usage record. Any fields on the object not provided in the request are not changed.
     * @summary Update a usage record
     */
    const updateUsage = (id, usagePatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/usage_records/${id}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: usagePatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a usage object. It cannot be undone.
     * @summary Delete a usage record
     */
    const deleteUsage = (id, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/usage_records/${id}`, method: 'DELETE'
        }, options);
    };
    /**
     * Lists all or a subset of orders in your tenant.
     * @summary List orders
     */
    const getOrders = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders`, method: 'GET',
            params
        }, options);
    };
    /**
     * You can use this operation to create subscriptions and make changes to existing subscriptions. You can also use this operation to create order line items.      <p> Note that the following limitations apply to this operation:      <ul>       <li>Up to 50 subscriptions are allowed in a single call.</li>      <li>Up to 100 order line items are allowed in an order.</li>       <li>Up to 1000 orders are allowed on a subscription.</li>      </ul>
     * @summary Create an order
     */
    const createOrder = (orderCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: orderCreateRequest,
            params
        }, options);
    };
    /**
     * Use this operation to retrieve the detailed information about a specific order.
     * @summary Retrieve an order
     */
    const getOrder = (orderId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders/${orderId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Deletes an order.
     * @summary Delete an order
     */
    const deleteOrder = (orderId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders/${orderId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Retrieves the preview of the order delta metrics and invoice items of a specified order. Preview for subscriptions and order line items are both supported. This operation is only an order preview and no order is created.       <p> Note that the following limitations apply to this operation:      <ul>       <li>Up to 50 subscriptions are allowed in a single call.</li>       <li>Up to 100 order line items are allowed in an order preview.</li>       </ul>
     * @summary Preview an order
     */
    const createOrderPreview = (orderPreviewCreateRequest, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders/preview`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: orderPreviewCreateRequest
        }, options);
    };
    /**
     * Activates a draft order.
     * @summary Activate an order
     */
    const activateOrder = (orderId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders/${orderId}/activate`, method: 'POST',
            params
        }, options);
    };
    /**
     * Cancels a draft order.
     * @summary Cancel an order
     */
    const cancelOrder = (orderId, orderCancellationRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/orders/${orderId}/cancel`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: orderCancellationRequest,
            params
        }, options);
    };
    /**
     * Retrieves the invoice with the given invoice ID.
     * @summary Retrieve an invoice
     */
    const getInvoice = (invoiceId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates an invoice by setting the values of the specified fields. Any fields not provided in the request remain unchanged.
     * @summary Update an invoice
     */
    const patchInvoice = (invoiceId, invoicePatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: invoicePatchRequest,
            params
        }, options);
    };
    /**
     * Deletes an invoice that has not been canceled.
     * @summary Delete an invoice
     */
    const deleteInvoice = (invoiceId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of invoices, starting after cursor. Each entry in the array is a separate invoice object. If no more invoices are available, the resulting array will be empty.
     * @summary List invoices
     */
    const getInvoices = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates an invoice for a subscription.
     * @summary Create an invoice
     */
    const createInvoice = (invoiceCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: invoiceCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves information about all items of invoices.
     * @summary List invoice items
     */
    const getInvoiceItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoice_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Reverses a posted invoice.
     * @summary Reverse an invoice
     */
    const reverseInvoice = (invoiceId, invoiceReverseRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/reverse`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: invoiceReverseRequest,
            params
        }, options);
    };
    /**
     * Opens a draft invoice.
     * @summary Post an invoice
     */
    const postInvoice = (invoiceId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/post`, method: 'POST',
            params
        }, options);
    };
    /**
     * Unposts an open invoice that has not been applied or refunded, and changes its `state` to `draft`.
     * @summary Unpost an invoice
     */
    const unpostInvoice = (invoiceId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/unpost`, method: 'POST',
            params
        }, options);
    };
    /**
     * Emails an email to your customer.
     * @summary Email an invoice
     */
    const emailInvoice = (invoiceId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/email`, method: 'POST'
        }, options);
    };
    /**
     * Pays an invoice using an existing payment method.
     * @summary Pay an invoice
     */
    const payInvoice = (invoiceId, payInvoiceRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/pay`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: payInvoiceRequest,
            params
        }, options);
    };
    /**
     * Cancels an invoice. Only the invoice with the `draft` status can be canceled.
     * @summary Cancel an invoice
     */
    const cancelInvoice = (invoiceId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Writes off an invoice
     * @summary Write off an invoice
     */
    const writeOffInvoice = (invoiceId, writeOffRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/invoices/${invoiceId}/write-off`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: writeOffRequest,
            params
        }, options);
    };
    /**
     * Retrieves the debit memo with the given ID.
     * @summary Retrieve a debit memo
     */
    const getDebitMemo = (debitMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates a debit memo by setting the values of the specified fields. Any fields not provided in the request remain unchanged.
     * @summary Update a debit memo
     */
    const patchDebitMemo = (debitMemoId, debitMemoPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: debitMemoPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a debit memo. This operation cannot be undone once it is performed.
     * @summary Delete a debit memo
     */
    const deleteDebitMemo = (debitMemoId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of debit memoes, starting after cursor. Each entry in the array is a separate invoice object. If no more invoices are available, the resulting array will be empty. This request should never return an error.
     * @summary List debit memos
     */
    const getDebitMemoes = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates debit memo
     * @summary Create a debit memo
     */
    const createDebitMemo = (debitMemoCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: debitMemoCreateRequest,
            params
        }, options);
    };
    /**
     * Cancels a debit memo. Only the debit memos with the `draft` status can be canceled.
     * @summary Cancel a debit memo
     */
    const cancelDebitMemo = (debitMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Lists item information on all or a subset of debit memos.
     * @summary List debit memo items
     */
    const getDebitMemoItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memo_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Opens a draft debit memo.
     * @summary Post a debit memo
     */
    const postsDebitMemo = (debitMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}/post`, method: 'POST',
            params
        }, options);
    };
    /**
     * Unposts an open debit memo that has not been applied or refunded, and changes its `state` to `draft`.
     * @summary Unpost a debit memo
     */
    const unpostsDebitMemo = (debitMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}/unpost`, method: 'POST',
            params
        }, options);
    };
    /**
     * Pays a debit memo using an existing payment method.
     * @summary Pay a debit memo
     */
    const payDebitMemo = (debitMemoId, payDebitMemoRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/debit_memos/${debitMemoId}/pay`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: payDebitMemoRequest,
            params
        }, options);
    };
    /**
     * Retrieves the credit memo with the given ID.
     * @summary Retrieve a credit memo
     */
    const getCreditMemo = (creditMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates a credit memo by setting the values of the specified fields. Any fields not provided in the request remain unchanged.
     * @summary Update a credit memo
     */
    const patchCreditMemo = (creditMemoId, creditMemoPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: creditMemoPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a credit memo. This operation cannot be undone once it is performed.
     * @summary Delete a credit memo
     */
    const deleteCreditMemo = (creditMemoId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of credit memos, starting after cursor. Each entry in the array is a separate credit memo object. If no more credit memos are available, the resulting array will be empty. This request should never return an error.
     * @summary List credit memos
     */
    const getCreditMemos = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new credit memo.
     * @summary Create a credit memo
     */
    const createCreditMemo = (creditMemoCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: creditMemoCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves information about all items of credit memos. A credit memo item is a single line item in a credit memo.
     * @summary List credit memo items
     */
    const getCreditMemoItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memo_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Apply a credit memo to one or more other billing documents.
     * @summary Apply a credit memo
     */
    const applyCreditMemo = (creditMemoId, applyUnapplyCreditMemo, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}/apply`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: applyUnapplyCreditMemo,
            params
        }, options);
    };
    /**
     * Unapply an applied credit memo.
     * @summary Unapply a credit memo
     */
    const unapplyCreditMemo = (creditMemoId, applyUnapplyCreditMemo, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}/unapply`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: applyUnapplyCreditMemo,
            params
        }, options);
    };
    /**
     * Unposts an open credit memo that has not been applied, and changes its `state` to `draft`.
     * @summary Unpost a credit memo
     */
    const unpostCreditMemo = (creditMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}/unpost`, method: 'POST',
            params
        }, options);
    };
    /**
     * Opens a draft credit memo.
     * @summary Post a credit memo
     */
    const postCreditMemo = (creditMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}/post`, method: 'POST',
            params
        }, options);
    };
    /**
     * Cancels a credit memo. Only credit memos with the Draft status can be cancelled.
     * @summary Cancel a credit memo
     */
    const cancelCreditMemo = (creditMemoId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/credit_memos/${creditMemoId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Returns an array of taxation items. Each entry in the array is a separate Taxation Item object. If no more taxation items are available, the resulting array will be empty. This request should never return an error.
     * @summary List taxation items
     */
    const getTaxationItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/taxation_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a taxation item.
     * @summary Create a taxation item
     */
    const createTaxationItem = (taxationItemCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/taxation_items`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: taxationItemCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the taxation item with the given ID.
     * @summary Retrieve a taxation item
     */
    const getTaxationItem = (taxationItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/taxation_items/${taxationItemId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates a taxation item by setting the values of the specified fields. Any fields not provided in the request remain unchanged.
     * @summary Update a taxation item
     */
    const updateTaxationItem = (taxationItemId, taxationItemPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/taxation_items/${taxationItemId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: taxationItemPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a taxation item. This operation cannot be undone once it is performed.
     * @summary Delete a taxation item
     */
    const deleteTaxationItem = (taxationItemId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/taxation_items/${taxationItemId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns an array of payment runs. Each entry in the array is a separate payment run object.       If no more payment runs are available, the resulting array will be empty. This request should never return an error.
     * @summary List payment runs
     */
    const getPaymentRuns = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_runs`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a payment run on a single account, or a batch of customer accounts.
     * @summary Create a payment run
     */
    const createPaymentRuns = (paymentRunCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_runs`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentRunCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the payment run information with the given ID.
     * @summary Retrieve a payment run
     */
    const getPaymentRun = (paymentRunId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_runs/${paymentRunId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates a payment run by setting the values of the specified fields. Any fields not provided in the request remain unchanged.
     * @summary Update a payment run
     */
    const updatePaymentRuns = (paymentRunId, paymentRunPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_runs/${paymentRunId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: paymentRunPatchRequest,
            params
        }, options);
    };
    /**
     * Deletes a payment run. Only the payment runs with the `canceled` or `pending` status can be deleted.
     * @summary Delete a payment run
     */
    const deletePaymentRuns = (paymentRunId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_runs/${paymentRunId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Use this operation to retrieve the detailed information about a specific order line item.
     * @summary Retrieve an order line item
     */
    const getOrderLineItem = (orderLineItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/order_line_items/${orderLineItemId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Use this operation to update the information of a specific order line item.
     * @summary Update an order line item
     */
    const patchOrderLineItem = (orderLineItemId, lineItemPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/order_line_items/${orderLineItemId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: lineItemPatchRequest,
            params
        }, options);
    };
    /**
     * Retrieves the bill run preview information with the given ID.
     * @summary Retrieve a bill run preview
     */
    const getBillRunPreview = (billRunPreviewId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_run_previews/${billRunPreviewId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a bill run preview for a batch of customer accounts.
     * @summary Create a bill run preview
     */
    const createBillRunPreview = (billRunPreviewCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/bill_run_previews`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: billRunPreviewCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the query run with the given ID.
     * @summary Retrieve a query run
     */
    const getQueryRun = (queryRunId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/query_runs/${queryRunId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new query run job.
     * @summary Create a query run
     */
    const createQueryRun = (queryRunCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/query_runs`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: queryRunCreateRequest,
            params
        }, options);
    };
    /**
     * Cancels a query run. This operation is only applicable if the state of the query run is `accepted` or `in_progress`.
     * @summary Cancel a query run
     */
    const cancelQueryRun = (queryRunId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/query_runs/${queryRunId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Returns a  dictionary with a data property that contains an array of fulfillments, starting after the cursor, if used. Each entry in the array is a separate fulfillment object. If no more fulfillment are available, the resulting array will be empty. This request should never return an error.
     * @summary List fulfilllments
     */
    const getFulfillments = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new fulfillment object.
     * @summary Create a fulfillment
     */
    const createFulfillment = (fulfillmentCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentCreateRequest,
            params
        }, options);
    };
    /**
     * Retrieves the fulfillment with the given ID.
     * @summary Retrieve a fulfillment
     */
    const getFulfillment = (fulfillmentId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments/${fulfillmentId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified fulfillment by setting the values of the parameters passed. Any parameters not provided will be left unchanged.
     * @summary Update a fulfillment
     */
    const updateFulfillment = (fulfillmentId, fulfillmentPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments/${fulfillmentId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a fulfillment. It cannot be undone.
     * @summary Delete a fulfillment
     */
    const deleteFulfillment = (fulfillmentId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments/${fulfillmentId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Retrieves the fulfillment item with the given ID.
     * @summary Retrieve a fulfillment item
     */
    const getFulfillmentItem = (fulfillmentItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items/${fulfillmentItemId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified fulfillment item by setting the values of the fields passed. Any fields not provided remain unchanged.
     * @summary Update a fulfillment item
     */
    const updateFulfillmentItem = (fulfillmentItemId, fulfillmentItemPatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items/${fulfillmentItemId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentItemPatchRequest,
            params
        }, options);
    };
    /**
     * Permanently deletes a fulfillment item. This operation cannot be undone.
     * @summary Delete a fulfillment item
     */
    const deleteFulfillmentItem = (fulfillmentItemId, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items/${fulfillmentItemId}`, method: 'DELETE'
        }, options);
    };
    /**
     * Returns a dictionary with a data property that contains an array of fulfillment items, starting after the cursor, if used. Each entry in the array is a separate fulfillment item object. If no more fulfillment item are available, the resulting array will be empty. This request should never return an error.
     * @summary List fulfillment items
     */
    const getFulfillmentItems = (params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items`, method: 'GET',
            params
        }, options);
    };
    /**
     * Creates a new fulfillment item object.
     * @summary Create a fulfillment item
     */
    const createFulfillmentItem = (fulfillmentItemCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentItemCreateRequest,
            params
        }, options);
    };
    /**
     * Creates multiple fulfillments.
     * @summary Create fulfillments
     */
    const createFulfillments = (fulfillmentCreateBulkRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments/bulk_create`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentCreateBulkRequest,
            params
        }, options);
    };
    /**
     * Bulk create fulfillment items.
     * @summary Create fulfillment items
     */
    const createFulfillmentItems = (fulfillmentItemCreateBulkRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/fulfillments_items/bulk_create`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: fulfillmentItemCreateBulkRequest,
            params
        }, options);
    };
    /**
     * Retrieves the payment schedule item with the given ID.
     * @summary Retrieve a payment schedule item
     */
    const getPaymentScheduleItem = (paymentScheduleItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items/${paymentScheduleItemId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified payment schedule item by setting the values of the parameters passed. Any parameters not provided will remain unchanged.
     * @summary Update a payment schedule item
     */
    const updatePaymentScheduleItem = (paymentScheduleItemId, paymentScheduleItemPatch, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items/${paymentScheduleItemId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: paymentScheduleItemPatch,
            params
        }, options);
    };
    /**
     * Creates a new Payment Schedule Item object.
     * @summary Create a payment schedule item
     */
    const createPaymentScheduleItem = (paymentScheduleItemCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentScheduleItemCreateRequest,
            params
        }, options);
    };
    /**
     * Cancels the payment schedule item with the given ID.
     * @summary Cancel a payment schedule item
     */
    const cancelPaymentScheduleItem = (paymentScheduleItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items/${paymentScheduleItemId}/cancel`, method: 'POST',
            params
        }, options);
    };
    /**
     * Retries the payment schedule item with the given ID.
     * @summary Retry a payment shedule item
     */
    const retryPaymentScheduleItem = (paymentScheduleItemId, paymentScheduleItemRetry, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items/${paymentScheduleItemId}/retry`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentScheduleItemRetry,
            params
        }, options);
    };
    /**
     * Skips the payment schedule item with the given ID.
     * @summary Skip a payment schedule item
     */
    const skipPaymentScheduleItem = (paymentScheduleItemId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedule_items/${paymentScheduleItemId}/skip`, method: 'POST',
            params
        }, options);
    };
    /**
     * Retrieves the payment schedule with the given ID.
     * @summary Retrieve a payment schedule
     */
    const getPaymentSchedule = (paymentScheduleId, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedules/${paymentScheduleId}`, method: 'GET',
            params
        }, options);
    };
    /**
     * Updates the specified payment schedule by setting the values of the parameters passed. Any parameters not provided will remain unchanged.
     * @summary Update a payment schedule
     */
    const updatePaymentSchedule = (paymentScheduleId, paymentSchedulePatchRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedules/${paymentScheduleId}`, method: 'PATCH',
            headers: { 'Content-Type': 'application/json', },
            data: paymentSchedulePatchRequest,
            params
        }, options);
    };
    /**
     * Creates a new Payment Schedule object.
     * @summary Create a payment schedule
     */
    const createPaymentSchedule = (paymentScheduleCreateRequest, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedules`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentScheduleCreateRequest,
            params
        }, options);
    };
    /**
     * Cancels the payment schedule with the given ID.
     * @summary Cancel a payment schedule
     */
    const cancelPaymentSchedule = (paymentScheduleId, paymentScheduleCancel, params, options) => {
        return (0, custom_instance_1.customInstance)({ url: `/payment_schedules/${paymentScheduleId}/cancel`, method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            data: paymentScheduleCancel,
            params
        }, options);
    };
    return { getAccounts, createAccount, getAccount, updateAccount, deleteAccount, generateBillingDocuments, previewAccount, getBillingDocument, getBillingDocuments, postBillingDocument, getBillingDocumentItems, getContact, updateContact, deleteContact, getContacts, createContact, scrubContact, getPaymentMethods, createPaymentMethod, getPaymentMethodById, updatePaymentMethod, deletePaymentMethod, verifyPaymentMethod, authorizePaymentMethod, voidAuthorizationPaymentMethod, scrubPaymentMethod, getSubscriptionByKey, patchSubscription, getSubscriptions, createSubscription, pauseSubscription, resumeSubscription, cancelSubscription, uncancelSubscription, activateSubscription, previewSubscription, previewExistingSubscription, getSubscriptionByVersion, runWorkflow, getProduct, updateProduct, deleteProduct, getProducts, createProduct, getPlan, updatePlan, deletePlan, getPlans, createPlan, getPrice, patchPrice, deletePrice, getPrices, createPrice, getPayment, updatePayment, getPayments, createPayment, cancelPayment, applyPayment, unapplyPayment, getSubscriptionPlan, getSubscriptionPlans, getSubscriptionItems, getRefunds, createRefund, getRefund, updateRefund, deleteRefund, cancelRefund, getCustomObjects, createCustomObject, getCustomObject, updateCustomObject, deleteCustomObject, getBillRun, deleteBillRun, getBillRuns, createBillRun, postBillRun, cancelBillRun, getUsageRecords, createUsage, getUsage, updateUsage, deleteUsage, getOrders, createOrder, getOrder, deleteOrder, createOrderPreview, activateOrder, cancelOrder, getInvoice, patchInvoice, deleteInvoice, getInvoices, createInvoice, getInvoiceItems, reverseInvoice, postInvoice, unpostInvoice, emailInvoice, payInvoice, cancelInvoice, writeOffInvoice, getDebitMemo, patchDebitMemo, deleteDebitMemo, getDebitMemoes, createDebitMemo, cancelDebitMemo, getDebitMemoItems, postsDebitMemo, unpostsDebitMemo, payDebitMemo, getCreditMemo, patchCreditMemo, deleteCreditMemo, getCreditMemos, createCreditMemo, getCreditMemoItems, applyCreditMemo, unapplyCreditMemo, unpostCreditMemo, postCreditMemo, cancelCreditMemo, getTaxationItems, createTaxationItem, getTaxationItem, updateTaxationItem, deleteTaxationItem, getPaymentRuns, createPaymentRuns, getPaymentRun, updatePaymentRuns, deletePaymentRuns, getOrderLineItem, patchOrderLineItem, getBillRunPreview, createBillRunPreview, getQueryRun, createQueryRun, cancelQueryRun, getFulfillments, createFulfillment, getFulfillment, updateFulfillment, deleteFulfillment, getFulfillmentItem, updateFulfillmentItem, deleteFulfillmentItem, getFulfillmentItems, createFulfillmentItem, createFulfillments, createFulfillmentItems, getPaymentScheduleItem, updatePaymentScheduleItem, createPaymentScheduleItem, cancelPaymentScheduleItem, retryPaymentScheduleItem, skipPaymentScheduleItem, getPaymentSchedule, updatePaymentSchedule, createPaymentSchedule, cancelPaymentSchedule };
};
exports.getQuickstartAPIReference = getQuickstartAPIReference;
