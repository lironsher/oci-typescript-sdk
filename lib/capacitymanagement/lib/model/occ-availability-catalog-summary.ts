/**
 * OCI Control Center Capacity Management API
 * OCI Control Center (OCC) Capacity Management enables you to manage capacity requests in realms where OCI Control Center Capacity Management is available. For more information, see [OCI Control Center](/iaas/Content/control-center/home.htm).
 * OpenAPI spec version: 20231107
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
 * A catalog containing resource availability details for a customer.
 */
export interface OccAvailabilityCatalogSummary {
  /**
   * The OCID of the availability catalog.
   */
  "id": string;
  /**
   * The name of the OCI service in consideration. For example, Compute, Exadata, and so on.
   *
   */
  "namespace": model.Namespace;
  /**
   * The OCID of the tenancy where the availability catalog resides.
   */
  "compartmentId": string;
  /**
   * An user-friendly name for the availability catalog. Does not have to be unique, and is changeable. Avoid entering confidential information.
   */
  "displayName": string;
  /**
   * Text information about the availability catalog.
   */
  "description"?: string;
  /**
   * The Customer Group OCID to which the availability catalog belongs.
   */
  "occCustomerGroupId": string;
  /**
   * Represents whether this version of the availability catalog has been made available to the customer. The state is No by default.
   */
  "catalogState": string;
  "metadataDetails": model.MetadataDetails;
  /**
   * The time when the availability catalog was created.
   */
  "timeCreated": Date;
  /**
   * The time when the availability catalog was last updated.
   */
  "timeUpdated": Date;
  /**
   * The current lifecycle state of the customer group.
   */
  "lifecycleState": string;
  /**
   * A message describing the current state in more detail. For example, can be used to provide actionable information for a resource in a Failed State.
   */
  "lifecycleDetails"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * System tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace OccAvailabilityCatalogSummary {
  export function getJsonObj(obj: OccAvailabilityCatalogSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadataDetails": obj.metadataDetails
          ? model.MetadataDetails.getJsonObj(obj.metadataDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: OccAvailabilityCatalogSummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadataDetails": obj.metadataDetails
          ? model.MetadataDetails.getDeserializedJsonObj(obj.metadataDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
