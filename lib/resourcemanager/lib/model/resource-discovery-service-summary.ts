/**
 * Resource Manager API
 * Use the Resource Manager API to automate deployment and operations for all Oracle Cloud Infrastructure resources.
Using the infrastructure-as-code (IaC) model, the service is based on Terraform, an open source industry standard that lets DevOps engineers develop and deploy their infrastructure anywhere.
For more information, see
[the Resource Manager documentation](/iaas/Content/ResourceManager/home.htm).

 * OpenAPI spec version: 20180917
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
 * A service supported for use with [Resource Discovery](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
 *
 */
export interface ResourceDiscoveryServiceSummary {
  /**
   * A supported service. Example: {@code core}
   * For reference on service names, see the [Terraform provider documentation](https://www.terraform.io/docs/providers/oci/guides/resource_discovery.html#services).
   *
   */
  "name"?: string;
  /**
   * The scope of the service as used with Resource Discovery.
   * This property determines the type of compartment OCID required: root compartment ({@code TENANCY}) or not ({@code COMPARTMENT}).
   * For example, {@code identity} is at the root compartment scope while {@code database} is at the compartment scope.
   *
   */
  "discoveryScope"?: ResourceDiscoveryServiceSummary.DiscoveryScope;
}

export namespace ResourceDiscoveryServiceSummary {
  export enum DiscoveryScope {
    Tenancy = "TENANCY",
    Compartment = "COMPARTMENT",
    /**
     * This value is used if a service returns a value for this enum that is not recognized by this
     * version of the SDK.
     */
    UnknownValue = "UNKNOWN_VALUE"
  }

  export function getJsonObj(obj: ResourceDiscoveryServiceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ResourceDiscoveryServiceSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
