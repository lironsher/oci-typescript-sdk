/**
 * Data Catalog API
 * Use the Data Catalog APIs to collect, organize, find, access, understand, enrich, and activate technical, business, and operational metadata.
 * OpenAPI spec version: 20190325
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as serviceRequests from "./request";
import * as serviceResponses from "./response";
import * as models from "./model";
import { DataCatalogClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class DataCatalogWaiter {
  public constructor(
    private client: DataCatalogClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forAttribute till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAttributeResponse | null (null in case of 404 response)
   */
  public async forAttribute(
    request: serviceRequests.GetAttributeRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetAttributeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAttribute(request),
      response => targetStates.includes(response.attribute.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forAttributeTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetAttributeTagResponse | null (null in case of 404 response)
   */
  public async forAttributeTag(
    request: serviceRequests.GetAttributeTagRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetAttributeTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getAttributeTag(request),
      response => targetStates.includes(response.attributeTag.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forCatalog till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCatalogResponse | null (null in case of 404 response)
   */
  public async forCatalog(
    request: serviceRequests.GetCatalogRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetCatalogResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCatalog(request),
      response => targetStates.includes(response.catalog.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forCatalogPrivateEndpoint till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCatalogPrivateEndpointResponse | null (null in case of 404 response)
   */
  public async forCatalogPrivateEndpoint(
    request: serviceRequests.GetCatalogPrivateEndpointRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetCatalogPrivateEndpointResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCatalogPrivateEndpoint(request),
      response => targetStates.includes(response.catalogPrivateEndpoint.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forConnection till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetConnectionResponse | null (null in case of 404 response)
   */
  public async forConnection(
    request: serviceRequests.GetConnectionRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetConnectionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getConnection(request),
      response => targetStates.includes(response.connection.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forCustomProperty till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetCustomPropertyResponse | null (null in case of 404 response)
   */
  public async forCustomProperty(
    request: serviceRequests.GetCustomPropertyRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetCustomPropertyResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getCustomProperty(request),
      response => targetStates.includes(response.customProperty.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDataAsset till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDataAssetResponse | null (null in case of 404 response)
   */
  public async forDataAsset(
    request: serviceRequests.GetDataAssetRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDataAssetResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDataAsset(request),
      response => targetStates.includes(response.dataAsset.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forDataAssetTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetDataAssetTagResponse | null (null in case of 404 response)
   */
  public async forDataAssetTag(
    request: serviceRequests.GetDataAssetTagRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetDataAssetTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getDataAssetTag(request),
      response => targetStates.includes(response.dataAssetTag.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forEntity till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEntityResponse | null (null in case of 404 response)
   */
  public async forEntity(
    request: serviceRequests.GetEntityRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetEntityResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEntity(request),
      response => targetStates.includes(response.entity.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forEntityTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetEntityTagResponse | null (null in case of 404 response)
   */
  public async forEntityTag(
    request: serviceRequests.GetEntityTagRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetEntityTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getEntityTag(request),
      response => targetStates.includes(response.entityTag.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forFolder till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFolderResponse | null (null in case of 404 response)
   */
  public async forFolder(
    request: serviceRequests.GetFolderRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetFolderResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFolder(request),
      response => targetStates.includes(response.folder.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forFolderTag till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetFolderTagResponse | null (null in case of 404 response)
   */
  public async forFolderTag(
    request: serviceRequests.GetFolderTagRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetFolderTagResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getFolderTag(request),
      response => targetStates.includes(response.folderTag.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forGlossary till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetGlossaryResponse | null (null in case of 404 response)
   */
  public async forGlossary(
    request: serviceRequests.GetGlossaryRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetGlossaryResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getGlossary(request),
      response => targetStates.includes(response.glossary.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forJob till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobResponse
   */
  public async forJob(
    request: serviceRequests.GetJobRequest,
    ...targetStates: models.JobLifecycleState[]
  ): Promise<serviceResponses.GetJobResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getJob(request),
      response => targetStates.includes(response.job.lifecycleState!)
    );
  }

  /**
   * Waits forJobDefinition till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobDefinitionResponse | null (null in case of 404 response)
   */
  public async forJobDefinition(
    request: serviceRequests.GetJobDefinitionRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetJobDefinitionResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getJobDefinition(request),
      response => targetStates.includes(response.jobDefinition.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forJobExecution till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetJobExecutionResponse
   */
  public async forJobExecution(
    request: serviceRequests.GetJobExecutionRequest,
    ...targetStates: models.JobExecutionState[]
  ): Promise<serviceResponses.GetJobExecutionResponse> {
    return genericWaiter(
      this.config,
      () => this.client.getJobExecution(request),
      response => targetStates.includes(response.jobExecution.lifecycleState!)
    );
  }

  /**
   * Waits forNamespace till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetNamespaceResponse | null (null in case of 404 response)
   */
  public async forNamespace(
    request: serviceRequests.GetNamespaceRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetNamespaceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getNamespace(request),
      response => targetStates.includes(response.namespace.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forPattern till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetPatternResponse | null (null in case of 404 response)
   */
  public async forPattern(
    request: serviceRequests.GetPatternRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetPatternResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getPattern(request),
      response => targetStates.includes(response.pattern.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTerm till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTermResponse | null (null in case of 404 response)
   */
  public async forTerm(
    request: serviceRequests.GetTermRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetTermResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTerm(request),
      response => targetStates.includes(response.term.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forTermRelationship till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTermRelationshipResponse | null (null in case of 404 response)
   */
  public async forTermRelationship(
    request: serviceRequests.GetTermRelationshipRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetTermRelationshipResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTermRelationship(request),
      response => targetStates.includes(response.termRelationship.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
    );
  }

  /**
   * Waits forType till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTypeResponse | null (null in case of 404 response)
   */
  public async forType(
    request: serviceRequests.GetTypeRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetTypeResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getType(request),
      response => targetStates.includes(response.type.lifecycleState!),
      targetStates.includes(models.LifecycleState.Deleted)
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
