/**
 * TenantManager API
 * A description of the TenantManager API
 * OpenAPI spec version: 20200801
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
import { LinkClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class LinkWaiter {
  public constructor(private client: LinkClient, private readonly config?: WaiterConfiguration) {}

  /**
   * Waits forLink till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetLinkResponse | null (null in case of 404 response)
   */
  public async forLink(
    request: serviceRequests.GetLinkRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetLinkResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getLink(request),
      response => targetStates.includes(response.link.lifecycleState!),
      targetStates.includes(models.LifecycleState.Terminated)
    );
  }
}
