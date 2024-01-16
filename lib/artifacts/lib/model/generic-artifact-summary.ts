/**
 * Artifacts and Container Images API
 * API covering the Artifacts and [Registry](/iaas/Content/Registry/Concepts/registryoverview.htm) services.
Use this API to manage resources such as generic artifacts and container images.

 * OpenAPI spec version: 20160918
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
 * Summary information for an artifact.
 */
export interface GenericArtifactSummary {
  /**
    * The [OCID](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/identifiers.htm) of the artifact.
* <p>
Example: {@code ocid1.genericartifact.oc1..exampleuniqueID}
* 
    */
  "id": string;
  /**
    * The artifact name with the format of {@code <artifact-path>:<artifact-version>}. The artifact name is truncated to a maximum length of 255.
* <p>
Example: {@code project01/my-web-app/artifact-abc:1.0.0}
* 
    */
  "displayName": string;
  /**
   * The OCID of the artifact's compartment.
   */
  "compartmentId": string;
  /**
   * The [OCID](https://docs.cloud.oracle.com/Content/General/Concepts/identifiers.htm) of the repository.
   */
  "repositoryId": string;
  /**
    * A user-defined path to describe the location of an artifact. Slashes do not create a directory structure, but you can use slashes to organize the repository. An artifact path does not include an artifact version.
* <p>
Example: {@code project01/my-web-app/artifact-abc} 
* 
    */
  "artifactPath": string;
  /**
    * A user-defined string to describe the artifact version.
* <p>
Example: {@code 1.1.0} or {@code 1.2-beta-2}
* 
    */
  "version": string;
  /**
   * The SHA256 digest for the artifact. When you upload an artifact to the repository, a SHA256 digest is calculated and added to the artifact properties.
   */
  "sha256": string;
  /**
   * The size of the artifact in bytes. Note: Numbers greater than Number.MAX_SAFE_INTEGER will result in rounding issues.
   */
  "sizeInBytes": number;
  /**
   * The current state of the generic artifact.
   */
  "lifecycleState": string;
  /**
    * Free-form tags for this resource. Each tag is a simple key-value pair with no
* predefined name, type, or namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Department\": \"Finance\"}}
* 
    */
  "freeformTags": { [key: string]: string };
  /**
    * Defined tags for this resource. Each key is predefined and scoped to a
* namespace. For more information, see [Resource Tags](https://docs.cloud.oracle.com/iaas/Content/General/Concepts/resourcetags.htm).
* <p>
Example: {@code {\"Operations\": {\"CostCenter\": \"42\"}}}
* 
    */
  "definedTags": { [key: string]: { [key: string]: any } };
  /**
   * An RFC 3339 timestamp indicating when the artifact was created.
   */
  "timeCreated": Date;
}

export namespace GenericArtifactSummary {
  export function getJsonObj(obj: GenericArtifactSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
  export function getDeserializedJsonObj(obj: GenericArtifactSummary): object {
    const jsonObj = { ...obj, ...{} };

    return jsonObj;
  }
}
