/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20230518
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
 * Job phase status details.
 *
 */
export interface PhaseStatus {
  /**
   * Phase name
   *
   */
  "name": model.OdmsJobPhases;
  /**
   * Phase status
   *
   */
  "status": model.JobPhaseStatus;
  /**
   * Duration of the phase in milliseconds
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "durationInMs": number;
  /**
   * True if a Pre-Migration Advisor report is available for this phase. False or null if no report is available.
   *
   */
  "isAdvisorReportAvailable"?: boolean;
  /**
   * The text describing the root cause of the reported issue
   *
   */
  "issue"?: string;
  /**
   * The text describing the action required to fix the issue
   *
   */
  "action"?: string;
  /**
   * Summary of phase status results.
   *
   */
  "extract"?: Array<model.PhaseExtractEntry>;
  "logLocation"?: model.LogLocationBucketDetails;
  /**
   * Percent progress of job phase.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "progress"?: number;
}

export namespace PhaseStatus {
  export function getJsonObj(obj: PhaseStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "extract": obj.extract
          ? obj.extract.map(item => {
              return model.PhaseExtractEntry.getJsonObj(item);
            })
          : undefined,
        "logLocation": obj.logLocation
          ? model.LogLocationBucketDetails.getJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PhaseStatus): object {
    const jsonObj = {
      ...obj,
      ...{
        "extract": obj.extract
          ? obj.extract.map(item => {
              return model.PhaseExtractEntry.getDeserializedJsonObj(item);
            })
          : undefined,
        "logLocation": obj.logLocation
          ? model.LogLocationBucketDetails.getDeserializedJsonObj(obj.logLocation)
          : undefined
      }
    };

    return jsonObj;
  }
}
