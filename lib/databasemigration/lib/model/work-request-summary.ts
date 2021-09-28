/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Note: Deprecated. Use the new resource model APIs instead.
 * A summary of the status of a work request.
 *
 */
export interface WorkRequestSummary {
  /**
   * The asynchronous operation tracked by this work request.
   *
   */
  "operationType": string;
  /**
   * The status of the work request.
   *
   */
  "status": WorkRequestSummary.Status;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the work request.
   *
   */
  "id": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the compartment containing
   * this work request.
   *
   */
  "compartmentId": string;
  /**
   * The percentage complete of the operation tracked by this work request.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "percentComplete": number;
  /**
   * The date and time the work request was created, in the format defined by RFC3339.
   *
   */
  "timeAccepted": Date;
  /**
   * The date and time the work request transitioned from `ACCEPTED` to `IN_PROGRESS`, in
   * the format defined by RFC3339.
   *
   */
  "timeStarted"?: Date;
  /**
   * The date and time the work request reached a terminal state, either `FAILED` or `SUCCEEDED`.
   * Format is defined by RFC3339.
   *
   */
  "timeFinished"?: Date;
}

export namespace WorkRequestSummary {
  export enum Status {
    Accepted = "ACCEPTED",
    InProgress = "IN_PROGRESS",
    Failed = "FAILED",
    Succeeded = "SUCCEEDED",
    Canceling = "CANCELING",
    Canceled = "CANCELED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: WorkRequestSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
