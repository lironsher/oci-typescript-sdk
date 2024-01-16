/**
 * Marketplace Service API
 * Use the Marketplace API to manage applications in Oracle Cloud Infrastructure Marketplace. For more information, see [Overview of Marketplace](/Content/Marketplace/Concepts/marketoverview.htm)
 * OpenAPI spec version: 20181001
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
 * A base object for all types of listing packages.
 */
export interface ListingPackage {
  /**
   * Description of this package.
   */
  "description"?: string;
  /**
   * The ID of the listing this package belongs to.
   */
  "listingId": string;
  /**
   * The package version.
   */
  "version": string;
  "pricing"?: model.PricingModel;
  /**
   * The unique identifier for the package resource.
   */
  "resourceId"?: string;
  /**
    * The date and time this listing package was created, expressed in [RFC 3339](https://tools.ietf.org/html/rfc3339)
* timestamp format.
* <p>
Example: {@code 2016-08-25T21:10:29.600Z}
* 
    */
  "timeCreated"?: Date;
  "operatingSystem"?: model.OperatingSystem;
  /**
   * The regions where you can deploy the listing package. (Some packages have restrictions that limit their deployment to United States regions only.)
   *
   */
  "regions"?: Array<model.Region>;

  "packageType": string;
}

export namespace ListingPackage {
  export function getJsonObj(obj: ListingPackage): object {
    const jsonObj = {
      ...obj,
      ...{
        "pricing": obj.pricing ? model.PricingModel.getJsonObj(obj.pricing) : undefined,

        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getJsonObj(obj.operatingSystem)
          : undefined,
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "CONTAINER":
          return model.ContainerListingPackage.getJsonObj(
            <model.ContainerListingPackage>(<object>jsonObj),
            true
          );
        case "ORCHESTRATION":
          return model.OrchestrationListingPackage.getJsonObj(
            <model.OrchestrationListingPackage>(<object>jsonObj),
            true
          );
        case "IMAGE":
          return model.ImageListingPackage.getJsonObj(
            <model.ImageListingPackage>(<object>jsonObj),
            true
          );
        case "KUBERNETES":
          return model.KubernetesListingPackage.getJsonObj(
            <model.KubernetesListingPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: ListingPackage): object {
    const jsonObj = {
      ...obj,
      ...{
        "pricing": obj.pricing ? model.PricingModel.getDeserializedJsonObj(obj.pricing) : undefined,

        "operatingSystem": obj.operatingSystem
          ? model.OperatingSystem.getDeserializedJsonObj(obj.operatingSystem)
          : undefined,
        "regions": obj.regions
          ? obj.regions.map(item => {
              return model.Region.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    if (obj && "packageType" in obj && obj.packageType) {
      switch (obj.packageType) {
        case "CONTAINER":
          return model.ContainerListingPackage.getDeserializedJsonObj(
            <model.ContainerListingPackage>(<object>jsonObj),
            true
          );
        case "ORCHESTRATION":
          return model.OrchestrationListingPackage.getDeserializedJsonObj(
            <model.OrchestrationListingPackage>(<object>jsonObj),
            true
          );
        case "IMAGE":
          return model.ImageListingPackage.getDeserializedJsonObj(
            <model.ImageListingPackage>(<object>jsonObj),
            true
          );
        case "KUBERNETES":
          return model.KubernetesListingPackage.getDeserializedJsonObj(
            <model.KubernetesListingPackage>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.packageType}`);
      }
    }
    return jsonObj;
  }
}
