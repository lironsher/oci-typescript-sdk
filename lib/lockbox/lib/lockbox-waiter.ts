/**
 * Managed Access API
 * Use the Managed Access API to approve access requests, create and manage templates, and manage resource approval settings. For more information, see [Managed Access Overview](https://docs.oracle.com/iaas/Content/managed-access/home.htm).

Use the table of contents and search tool to explore the Managed Access API.

 * OpenAPI spec version: 20220126
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { LockboxClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class LockboxWaiter {
  public constructor(
    private client: LockboxClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAccessRequest till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAccessRequestResponse
   */
  public async forAccessRequest(
    request: serviceRequests.GetAccessRequestRequest,
    ...targetStates: models.AccessRequest.LifecycleState[]
  ): Promise<serviceResponses.GetAccessRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getAccessRequest(request),
      response => targetStates.includes(response.accessRequest.lifecycleState!)
    );
  }

  /**
   * Waits forApprovalTemplate till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetApprovalTemplateResponse | null (null in case of 404 response)
   */
  public async forApprovalTemplate(
    request: serviceRequests.GetApprovalTemplateRequest,
    ...targetStates: models.ApprovalTemplate.LifecycleState[]
  ): Promise<serviceResponses.GetApprovalTemplateResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getApprovalTemplate(request),
      response => targetStates.includes(response.approvalTemplate.lifecycleState!),
      targetStates.includes(models.ApprovalTemplate.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forLockbox till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLockboxResponse | null (null in case of 404 response)
   */
  public async forLockbox(
    request: serviceRequests.GetLockboxRequest,
    ...targetStates: models.Lockbox.LifecycleState[]
  ): Promise<serviceResponses.GetLockboxResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLockbox(request),
      response => targetStates.includes(response.lockbox.lifecycleState!),
      targetStates.includes(models.Lockbox.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forWorkRequest
   *
   * @param request the request to send
   * @return response returns GetWorkRequestResponse
   */
  public async forWorkRequest(
    request: serviceRequests.GetWorkRequestRequest
  ): Promise<serviceResponses.GetWorkRequestResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getWorkRequest(request),
      response => (response.workRequest.timeFinished ? true : false)
    );
  }
}
