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
 * The environment configuration details object for managed container
 */
export interface DefaultModelDeploymentEnvironmentConfigurationDetails
  extends model.ModelDeploymentEnvironmentConfigurationDetails {
  /**
   * Environment variables to set for the web server container.
   * The size of envVars must be less than 2048 bytes.
   * Key should be under 32 characters.
   * Key should contain only letters, digits and underscore (_)
   * Key should start with a letter.
   * Key should have at least 2 characters.
   * Key should not end with underscore eg. {@code TEST_}
   * Key if added cannot be empty. Value can be empty.
   * No specific size limits on individual Values. But overall environment variables is limited to 2048 bytes.
   * Key can't be reserved Model Deployment environment variables.
   *
   */
  "environmentVariables"?: { [key: string]: string };

  "environmentConfigurationType": string;
}

export namespace DefaultModelDeploymentEnvironmentConfigurationDetails {
  export function getJsonObj(
    obj: DefaultModelDeploymentEnvironmentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentEnvironmentConfigurationDetails.getJsonObj(
            obj
          ) as DefaultModelDeploymentEnvironmentConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
  export const environmentConfigurationType = "DEFAULT";
  export function getDeserializedJsonObj(
    obj: DefaultModelDeploymentEnvironmentConfigurationDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.ModelDeploymentEnvironmentConfigurationDetails.getDeserializedJsonObj(
            obj
          ) as DefaultModelDeploymentEnvironmentConfigurationDetails)),
      ...{}
    };

    return jsonObj;
  }
}
