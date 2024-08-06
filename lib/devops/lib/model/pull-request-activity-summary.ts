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
 * Summary of an activity record in a pull request
 */
export interface PullRequestActivitySummary {
  /**
   * activity identifier
   */
  "id": string;
  "principal": model.PrincipalDetails;
  /**
   * pullRequest OCID
   */
  "pullRequestId": string;
  /**
   * The time the action was performed. An RFC3339 formatted datetime string
   */
  "timeOccurred": Date;

  "activityType": string;
}

export namespace PullRequestActivitySummary {
  export function getJsonObj(obj: PullRequestActivitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal ? model.PrincipalDetails.getJsonObj(obj.principal) : undefined
      }
    };

    if (obj && "activityType" in obj && obj.activityType) {
      switch (obj.activityType) {
        case "COMMIT":
          return model.CommitActivitySummary.getJsonObj(
            <model.CommitActivitySummary>(<object>jsonObj),
            true
          );
        case "COMMENT":
          return model.CommentActivitySummary.getJsonObj(
            <model.CommentActivitySummary>(<object>jsonObj),
            true
          );
        case "APPROVAL":
          return model.ApprovalActivitySummary.getJsonObj(
            <model.ApprovalActivitySummary>(<object>jsonObj),
            true
          );
        case "REVIEWER":
          return model.ReviewerActivitySummary.getJsonObj(
            <model.ReviewerActivitySummary>(<object>jsonObj),
            true
          );
        case "LIFECYCLE":
          return model.PullRequestLifecycleActivitySummary.getJsonObj(
            <model.PullRequestLifecycleActivitySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.activityType}`);
      }
    }
    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: PullRequestActivitySummary): object {
    const jsonObj = {
      ...obj,
      ...{
        "principal": obj.principal
          ? model.PrincipalDetails.getDeserializedJsonObj(obj.principal)
          : undefined
      }
    };

    if (obj && "activityType" in obj && obj.activityType) {
      switch (obj.activityType) {
        case "COMMIT":
          return model.CommitActivitySummary.getDeserializedJsonObj(
            <model.CommitActivitySummary>(<object>jsonObj),
            true
          );
        case "COMMENT":
          return model.CommentActivitySummary.getDeserializedJsonObj(
            <model.CommentActivitySummary>(<object>jsonObj),
            true
          );
        case "APPROVAL":
          return model.ApprovalActivitySummary.getDeserializedJsonObj(
            <model.ApprovalActivitySummary>(<object>jsonObj),
            true
          );
        case "REVIEWER":
          return model.ReviewerActivitySummary.getDeserializedJsonObj(
            <model.ReviewerActivitySummary>(<object>jsonObj),
            true
          );
        case "LIFECYCLE":
          return model.PullRequestLifecycleActivitySummary.getDeserializedJsonObj(
            <model.PullRequestLifecycleActivitySummary>(<object>jsonObj),
            true
          );
        default:
          if (common.LOG.logger) common.LOG.logger.info(`Unknown value for: ${obj.activityType}`);
      }
    }
    return jsonObj;
  }
}
