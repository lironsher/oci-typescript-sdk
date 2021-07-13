/**
 * Oracle Cloud AI Services API
 * OCI AI Service solutions can help Enterprise customers integrate AI into their products immediately by using our proven,
pre-trained/custom models or containers, and without a need to set up in house team of AI and ML experts.
This allows enterprises to focus on business drivers and development work rather than AI/ML operations, shortening the time to market.

 * OpenAPI spec version: 20210101
 * 
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2021, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as model from "../model";
import common = require("oci-common");

/**
 * Possible data sources
 */
export interface InfluxDetails {
  "influxVersion": string;
}

export namespace InfluxDetails {
  export function getJsonObj(obj: InfluxDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("influxVersion" in obj && obj.influxVersion) {
      switch (obj.influxVersion) {
        case "V_1_8":
          return model.InfluxDetailsV1v8.getJsonObj(
            <model.InfluxDetailsV1v8>(<object>jsonObj),
            true
          );
        case "V_2_0":
          return model.InfluxDetailsV2v0.getJsonObj(
            <model.InfluxDetailsV2v0>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.influxVersion);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: InfluxDetails): object {
    const jsonObj = { ...obj, ...{} };

    if ("influxVersion" in obj && obj.influxVersion) {
      switch (obj.influxVersion) {
        case "V_1_8":
          return model.InfluxDetailsV1v8.getDeserializedJsonObj(
            <model.InfluxDetailsV1v8>(<object>jsonObj),
            true
          );
        case "V_2_0":
          return model.InfluxDetailsV2v0.getDeserializedJsonObj(
            <model.InfluxDetailsV2v0>(<object>jsonObj),
            true
          );
        default:
          throw Error("Unknown value for: " + obj.influxVersion);
      }
    }
    return jsonObj;
  }
}
