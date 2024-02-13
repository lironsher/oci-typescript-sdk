/**
 * Container Instance API
 * A description of the Container Instance API
 * OpenAPI spec version: 20210415
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Type of container health check which could be either HTTP, TCP, or Command.
 */
export interface ContainerHealthCheck {
  /**
   * Health check name.
   */
  "name"?: string;
  /**
   * The initial delay in seconds before start checking container health status. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "initialDelayInSeconds"?: number;
  /**
   * Number of seconds between two consecutive runs for checking container health. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "intervalInSeconds"?: number;
  /**
   * Number of consecutive failures at which we consider the check failed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "failureThreshold"?: number;
  /**
   * Number of consecutive successes at which we consider the check succeeded again after it was in failure state. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "successThreshold"?: number;
  /**
   * Length of waiting time in seconds before marking health check failed. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "timeoutInSeconds"?: number;
  /**
   * Status of container
   */
  "status"?: ContainerHealthCheck.Status;
  /**
   * A message describing the current status in more details.
   */
  "statusDetails"?: string;
  /**
   * The action will be triggered when the container health check fails. There are two types of action: KILL or NONE. The default
   * action is KILL. If failure action is KILL, the container will be subject to the container restart policy.
   *
   */
  "failureAction"?: model.ContainerHealthCheckFailureAction;

  "healthCheckType": string;
}

export namespace ContainerHealthCheck {
  export enum Status {
    Healthy = "HEALTHY",
    Unhealthy = "UNHEALTHY",
    Unknown = "UNKNOWN",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ContainerHealthCheck): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "healthCheckType" in obj && obj.healthCheckType) {
      switch (obj.healthCheckType) {
        case "TCP":
          return model.ContainerTcpHealthCheck.getJsonObj(
            <model.ContainerTcpHealthCheck>(<object>jsonObj),
            true
          );
        case "HTTP":
          return model.ContainerHttpHealthCheck.getJsonObj(
            <model.ContainerHttpHealthCheck>(<object>jsonObj),
            true
          );
        case "COMMAND":
          return model.ContainerCommandHealthCheck.getJsonObj(
            <model.ContainerCommandHealthCheck>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.healthCheckType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ContainerHealthCheck): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "healthCheckType" in obj && obj.healthCheckType) {
      switch (obj.healthCheckType) {
        case "TCP":
          return model.ContainerTcpHealthCheck.getDeserializedJsonObj(
            <model.ContainerTcpHealthCheck>(<object>jsonObj),
            true
          );
        case "HTTP":
          return model.ContainerHttpHealthCheck.getDeserializedJsonObj(
            <model.ContainerHttpHealthCheck>(<object>jsonObj),
            true
          );
        case "COMMAND":
          return model.ContainerCommandHealthCheck.getDeserializedJsonObj(
            <model.ContainerCommandHealthCheck>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.healthCheckType}`);
      }
    }
    return jsonObj;
  }
}
