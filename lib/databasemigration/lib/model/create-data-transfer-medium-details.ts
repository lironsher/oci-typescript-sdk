/**
 * Database Migration API
 * Use the Oracle Cloud Infrastructure Database Migration APIs to perform database migration operations.
 * OpenAPI spec version: 20200720
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
 * Note: Deprecated. Use the new resource model APIs instead.
 * Data Transfer Medium details for the Migration. If not specified, it will default to Database Link. Only one type
 * of data transfer medium can be specified.
 *
 */
export interface CreateDataTransferMediumDetails {
  "databaseLinkDetails"?: model.CreateDatabaseLinkDetails;
  "objectStorageDetails"?: model.CreateObjectStoreBucket;
}

export namespace CreateDataTransferMediumDetails {
  export function getJsonObj(obj: CreateDataTransferMediumDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseLinkDetails": obj.databaseLinkDetails
          ? model.CreateDatabaseLinkDetails.getJsonObj(obj.databaseLinkDetails)
          : undefined,
        "objectStorageDetails": obj.objectStorageDetails
          ? model.CreateObjectStoreBucket.getJsonObj(obj.objectStorageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDataTransferMediumDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "databaseLinkDetails": obj.databaseLinkDetails
          ? model.CreateDatabaseLinkDetails.getDeserializedJsonObj(obj.databaseLinkDetails)
          : undefined,
        "objectStorageDetails": obj.objectStorageDetails
          ? model.CreateObjectStoreBucket.getDeserializedJsonObj(obj.objectStorageDetails)
          : undefined
      }
    };

    return jsonObj;
  }
}
