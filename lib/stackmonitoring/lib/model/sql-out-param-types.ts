/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
 *
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible out parameter types of SQL collection method
 **/
export enum SqlOutParamTypes {
  SqlCursor = "SQL_CURSOR",
  Array = "ARRAY",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SqlOutParamTypes {
  export function getJsonObj(obj: SqlOutParamTypes): SqlOutParamTypes {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SqlOutParamTypes): SqlOutParamTypes {
    return obj;
  }
}
