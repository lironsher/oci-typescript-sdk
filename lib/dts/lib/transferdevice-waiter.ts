/**
 * Data Transfer Service API
 * Data Transfer Service API Specification
 * OpenAPI spec version: 1.0.015
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
import { TransferDeviceClient } from "./client";
import { genericWaiter, genericTerminalConditionWaiter, WaiterConfiguration } from "oci-common";

export class TransferDeviceWaiter {
  public constructor(
    private client: TransferDeviceClient,
    private readonly config?: WaiterConfiguration
  ) {}

  /**
   * Waits forTransferDevice till it reaches any of the provided states
   *
   * @param request the request to send
   * @param targetStates the desired states to wait for. The waiter will return once the resource reaches any of the provided states
   * @return response returns GetTransferDeviceResponse | null (null in case of 404 response)
   */
  public async forTransferDevice(
    request: serviceRequests.GetTransferDeviceRequest,
    ...targetStates: models.TransferDevice.LifecycleState[]
  ): Promise<serviceResponses.GetTransferDeviceResponse | null> {
    return genericTerminalConditionWaiter(
      this.config,
      () => this.client.getTransferDevice(request),
      response => targetStates.includes(response.transferDevice.lifecycleState!),
      targetStates.includes(models.TransferDevice.LifecycleState.Deleted)
    );
  }
}
