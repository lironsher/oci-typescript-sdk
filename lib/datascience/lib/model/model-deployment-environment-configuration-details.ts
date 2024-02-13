/**
 * Data Science API
 * Use the Data Science API to organize your data science work, access data and computing resources, and build, train, deploy and manage models and model deployments. For more information, see [Data Science](https://docs.oracle.com/iaas/data-science/using/data-science.htm).

 * OpenAPI spec version: 20190101
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
 * The configuration to carry the environment details thats used in Model Deployment creation
 */
export interface ModelDeploymentEnvironmentConfigurationDetails {
  "environmentConfigurationType": string;
}

export namespace ModelDeploymentEnvironmentConfigurationDetails {
  export function getJsonObj(obj: ModelDeploymentEnvironmentConfigurationDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "environmentConfigurationType" in obj && obj.environmentConfigurationType) {
      switch (obj.environmentConfigurationType) {
        case "DEFAULT":
          return model.DefaultModelDeploymentEnvironmentConfigurationDetails.getJsonObj(
            <model.DefaultModelDeploymentEnvironmentConfigurationDetails>(<object>jsonObj),
            true
          );
        case "OCIR_CONTAINER":
          return model.OcirModelDeploymentEnvironmentConfigurationDetails.getJsonObj(
            <model.OcirModelDeploymentEnvironmentConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.environmentConfigurationType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(
    obj: ModelDeploymentEnvironmentConfigurationDetails
  ): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "environmentConfigurationType" in obj && obj.environmentConfigurationType) {
      switch (obj.environmentConfigurationType) {
        case "DEFAULT":
          return model.DefaultModelDeploymentEnvironmentConfigurationDetails.getDeserializedJsonObj(
            <model.DefaultModelDeploymentEnvironmentConfigurationDetails>(<object>jsonObj),
            true
          );
        case "OCIR_CONTAINER":
          return model.OcirModelDeploymentEnvironmentConfigurationDetails.getDeserializedJsonObj(
            <model.OcirModelDeploymentEnvironmentConfigurationDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.environmentConfigurationType}`);
      }
    }
    return jsonObj;
  }
}
