/**
 * Full Stack Disaster Recovery API
 * Use the Full Stack Disaster Recovery (DR) API to manage disaster recovery for business applications.
Full Stack DR is an OCI disaster recovery orchestration and management service that provides comprehensive disaster 
recovery capabilities for all layers of an application stack, including infrastructure, middleware, database, 
and application.

 * OpenAPI spec version: 20220125
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
import { DisasterRecoveryClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DisasterRecoveryWaiter {
  public constructor(
    private client: DisasterRecoveryClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forDrPlan till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDrPlanResponse | null (null in case of 404 response)
   */
  public async forDrPlan(
    request: serviceRequests.GetDrPlanRequest,
    ...targetStates: models.DrPlanLifecycleState[]
  ): Promise<serviceResponses.GetDrPlanResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDrPlan(request),
      response => targetStates.includes(response.drPlan.lifecycleState!),
      targetStates.includes(models.DrPlanLifecycleState.Deleted)
    );
  }

  /**
   * Waits forDrPlanExecution till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDrPlanExecutionResponse | null (null in case of 404 response)
   */
  public async forDrPlanExecution(
    request: serviceRequests.GetDrPlanExecutionRequest,
    ...targetStates: models.DrPlanExecutionLifecycleState[]
  ): Promise<serviceResponses.GetDrPlanExecutionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDrPlanExecution(request),
      response => targetStates.includes(response.drPlanExecution.lifecycleState!),
      targetStates.includes(models.DrPlanExecutionLifecycleState.Deleted)
    );
  }

  /**
   * Waits forDrProtectionGroup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDrProtectionGroupResponse | null (null in case of 404 response)
   */
  public async forDrProtectionGroup(
    request: serviceRequests.GetDrProtectionGroupRequest,
    ...targetStates: models.DrProtectionGroupLifecycleState[]
  ): Promise<serviceResponses.GetDrProtectionGroupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDrProtectionGroup(request),
      response => targetStates.includes(response.drProtectionGroup.lifecycleState!),
      targetStates.includes(models.DrProtectionGroupLifecycleState.Deleted)
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
