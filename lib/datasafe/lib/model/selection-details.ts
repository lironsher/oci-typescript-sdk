/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details of the items to be selected and the mode of selection.
 *
 */
export interface SelectionDetails {
  "selectionMode": string;
}

export namespace SelectionDetails {
  export function getJsonObj(obj: SelectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "selectionMode" in obj && obj.selectionMode) {
      switch (obj.selectionMode) {
        case "LIST":
          return model.ListSelectionMode.getJsonObj(
            <model.ListSelectionMode>(<object>jsonObj),
            true
          );
        case "SCIM_QUERY":
          return model.ScimQuerySelectionMode.getJsonObj(
            <model.ScimQuerySelectionMode>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.selectionMode}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: SelectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "selectionMode" in obj && obj.selectionMode) {
      switch (obj.selectionMode) {
        case "LIST":
          return model.ListSelectionMode.getDeserializedJsonObj(
            <model.ListSelectionMode>(<object>jsonObj),
            true
          );
        case "SCIM_QUERY":
          return model.ScimQuerySelectionMode.getDeserializedJsonObj(
            <model.ScimQuerySelectionMode>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.selectionMode}`);
      }
    }
    return jsonObj;
  }
}
