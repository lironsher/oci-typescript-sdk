/**
 * Object Storage Service API
 * Use Object Storage and Archive Storage APIs to manage buckets, objects, and related resources.
For more information, see [Overview of Object Storage](/Content/Object/Concepts/objectstorageoverview.htm) and
[Overview of Archive Storage](/Content/Archive/Concepts/archivestorageoverview.htm).

 * OpenAPI spec version: 20160918
 * Contact: opc_casper_users_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2023, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as requests from "./lib/request";
import * as models from "./lib/model";
import * as responses from "./lib/response";
import * as client from "./lib/client";
import * as objectstorage_waiter from "./lib/objectstorage-waiter";

export { models };
export { requests };
export { responses };
export import ObjectStorageClient = client.ObjectStorageClient;
export import ObjectStorageWaiter = objectstorage_waiter.ObjectStorageWaiter;
import { UploadManager } from "./lib/upload-manager/upload-manager";
export { UploadManager };
import { NodeFSBlob } from "./lib/upload-manager/node-fs-blob";
export { NodeFSBlob };
