/**
 * Database Tools
 * Use the Database Tools API to manage connections, private endpoints, and work requests in the Database Tools service.
 * OpenAPI spec version: 20201005
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
 * The proxy client information.
 */
export interface DatabaseToolsConnectionOracleDatabaseProxyClient {
  "proxyAuthenticationType": string;
}

export namespace DatabaseToolsConnectionOracleDatabaseProxyClient {
  export function getJsonObj(obj: DatabaseToolsConnectionOracleDatabaseProxyClient): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "proxyAuthenticationType" in obj && obj.proxyAuthenticationType) {
      switch (obj.proxyAuthenticationType) {
        case "NO_PROXY":
          return model.DatabaseToolsConnectionOracleDatabaseProxyClientNoProxy.getJsonObj(
            <model.DatabaseToolsConnectionOracleDatabaseProxyClientNoProxy>(<object>jsonObj),
            true
          );
        case "USER_NAME":
          return model.DatabaseToolsConnectionOracleDatabaseProxyClientUserName.getJsonObj(
            <model.DatabaseToolsConnectionOracleDatabaseProxyClientUserName>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.proxyAuthenticationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: DatabaseToolsConnectionOracleDatabaseProxyClient
  ): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "proxyAuthenticationType" in obj && obj.proxyAuthenticationType) {
      switch (obj.proxyAuthenticationType) {
        case "NO_PROXY":
          return model.DatabaseToolsConnectionOracleDatabaseProxyClientNoProxy.getDeserializedJsonObj(
            <model.DatabaseToolsConnectionOracleDatabaseProxyClientNoProxy>(<object>jsonObj),
            true
          );
        case "USER_NAME":
          return model.DatabaseToolsConnectionOracleDatabaseProxyClientUserName.getDeserializedJsonObj(
            <model.DatabaseToolsConnectionOracleDatabaseProxyClientUserName>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.proxyAuthenticationType}`);
      }
    }
    return jsonObj;
  }
}
