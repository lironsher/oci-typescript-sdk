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
 * The current state of SQL firewall policy.
 **/
export enum SqlFirewallPolicyLifecycleState {
  Creating = "CREATING",
  Updating = "UPDATING",
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Failed = "FAILED",
  Deleting = "DELETING",
  Deleted = "DELETED",
  NeedsAttention = "NEEDS_ATTENTION",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SqlFirewallPolicyLifecycleState {
  export function getJsonObj(
    obj: SqlFirewallPolicyLifecycleState
  ): SqlFirewallPolicyLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(
    obj: SqlFirewallPolicyLifecycleState
  ): SqlFirewallPolicyLifecycleState {
    return obj;
  }
}
