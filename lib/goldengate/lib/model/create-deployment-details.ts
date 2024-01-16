/**
 * GoldenGate API
 * Use the Oracle Cloud Infrastructure GoldenGate APIs to perform data replication operations.

 * OpenAPI spec version: 20200407
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
 * The information about a new Deployment.
 *
 */
export interface CreateDeploymentDetails {
  /**
   * An object's Display Name.
   *
   */
  "displayName": string;
  /**
   * The Oracle license model that applies to a Deployment.
   *
   */
  "licenseModel": model.LicenseModel;
  /**
   * Metadata about this specific object.
   *
   */
  "description"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the compartment being referenced.
   *
   */
  "compartmentId": string;
  /**
    * A simple key-value pair that is applied without any predefined name, type, or scope. Exists
* for cross-compatibility only.
* <p>
Example: {@code {\"bar-key\": \"value\"}}
* 
    */
  "freeformTags"?: { [key: string]: string };
  /**
    * Tags defined for this resource. Each key is predefined and scoped to a namespace.
* <p>
Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
* 
    */
  "definedTags"?: { [key: string]: { [key: string]: any } };
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the backup being referenced.
   *
   */
  "deploymentBackupId"?: string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the subnet of the deployment's private endpoint.
   *
   */
  "subnetId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of a public subnet in the customer tenancy.
   * Can be provided only for public deployments. If provided, the loadbalancer will be created in this subnet instead of the service tenancy.
   * For backward compatiblity this is an optional property for now, but it will become mandatory (for public deployments only) after October 1, 2024.
   *
   */
  "loadBalancerSubnetId"?: string;
  /**
   * A three-label Fully Qualified Domain Name (FQDN) for a resource.
   *
   */
  "fqdn"?: string;
  /**
   * An array of Network Security Group OCIDs used to define network access for either Deployments or Connections.
   *
   */
  "nsgIds"?: Array<string>;
  /**
   * True if this object is publicly available.
   *
   */
  "isPublic"?: boolean;
  /**
   * The Minimum number of OCPUs to be made available for this Deployment.
   *  Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "cpuCoreCount": number;
  /**
   * Indicates if auto scaling is enabled for the Deployment's CPU core count.
   *
   */
  "isAutoScalingEnabled": boolean;
  /**
   * The type of deployment, which can be any one of the Allowed values.
   * NOTE: Use of the value 'OGG' is maintained for backward compatibility purposes.
   *     Its use is discouraged in favor of 'DATABASE_ORACLE'.
   *
   */
  "deploymentType": model.DeploymentType;
  "oggData"?: model.CreateOggDeploymentDetails;
  "maintenanceWindow"?: model.CreateMaintenanceWindowDetails;
  "maintenanceConfiguration"?: model.CreateMaintenanceConfigurationDetails;
}

export namespace CreateDeploymentDetails {
  export function getJsonObj(obj: CreateDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData
          ? model.CreateOggDeploymentDetails.getJsonObj(obj.oggData)
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.CreateMaintenanceWindowDetails.getJsonObj(obj.maintenanceWindow)
          : undefined,
        "maintenanceConfiguration": obj.maintenanceConfiguration
          ? model.CreateMaintenanceConfigurationDetails.getJsonObj(obj.maintenanceConfiguration)
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: CreateDeploymentDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "oggData": obj.oggData
          ? model.CreateOggDeploymentDetails.getDeserializedJsonObj(obj.oggData)
          : undefined,
        "maintenanceWindow": obj.maintenanceWindow
          ? model.CreateMaintenanceWindowDetails.getDeserializedJsonObj(obj.maintenanceWindow)
          : undefined,
        "maintenanceConfiguration": obj.maintenanceConfiguration
          ? model.CreateMaintenanceConfigurationDetails.getDeserializedJsonObj(
              obj.maintenanceConfiguration
            )
          : undefined
      }
    };

    return jsonObj;
  }
}
