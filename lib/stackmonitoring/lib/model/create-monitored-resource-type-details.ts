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
 * The information about new monitored resource type. The resource type name should be unique across tenancy.
 * A set of resource types are created by the service by default. These resource types are available
 * for all tenancies. Service provided resource types can not be duplicated or overwritten in any tenancy.
 *
 */
export interface CreateMonitoredResourceTypeDetails {
  /**
   * A unique monitored resource type name. The name must be unique across tenancy.
   * Name can not be changed.
   *
   */
  "name": string;
  /**
   * Monitored resource type display name.
   */
  "displayName"?: string;
  /**
   * A friendly description.
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the tenancy containing the resource type.
   *
   */
  "compartmentId": string;
  /**
   * Metric namespace for resource type.
   */
  "metricNamespace"?: string;
  "metadata"?: model.SystemFormatResourceTypeMetadataDetails;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: `{\"bar-key\": \"value\"}`
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: `{\"foo-namespace\": {\"bar-key\": \"value\"}}`
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace CreateMonitoredResourceTypeDetails {
  export function getJsonObj(obj: CreateMonitoredResourceTypeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ResourceTypeMetadataDetails.getJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateMonitoredResourceTypeDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ResourceTypeMetadataDetails.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    return jsonObj;
  }
}
