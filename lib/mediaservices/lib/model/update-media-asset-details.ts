/**
 * Media Services API
 * Media Services (includes Media Flow and Media Streams) is a fully managed service for processing media (video) source content. Use Media Flow and Media Streams to transcode and package digital video using configurable workflows and stream video outputs.

Use the Media Services API to configure media workflows and run Media Flow jobs, create distribution channels, ingest assets, create Preview URLs and play assets. For more information, see [Media Flow](/iaas/Content/dms-mediaflow/home.htm) and [Media Streams](/iaas/Content/dms-mediastream/home.htm).

 * OpenAPI spec version: 20211101
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
 * The information to be updated.
 */
export interface UpdateMediaAssetDetails {
  /**
   * Display name for the Media Asset. Does not have to be unique. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * The type of the media asset.
   */
  "type"?: model.AssetType;
  /**
   * The ID of the parent asset from which this asset is derived.
   */
  "parentMediaAssetId"?: string;
  /**
   * The ID of the senior most asset from which this asset is derived.
   */
  "masterMediaAssetId"?: string;
  /**
   * List of Metadata.
   */
  "metadata"?: Array<model.Metadata>;
  /**
   * List of tags for the MediaAsset.
   */
  "mediaAssetTags"?: Array<model.MediaAssetTag>;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.
   * Example: {@code {\"bar-key\": \"value\"}}
   *
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace.
   * Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   *
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };
}

export namespace UpdateMediaAssetDetails {
  export function getJsonObj(obj: UpdateMediaAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? obj.metadata.map(item => {
              return model.Metadata.getJsonObj(item);
            })
          : undefined,
        "mediaAssetTags": obj.mediaAssetTags
          ? obj.mediaAssetTags.map(item => {
              return model.MediaAssetTag.getJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateMediaAssetDetails): object {
    const jsonObj = {
      ...obj,
      ...{
        "metadata": obj.metadata
          ? obj.metadata.map(item => {
              return model.Metadata.getDeserializedJsonObj(item);
            })
          : undefined,
        "mediaAssetTags": obj.mediaAssetTags
          ? obj.mediaAssetTags.map(item => {
              return model.MediaAssetTag.getDeserializedJsonObj(item);
            })
          : undefined
      }
    };

    return jsonObj;
  }
}
