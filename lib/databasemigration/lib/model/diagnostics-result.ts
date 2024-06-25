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
 * Result from Database Connection Diagnostic action.
 *
 */
export interface DiagnosticsResult {
  /**
   * Type of the Result (i.e. Success or Failure).
   *
   */
  "resultType": model.ResultType;
  "error"?: model.ResultError;
}

export namespace DiagnosticsResult {
  export function getJsonObj(obj: DiagnosticsResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error ? model.ResultError.getJsonObj(obj.error) : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: DiagnosticsResult): object {
    const jsonObj = {
      ...obj,
      ...{
        "error": obj.error ? model.ResultError.getDeserializedJsonObj(obj.error) : undefined
      }
    };

    return jsonObj;
  }
}
