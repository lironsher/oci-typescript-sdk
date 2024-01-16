/**
 * Database Management API
 * Use the Database Management API to perform tasks such as obtaining performance and resource usage metrics
for a fleet of Managed Databases or a specific Managed Database, creating Managed Database Groups, and
running a SQL job on a Managed Database or Managed Database Group.

 * OpenAPI spec version: 20201101
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
 * The details required to reset database parameter values.
 *
 */
export interface ResetDatabaseParametersDetails {
  "credentials": model.DatabaseCredentials;
  /**
    * The clause used to specify when the parameter change takes effect.
* <p>
Use {@code MEMORY} to make the change in memory and ensure that it takes
* effect immediately. Use {@code SPFILE} to make the change in the server
* parameter file. The change takes effect when the database is next
* shut down and started up again. Use {@code BOTH} to make the change in
* memory and in the server parameter file. The change takes effect
* immediately and persists after the database is shut down and
* started up again.
* 
    */
  "scope": model.ParameterScope;
  /**
   * A list of database parameter names.
   */
  "parameters": Array<string>;
}

export namespace ResetDatabaseParametersDetails {
  export function getJsonObj(obj: ResetDatabaseParametersDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.DatabaseCredentials.getJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResetDatabaseParametersDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "credentials": obj.credentials
          ? model.DatabaseCredentials.getDeserializedJsonObj(obj.credentials)
          : undefined
      }
    };

    return jsonObj;
  }
}
