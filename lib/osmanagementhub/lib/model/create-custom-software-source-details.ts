/**
 * OS Management Hub API
 * Use the OS Management Hub API to manage and monitor updates and patches for instances in OCI, your private data center, or 3rd-party clouds. 
For more information, see [Overview of OS Management Hub](https://docs.cloud.oracle.com/iaas/osmh/doc/overview.htm).

 * OpenAPI spec version: 20220901
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
 * Provides the information used to create a custom software source.
 */
export interface CreateCustomSoftwareSourceDetails extends model.CreateSoftwareSourceDetails {
  /**
   * List of vendor software sources.
   */
  "vendorSoftwareSources": Array<model.Id>;
  "customSoftwareSourceFilter"?: model.CustomSoftwareSourceFilter;
  /**
   * Indicates whether the service should automatically update the custom software source to use the latest package versions available. The service reviews packages levels once a day.
   */
  "isAutomaticallyUpdated"?: boolean;
  /**
   * Indicates whether the service should automatically resolve package dependencies when including specific packages in the software source.
   */
  "isAutoResolveDependencies"?: boolean;
  /**
   * Indicates whether the service should create the software source from a list of packages provided by the user.
   */
  "isCreatedFromPackageList"?: boolean;
  /**
   * Indicates whether the software source will include only the latest versions of content from vendor software sources, while accounting for other constraints set in the custom or versioned custom software source (such as a package list or filters).
   * * For a module filter that does not specify a stream, this will include all available streams, and within each stream only the latest version of packages.
   * * For a module filter that does specify a stream, this will include only the latest version of packages for the specified stream.
   * * For a package filter that does not specify a version, this will include only the latest available version of the package.
   * * For a package filter that does specify a version, this will include only the specified version of the package (the isLatestContentOnly attribute is ignored).
   * * For a package list, this will include only the specified version of packages and modules in the list (the isLatestContentOnly attribute is ignored).
   *
   */
  "isLatestContentOnly"?: boolean;
  /**
   * A property used for compatibility only. It doesn't provide a complete list of packages. See {@link #addPackagesToSoftwareSourceDetails(AddPackagesToSoftwareSourceDetailsRequest) addPackagesToSoftwareSourceDetails} for providing the list of packages used to create the software source when isCreatedFromPackageList is set to true.
   */
  "packages"?: Array<string>;

  "softwareSourceType": string;
}

export namespace CreateCustomSoftwareSourceDetails {
  export function getJsonObj(
    obj: CreateCustomSoftwareSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSoftwareSourceDetails.getJsonObj(obj) as CreateCustomSoftwareSourceDetails)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
  export const softwareSourceType = "CUSTOM";
  export function getDeserializedJsonObj(
    obj: CreateCustomSoftwareSourceDetails,
    isParentJsonObj?: boolean
  ): object {
    const jsonObj = {
      ...(isParentJsonObj
        ? obj
        : (model.CreateSoftwareSourceDetails.getDeserializedJsonObj(
            obj
          ) as CreateCustomSoftwareSourceDetails)),
      ...{
        "vendorSoftwareSources": obj.vendorSoftwareSources
          ? obj.vendorSoftwareSources.map(item => {
              return model.Id.getDeserializedJsonObj(item);
            })
          : undefined,
        "customSoftwareSourceFilter": obj.customSoftwareSourceFilter
          ? model.CustomSoftwareSourceFilter.getDeserializedJsonObj(obj.customSoftwareSourceFilter)
          : undefined
      }
    };

    return jsonObj;
  }
}
