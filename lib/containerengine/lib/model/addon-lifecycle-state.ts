/**
 * Kubernetes Engine API
 * API for the Kubernetes Engine service (also known as the Container Engine for Kubernetes service). Use this API to build, deploy,
and manage cloud-native applications. For more information, see
[Overview of Kubernetes Engine](/iaas/Content/ContEng/Concepts/contengoverview.htm).

 * OpenAPI spec version: 20180222
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
 * The lifecycle state of an addon.
 **/
export enum AddonLifecycleState {
  Creating = "CREATING",
  Active = "ACTIVE",
  Deleting = "DELETING",
  Deleted = "DELETED",
  Updating = "UPDATING",
  NeedsAttention = "NEEDS_ATTENTION",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace AddonLifecycleState {
  export function getJsonObj(obj: AddonLifecycleState): AddonLifecycleState {
    return obj;
  }
  export function getDeserializedJsonObj(obj: AddonLifecycleState): AddonLifecycleState {
    return obj;
  }
}
