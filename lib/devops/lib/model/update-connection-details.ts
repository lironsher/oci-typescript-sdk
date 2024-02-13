/**
 * DevOps API
 * Use the DevOps API to create DevOps projects, configure code repositories,  add artifacts to deploy, build and test software applications, configure  target deployment environments, and deploy software applications.  For more information, see [DevOps](/Content/devops/using/home.htm).
 * OpenAPI spec version: 20210630
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
 * The details for updating a connection.
 *
 */
export interface UpdateConnectionDetails {
  /**
   * Optional description about the connection.
   */
  "description"?: string;
  /**
   * Optional connection display name. Avoid entering confidential information.
   */
  "displayName"?: string;
  /**
   * Simple key-value pair that is applied without any predefined name, type or scope. Exists for cross-compatibility only.  See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"bar-key\": \"value\"}}
   */
  "freeformTags"?: { [key: string]: string };
  /**
   * Defined tags for this resource. Each key is predefined and scoped to a namespace. See [Resource Tags](https://docs.cloud.oracle.com/Content/General/Concepts/resourcetags.htm). Example: {@code {\"foo-namespace\": {\"bar-key\": \"value\"}}}
   */
  "definedTags"?: { [key: string]: { [key: string]: any } };

  "connectionType": string;
}

export namespace UpdateConnectionDetails {
  export function getJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "GITHUB_ACCESS_TOKEN":
          return model.UpdateGithubAccessTokenConnectionDetails.getJsonObj(
            <model.UpdateGithubAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "VBS_ACCESS_TOKEN":
          return model.UpdateVbsAccessTokenConnectionDetails.getJsonObj(
            <model.UpdateVbsAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.UpdateBitbucketServerAccessTokenConnectionDetails.getJsonObj(
            <model.UpdateBitbucketServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.UpdateGitlabAccessTokenConnectionDetails.getJsonObj(
            <model.UpdateGitlabAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.UpdateBitbucketCloudAppPasswordConnectionDetails.getJsonObj(
            <model.UpdateBitbucketCloudAppPasswordConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.UpdateGitlabServerAccessTokenConnectionDetails.getJsonObj(
            <model.UpdateGitlabServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: UpdateConnectionDetails): object {
    const jsonObj = { ...obj, ...{} };

    if (obj && "connectionType" in obj && obj.connectionType) {
      switch (obj.connectionType) {
        case "GITHUB_ACCESS_TOKEN":
          return model.UpdateGithubAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.UpdateGithubAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "VBS_ACCESS_TOKEN":
          return model.UpdateVbsAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.UpdateVbsAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_SERVER_ACCESS_TOKEN":
          return model.UpdateBitbucketServerAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_ACCESS_TOKEN":
          return model.UpdateGitlabAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.UpdateGitlabAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        case "BITBUCKET_CLOUD_APP_PASSWORD":
          return model.UpdateBitbucketCloudAppPasswordConnectionDetails.getDeserializedJsonObj(
            <model.UpdateBitbucketCloudAppPasswordConnectionDetails>(<object>jsonObj),
            true
          );
        case "GITLAB_SERVER_ACCESS_TOKEN":
          return model.UpdateGitlabServerAccessTokenConnectionDetails.getDeserializedJsonObj(
            <model.UpdateGitlabServerAccessTokenConnectionDetails>(<object>jsonObj),
            true
          );
        default:
          common.logger.info(`Unknown value for: ${obj.connectionType}`);
      }
    }
    return jsonObj;
  }
}
