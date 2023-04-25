/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20200801
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
import { RecipientInvitationClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class RecipientInvitationWaiter {
  public constructor(
    private client: RecipientInvitationClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forRecipientInvitation till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetRecipientInvitationResponse | null (null in case of 404 response)
   */
  public async forRecipientInvitation(
    request: serviceRequests.GetRecipientInvitationRequest,
    ...targetStates: models.LifecycleState[]
  ): Promise<serviceResponses.GetRecipientInvitationResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getRecipientInvitation(request),
      response => targetStates.includes(response.recipientInvitation.lifecycleState!),
      targetStates.includes(models.LifecycleState.Terminated)
    );
  }
}
