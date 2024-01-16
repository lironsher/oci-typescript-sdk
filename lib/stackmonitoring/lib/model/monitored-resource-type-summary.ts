/**
 * Stack Monitoring API
 * Stack Monitoring API.
 * OpenAPI spec version: 20210330
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
 * The summary of monitored resource type.
 */
export interface MonitoredResourceTypeSummary {
  /**
   * Monitored resource type identifier [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm).
   *
   */
  "id": string;
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
   * Metric namespace for resource type.
   */
  "metricNamespace"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the tenancy containing the resource type.
   *
   */
  "compartmentId": string;
  /**
   * Lifecycle state of the monitored resource type.
   */
  "lifecycleState"?: model.ResourceTypeLifecycleState;
  "metadata"?: model.SystemFormatResourceTypeMetadataDetails;
  /**
   * The date and time when the monitored resource type was created, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeCreated"?: Date;
  /**
   * The date and time when the monitored resource was updated, expressed in
   * [RFC 3339](https://tools.ietf.org/html/rfc3339) timestamp format.
   *
   */
  "timeUpdated"?: Date;
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
   * Usage of system tag keys. These predefined keys are scoped to namespaces.
   * Example: {@code {\"orcl-cloud\": {\"free-tier-retained\": \"true\"}}}
   *
   */
  "systemTags"?: { [key: string]: { [key: string]: any } };
}

export namespace MonitoredResourceTypeSummary {
  export function getJsonObj(obj: MonitoredResourceTypeSummary): object {
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
  export function getDeserializedJsonObj(obj: MonitoredResourceTypeSummary): object {
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
