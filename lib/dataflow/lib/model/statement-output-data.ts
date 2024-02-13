/**
 * Data Flow API
 * Use the Data Flow APIs to run any Apache Spark application at any scale without deploying or managing any infrastructure.

 * OpenAPI spec version: 20200129
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
 * An object representing execution output of a statement.
 *
 */
export interface StatementOutputData {
  "type": string;
}

export namespace StatementOutputData {
  export function getJsonObj(obj: StatementOutputData): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IMAGE_PNG":
          return model.ImagePngStatementOutputData.getJsonObj(
            <model.ImagePngStatementOutputData>(<object>jsonObj),
            true
          );
        case "TEXT_HTML":
          return model.TextHtmlStatementOutputData.getJsonObj(
            <model.TextHtmlStatementOutputData>(<object>jsonObj),
            true
          );
        case "TEXT_PLAIN":
          return model.TextPlainStatementOutputData.getJsonObj(
            <model.TextPlainStatementOutputData>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: StatementOutputData): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "type" in obj && obj.type) {
      switch (obj.type) {
        case "IMAGE_PNG":
          return model.ImagePngStatementOutputData.getDeserializedJsonObj(
            <model.ImagePngStatementOutputData>(<object>jsonObj),
            true
          );
        case "TEXT_HTML":
          return model.TextHtmlStatementOutputData.getDeserializedJsonObj(
            <model.TextHtmlStatementOutputData>(<object>jsonObj),
            true
          );
        case "TEXT_PLAIN":
          return model.TextPlainStatementOutputData.getDeserializedJsonObj(
            <model.TextPlainStatementOutputData>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.type}`);
      }
    }
    return jsonObj;
  }
}
