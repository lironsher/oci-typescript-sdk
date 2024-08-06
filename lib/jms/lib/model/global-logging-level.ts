/**
 * Java Management Service Fleets API
 * The APIs for the [Fleet Management](https://docs.oracle.com/en-us/iaas/jms/doc/fleet-management.html) feature of Java Management Service to monitor and manage the usage of Java in your enterprise. Use these APIs to manage fleets, configure managed instances to report to fleets, and gain insights into the Java workloads running on these instances by carrying out basic and advanced features.
 * OpenAPI spec version: 20210610
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
 * Possible values for the logging level.
 *
 **/
export enum GlobalLoggingLevel {
  All = "ALL",
  Severe = "SEVERE",
  Warning = "WARNING",
  Info = "INFO",
  Config = "CONFIG",
  Fine = "FINE",
  Finer = "FINER",
  Finest = "FINEST",
  Off = "OFF",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace GlobalLoggingLevel {
  export function getJsonObj(obj: GlobalLoggingLevel): GlobalLoggingLevel {
    return obj;
  }
  export function getDeserializedJsonObj(obj: GlobalLoggingLevel): GlobalLoggingLevel {
    return obj;
  }
}
