/**
 * Database Service API
 * The API for the Database Service. Use this API to manage resources such as databases and DB Systems. For more information, see [Overview of the Database Service](/iaas/Content/Database/Concepts/databaseoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: sic_dbaas_cp_us_grp@oracle.com
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
 * The version details specific to an app.
 *
 */
export interface AppVersionSummary {
  /**
   * The Autonomous Container Database version release date.
   */
  "releaseDate": string;
  /**
   * The Autonomous Container Database version end of support date.
   */
  "endOfSupport": string;
  /**
   * The name of the supported application.
   */
  "supportedAppName": string;
  /**
   * Indicates if the image is certified.
   */
  "isCertified": boolean;
}

export namespace AppVersionSummary {
  export function getJsonObj(obj: AppVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: AppVersionSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
