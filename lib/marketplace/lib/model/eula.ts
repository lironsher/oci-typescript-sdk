/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * A base object for all types of end user license agreements.
 */
export interface Eula {
  "eulaType": string;
}

export namespace Eula {
  export function getJsonObj(obj: Eula): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "eulaType" in obj && obj.eulaType) {
      switch (obj.eulaType) {
        case "TEXT":
          return model.TextBasedEula.getJsonObj(<model.TextBasedEula>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.eulaType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Eula): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "eulaType" in obj && obj.eulaType) {
      switch (obj.eulaType) {
        case "TEXT":
          return model.TextBasedEula.getDeserializedJsonObj(
            <model.TextBasedEula>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.eulaType}`);
      }
    }
    return jsonObj;
  }
}
