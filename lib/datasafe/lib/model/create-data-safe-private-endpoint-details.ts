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
 * The details used to create the new Data Safe private endpoint.
 */
export interface CreateDataSafePrivateEndpointDetails {
  /**
   * The display name for the private endpoint. The name does not have to be unique, and it's changeable.
   */
  "displayName": string;
  /**
   * The OCID of the compartment.
   */
  "compartmentId": string;
  /**
   * The OCID of the VCN.
   */
  "vcnId": string;
  /**
   * The OCID of the subnet.
   */
  "subnetId": string;
  /**
   * The private IP address of the private endpoint.
   */
  "privateEndpointIp"?: string;
  /**
   * The description of the private endpoint.
   */
  "description"?: string;
  /**
   * The OCIDs of the network security groups that the private endpoint belongs to.
   *
   */
  "nsgIds"?: Array<string>;
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

export namespace CreateDataSafePrivateEndpointDetails {
  export function getJsonObj(obj: CreateDataSafePrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDataSafePrivateEndpointDetails): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
