/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * The SQL firewall related configurations.
 *
 */
export interface SqlFirewallConfig {
  /**
   * Specifies if the firewall is enabled or disabled on the target database.
   */
  "status": SqlFirewallConfig.Status;
  /**
   * Specifies whether Data Safe should automatically purge the violation logs
   * from the database after collecting the violation logs and persisting on Data Safe.
   *
   */
  "violationLogAutoPurge": SqlFirewallConfig.ViolationLogAutoPurge;
  /**
   * Specifies whether the firewall should include or exclude the database internal job activities.
   */
  "excludeJob"?: SqlFirewallConfig.ExcludeJob;
  /**
   * The most recent time when the firewall status is updated, in the format defined by RFC3339.
   */
  "timeStatusUpdated"?: Date;
}

export namespace SqlFirewallConfig {
  export enum Status {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ViolationLogAutoPurge {
    Enabled = "ENABLED",
    Disabled = "DISABLED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export enum ExcludeJob {
    Excluded = "EXCLUDED",
    Included = "INCLUDED",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: SqlFirewallConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SqlFirewallConfig): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
