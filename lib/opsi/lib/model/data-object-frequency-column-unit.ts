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
 * Unit details of a data object column of FREQEUENCY unit category.
 */
export interface DataObjectFrequencyColumnUnit extends model.DataObjectColumnUnit {
  /**
   * Frequency unit.
   */
  "unit"?: DataObjectFrequencyColumnUnit.Unit;

  "unitCategory": string;
}

export namespace DataObjectFrequencyColumnUnit {
  export enum Unit {
    Hertz = "HERTZ",
    KiloHertz = "KILO_HERTZ",
    MegaHertz = "MEGA_HERTZ",
    GigaHertz = "GIGA_HERTZ",
    TeraHertz = "TERA_HERTZ",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(
    obj: DataObjectFrequencyColumnUnit,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getJsonObj(obj) as DataObjectFrequencyColumnUnit)),
      ...{}
    };

    return jsonObj;
  }
  export const unitCategory = "FREQUENCY";
  export function getDeserializedJsonObj(
    obj: DataObjectFrequencyColumnUnit,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.DataObjectColumnUnit.getDeserializedJsonObj(
            obj
          ) as DataObjectFrequencyColumnUnit)),
      ...{}
    };

    return jsonObj;
  }
}
