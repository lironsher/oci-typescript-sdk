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
 * Details about the create request for the availability catalog.
 */
export interface CreateOccAvailabilityCatalogDetails {
  /**
   * The OCID of the customer group.
   */
  "occCustomerGroupId": string;
  /**
   * The name of the OCI service in consideration. For example, Compute, Exadata, and so on.
   */
  "namespace": model.Namespace;
  /**
   * Since all resources are at tenancy level hence this will be the ocid of the tenancy where operation is to be performed.
   */
  "compartmentId": string;
  /**
   * The base 64 encoded string corresponding to the catalog file contents.
   */
  "base64EncodedCatalogDetails": string;
  "metadataDetails"?: model.MetadataDetails;
  /**
   * The display name of the availability catalog.
   */
  "displayName": string;
  /**
   * Additional information about the availability catalog.
   */
  "description"?: string;
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
}

export namespace CreateOccAvailabilityCatalogDetails {
  export function getJsonObj(obj: CreateOccAvailabilityCatalogDetails): object {
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
  export function getDeserializedJsonObj(obj: CreateOccAvailabilityCatalogDetails): object {
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
