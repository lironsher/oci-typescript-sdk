/**
 * Big Data Service API
 * REST API for Oracle Big Data Service. Use this API to build, deploy, and manage fully elastic Big Data Service clusters. Build on Hadoop, Spark and Data Science distributions, which can be fully integrated with existing enterprise data in Oracle Database and Oracle applications.

 * OpenAPI spec version: 20190531
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
import { BdsClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class BdsWaiter {
  public constructor(private client: BdsClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forAutoScalingConfiguration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAutoScalingConfigurationResponse | null (null in case of 404 response)
   */
  public async forAutoScalingConfiguration(
    request: serviceRequests.GetAutoScalingConfigurationRequest,
    ...targetStates: models.AutoScalingConfiguration.LifecycleState[]
  ): Promise<serviceResponses.GetAutoScalingConfigurationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAutoScalingConfiguration(request),
      response => targetStates.includes(response.autoScalingConfiguration.lifecycleState!),
      targetStates.includes(models.AutoScalingConfiguration.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forBdsApiKey till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBdsApiKeyResponse | null (null in case of 404 response)
   */
  public async forBdsApiKey(
    request: serviceRequests.GetBdsApiKeyRequest,
    ...targetStates: models.BdsApiKey.LifecycleState[]
  ): Promise<serviceResponses.GetBdsApiKeyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBdsApiKey(request),
      response => targetStates.includes(response.bdsApiKey.lifecycleState!),
      targetStates.includes(models.BdsApiKey.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forBdsInstance till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBdsInstanceResponse | null (null in case of 404 response)
   */
  public async forBdsInstance(
    request: serviceRequests.GetBdsInstanceRequest,
    ...targetStates: models.BdsInstance.LifecycleState[]
  ): Promise<serviceResponses.GetBdsInstanceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBdsInstance(request),
      response => targetStates.includes(response.bdsInstance.lifecycleState!),
      targetStates.includes(models.BdsInstance.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forBdsMetastoreConfiguration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetBdsMetastoreConfigurationResponse | null (null in case of 404 response)
   */
  public async forBdsMetastoreConfiguration(
    request: serviceRequests.GetBdsMetastoreConfigurationRequest,
    ...targetStates: models.BdsMetastoreConfiguration.LifecycleState[]
  ): Promise<serviceResponses.GetBdsMetastoreConfigurationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getBdsMetastoreConfiguration(request),
      response => targetStates.includes(response.bdsMetastoreConfiguration.lifecycleState!),
      targetStates.includes(models.BdsMetastoreConfiguration.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forNodeBackup till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNodeBackupResponse | null (null in case of 404 response)
   */
  public async forNodeBackup(
    request: serviceRequests.GetNodeBackupRequest,
    ...targetStates: models.NodeBackup.LifecycleState[]
  ): Promise<serviceResponses.GetNodeBackupResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNodeBackup(request),
      response => targetStates.includes(response.nodeBackup.lifecycleState!),
      targetStates.includes(models.NodeBackup.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forNodeBackupConfiguration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNodeBackupConfigurationResponse | null (null in case of 404 response)
   */
  public async forNodeBackupConfiguration(
    request: serviceRequests.GetNodeBackupConfigurationRequest,
    ...targetStates: models.NodeBackupConfiguration.LifecycleState[]
  ): Promise<serviceResponses.GetNodeBackupConfigurationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNodeBackupConfiguration(request),
      response => targetStates.includes(response.nodeBackupConfiguration.lifecycleState!),
      targetStates.includes(models.NodeBackupConfiguration.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forNodeReplaceConfiguration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNodeReplaceConfigurationResponse | null (null in case of 404 response)
   */
  public async forNodeReplaceConfiguration(
    request: serviceRequests.GetNodeReplaceConfigurationRequest,
    ...targetStates: models.NodeReplaceConfiguration.LifecycleState[]
  ): Promise<serviceResponses.GetNodeReplaceConfigurationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNodeReplaceConfiguration(request),
      response => targetStates.includes(response.nodeReplaceConfiguration.lifecycleState!),
      targetStates.includes(models.NodeReplaceConfiguration.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forResourcePrincipalConfiguration till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetResourcePrincipalConfigurationResponse | null (null in case of 404 response)
   */
  public async forResourcePrincipalConfiguration(
    request: serviceRequests.GetResourcePrincipalConfigurationRequest,
    ...targetStates: models.ResourcePrincipalConfiguration.LifecycleState[]
  ): Promise<serviceResponses.GetResourcePrincipalConfigurationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getResourcePrincipalConfiguration(request),
      response => targetStates.includes(response.resourcePrincipalConfiguration.lifecycleState!),
      targetStates.includes(models.ResourcePrincipalConfiguration.LifecycleState.Deleted)
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
