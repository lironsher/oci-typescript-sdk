/**
 * Data Integration API
 * Use the Data Integration API to organize your data integration projects, create data flows, pipelines and tasks, and then publish, schedule, and run tasks that extract, transform, and load data. For more information, see [Data Integration](https://docs.oracle.com/iaas/data-integration/home.htm).
 * OpenAPI spec version: 20200430
 * Contact: di_dis_ww_grp@oracle.com
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
 * The operation object.
 */
export interface Operation {
  "metadata"?: model.ObjectMetadata;

  "modelType": string;
}

export namespace Operation {
  export function getJsonObj(obj: Operation): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata ? model.ObjectMetadata.getJsonObj(obj.metadata) : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PROCEDURE":
          return model.OperationFromProcedure.getJsonObj(
            <model.OperationFromProcedure>(<object>jsonObj),
            true
          );
        case "API":
          return model.OperationFromApi.getJsonObj(<model.OperationFromApi>(<object>jsonObj), true);
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: Operation): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? model.ObjectMetadata.getDeserializedJsonObj(obj.metadata)
          : undefined
      }
    };

    if (obj && "modelType" in obj && obj.modelType) {
      switch (obj.modelType) {
        case "PROCEDURE":
          return model.OperationFromProcedure.getDeserializedJsonObj(
            <model.OperationFromProcedure>(<object>jsonObj),
            true
          );
        case "API":
          return model.OperationFromApi.getDeserializedJsonObj(
            <model.OperationFromApi>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.modelType}`);
      }
    }
    return jsonObj;
  }
}
