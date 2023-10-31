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
 * The metadata details for resource type.
 */
export interface ResourceTypeMetadataDetails {
  "format": string;
}

export namespace ResourceTypeMetadataDetails {
  export function getJsonObj(obj: ResourceTypeMetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "format" in obj && obj.format) {
      switch (obj.format) {
        case "SYSTEM_FORMAT":
          return model.SystemFormatResourceTypeMetadataDetails.getJsonObj(
            <model.SystemFormatResourceTypeMetadataDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.format}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceTypeMetadataDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "format" in obj && obj.format) {
      switch (obj.format) {
        case "SYSTEM_FORMAT":
          return model.SystemFormatResourceTypeMetadataDetails.getDeserializedJsonObj(
            <model.SystemFormatResourceTypeMetadataDetails>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.format}`);
      }
    }
    return jsonObj;
  }
}
