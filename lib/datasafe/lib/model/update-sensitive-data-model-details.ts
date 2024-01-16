/**
 * Data Safe API
 * APIs for using Oracle Data Safe.
 * OpenAPI spec version: 20181201
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
 * Details to update a sensitive data model. Note that updating any attribute of a sensitive data model does not perform data discovery.
 *
 */
export interface UpdateSensitiveDataModelDetails {
  /**
   * The display name of the sensitive data model. The name does not have to be unique, and it's changeable.
   */
  "displayName"?: string;
  /**
   * The OCID of the reference target database to be associated with the sensitive data model. All operations such as
   * performing data discovery and adding columns manually are done in the context of the associated target database.
   * Note that updating the targetId attribute does not perform data discovery automatically.
   *
   */
  "targetId"?: string;
  /**
   * The application suite name identifying a collection of applications. It's useful only if maintaining a sensitive data model for a suite of applications.
   */
  "appSuiteName"?: string;
  /**
   * The description of the sensitive data model.
   */
  "description"?: string;
  /**
   * The schemas to be used for future data discovery jobs.
   */
  "schemasForDiscovery"?: Array<string>;
  /**
   * The OCIDs of the sensitive types to be used for future data discovery jobs. If OCID of a sensitive category is
   * provided, all its child sensitive types are used for data discovery.
   *
   */
  "sensitiveTypeIdsForDiscovery"?: Array<string>;
  /**
   * Indicates if data discovery jobs should collect and store sample data values for the discovered columns.
   * Sample data helps review the discovered columns and ensure that they actually contain sensitive data.
   * As it collects original data from the target database, it's disabled by default and should be used only
   * if it's acceptable to store sample data in Data Safe's repository in Oracle Cloud. Note that sample data
   * values are not collected for columns with the following data types: LONG, LOB, RAW, XMLTYPE and BFILE.
   *
   */
  "isSampleDataCollectionEnabled"?: boolean;
  /**
   * Indicates if data discovery jobs should identify potential application-level (non-dictionary) referential
   * relationships between columns. Note that data discovery automatically identifies and adds database-level
   * (dictionary-defined) relationships. This option helps identify application-level relationships that are not
   * defined in the database dictionary, which in turn, helps identify additional sensitive columns and preserve
   * referential integrity during data masking. It's disabled by default and should be used only if there is a
   * need to identify application-level relationships.
   *
   */
  "isAppDefinedRelationDiscoveryEnabled"?: boolean;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm)
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateSensitiveDataModelDetails {
  export function getJsonObj(obj: UpdateSensitiveDataModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateSensitiveDataModelDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
