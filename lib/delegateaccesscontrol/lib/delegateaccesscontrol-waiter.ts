/**
 * Oracle Delegate Access Control API
 * Oracle Delegate Access Control allows ExaCC and ExaCS customers to delegate management of their Exadata resources operators outside their tenancies. 
With Delegate Access Control, Support Providers can deliver managed services using comprehensive and robust tooling built on the OCI platform. 
Customers maintain control over who has access to the delegated resources in their tenancy and what actions can be taken. 
Enterprises managing resources across multiple tenants can use Delegate Access Control to streamline management tasks.
Using logging service, customers can view a near real-time audit report of all actions performed by a Service Provider operator. 

 * OpenAPI spec version: 20230801
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DelegateAccessControlClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DelegateAccessControlWaiter {
  public constructor(
    private client: DelegateAccessControlClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDelegatedResourceAccessRequest till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDelegatedResourceAccessRequestResponse
   */
  public async forDelegatedResourceAccessRequest(
    request: serviceRequests.GetDelegatedResourceAccessRequestRequest,
    ...targetStates: models.DelegatedResourceAccessRequest.LifecycleState[]
  ): Promise<serviceResponses.GetDelegatedResourceAccessRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getDelegatedResourceAccessRequest(request),
      response => targetStates.includes(response.delegatedResourceAccessRequest.lifecycleState!)
    );
  }

  /**
   * Waits forDelegationControl till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDelegationControlResponse | null (null in case of 404 response)
   */
  public async forDelegationControl(
    request: serviceRequests.GetDelegationControlRequest,
    ...targetStates: models.DelegationControl.LifecycleState[]
  ): Promise<serviceResponses.GetDelegationControlResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDelegationControl(request),
      response => targetStates.includes(response.delegationControl.lifecycleState!),
      targetStates.includes(models.DelegationControl.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDelegationSubscription till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDelegationSubscriptionResponse | null (null in case of 404 response)
   */
  public async forDelegationSubscription(
    request: serviceRequests.GetDelegationSubscriptionRequest,
    ...targetStates: models.DelegationSubscription.LifecycleState[]
  ): Promise<serviceResponses.GetDelegationSubscriptionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDelegationSubscription(request),
      response => targetStates.includes(response.delegationSubscription.lifecycleState!),
      targetStates.includes(models.DelegationSubscription.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forServiceProvider till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetServiceProviderResponse | null (null in case of 404 response)
   */
  public async forServiceProvider(
    request: serviceRequests.GetServiceProviderRequest,
    ...targetStates: models.ServiceProvider.LifecycleState[]
  ): Promise<serviceResponses.GetServiceProviderResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getServiceProvider(request),
      response => targetStates.includes(response.serviceProvider.lifecycleState!),
      targetStates.includes(models.ServiceProvider.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forServiceProviderAction till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetServiceProviderActionResponse
   */
  public async forServiceProviderAction(
    request: serviceRequests.GetServiceProviderActionRequest,
    ...targetStates: models.ServiceProviderAction.LifecycleState[]
  ): Promise<serviceResponses.GetServiceProviderActionResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getServiceProviderAction(request),
      response => targetStates.includes(response.serviceProviderAction.lifecycleState!)
    );
  }
}
