/**
 * Organizations API
 * Use the Organizations API to consolidate multiple OCI tenancies into an organization, and centrally manage your tenancies and organization resources. For more information, see [Organization Management Overview](/iaas/Content/General/Concepts/organization_management_overview.htm).
 * OpenAPI spec version: 20200801
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
 * Possible statuses for a sender invitation.
 **/
export enum SenderInvitationStatus {
  Pending = "PENDING",
  Canceled = "CANCELED",
  Accepted = "ACCEPTED",
  Expired = "EXPIRED",
  Failed = "FAILED",

  /**
   * This value is used if a service returns a value for this enum that is not recognized by this
   * version of the SDK.
   */
  UnknownValue = "UNKNOWN_VALUE"
}

export namespace SenderInvitationStatus {
  export function getJsonObj(obj: SenderInvitationStatus): SenderInvitationStatus {
    return obj;
  }
  export function getDeserializedJsonObj(obj: SenderInvitationStatus): SenderInvitationStatus {
    return obj;
  }
}
