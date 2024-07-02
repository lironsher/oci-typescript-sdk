/**
 * Ops Insights API
 * Use the Ops Insights API to perform data extraction operations to obtain database
resource utilization, performance statistics, and reference information. For more information,
see [About Oracle Cloud Infrastructure Ops Insights](https://docs.cloud.oracle.com/en-us/iaas/operations-insights/doc/operations-insights.html).

 * OpenAPI spec version: 20200630
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
 * Unit details of a data object column of RATE unit category.
 */
export interface DataObjectRateColumnUnit extends model.DataObjectColumnUnit {
  "numerator"?:
    | model.DataObjectCoreColumnUnit
    | model.DataObjectTimeColumnUnit
    | model.DataObjectOtherStandardColumnUnit
    | model.DataObjectCustomColumnUnit
    | model.DataObjectTemperatureColumnUnit
    | model.DataObjectPowerColumnUnit
    | model.DataObjectRateColumnUnit
    | model.DataObjectFrequencyColumnUnit
    | model.DataObjectDataSizeColumnUnit;
  "denominator"?:
    | model.DataObjectCoreColumnUnit
    | model.DataObjectTimeColumnUnit
    | model.DataObjectOtherStandardColumnUnit
    | model.DataObjectCustomColumnUnit
    | model.DataObjectTemperatureColumnUnit
    | model.DataObjectPowerColumnUnit
    | model.DataObjectRateColumnUnit
    | model.DataObjectFrequencyColumnUnit
    | model.DataObjectDataSizeColumnUnit;

  "unitCategory": string;
}

export namespace DataObjectRateColumnUnit {
  export function getJsonObj(obj: DataObjectRateColumnUnit, isParentJsonObj?: boolean): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getJsonObj(obj) as DataObjectRateColumnUnit)),
      ...{
        "numerator": obj.numerator
          ? model.DataObjectColumnUnit.getJsonObj(obj.numerator)
          : undefined,
        "denominator": obj.denominator
          ? model.DataObjectColumnUnit.getJsonObj(obj.denominator)
          : undefined
      }
    };

    return jsonObj;
  }
  export const unitCategory = "RATE";
  export function getDeserializedJsonObj(
    obj: DataObjectRateColumnUnit,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getDeserializedJsonObj(obj) as DataObjectRateColumnUnit)),
      ...{
        "numerator": obj.numerator
          ? model.DataObjectColumnUnit.getDeserializedJsonObj(obj.numerator)
          : undefined,
        "denominator": obj.denominator
          ? model.DataObjectColumnUnit.getDeserializedJsonObj(obj.denominator)
          : undefined
      }
    };

    return jsonObj;
  }
}
