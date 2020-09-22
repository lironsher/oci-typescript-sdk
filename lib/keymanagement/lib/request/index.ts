/**
 * Vault Service Key Management API
 * API for managing and performing operations with keys and vaults. (For the API for managing secrets, see the Vault Service 
Secret Management API. For the API for retrieving secrets, see the Vault Service Secret Retrieval API.)

 * OpenAPI spec version: release
 * Contact: sparta_kms_us_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as DecryptRequest from "./decrypt-request";
export import DecryptRequest = DecryptRequest.DecryptRequest;
import * as EncryptRequest from "./encrypt-request";
export import EncryptRequest = EncryptRequest.EncryptRequest;
import * as ExportKeyRequest from "./export-key-request";
export import ExportKeyRequest = ExportKeyRequest.ExportKeyRequest;
import * as GenerateDataEncryptionKeyRequest from "./generate-data-encryption-key-request";
export import GenerateDataEncryptionKeyRequest = GenerateDataEncryptionKeyRequest.GenerateDataEncryptionKeyRequest;
import * as BackupKeyRequest from "./backup-key-request";
export import BackupKeyRequest = BackupKeyRequest.BackupKeyRequest;
import * as CancelKeyDeletionRequest from "./cancel-key-deletion-request";
export import CancelKeyDeletionRequest = CancelKeyDeletionRequest.CancelKeyDeletionRequest;
import * as CancelKeyVersionDeletionRequest from "./cancel-key-version-deletion-request";
export import CancelKeyVersionDeletionRequest = CancelKeyVersionDeletionRequest.CancelKeyVersionDeletionRequest;
import * as ChangeKeyCompartmentRequest from "./change-key-compartment-request";
export import ChangeKeyCompartmentRequest = ChangeKeyCompartmentRequest.ChangeKeyCompartmentRequest;
import * as CreateKeyRequest from "./create-key-request";
export import CreateKeyRequest = CreateKeyRequest.CreateKeyRequest;
import * as CreateKeyVersionRequest from "./create-key-version-request";
export import CreateKeyVersionRequest = CreateKeyVersionRequest.CreateKeyVersionRequest;
import * as DisableKeyRequest from "./disable-key-request";
export import DisableKeyRequest = DisableKeyRequest.DisableKeyRequest;
import * as EnableKeyRequest from "./enable-key-request";
export import EnableKeyRequest = EnableKeyRequest.EnableKeyRequest;
import * as GetKeyRequest from "./get-key-request";
export import GetKeyRequest = GetKeyRequest.GetKeyRequest;
import * as GetKeyVersionRequest from "./get-key-version-request";
export import GetKeyVersionRequest = GetKeyVersionRequest.GetKeyVersionRequest;
import * as GetWrappingKeyRequest from "./get-wrapping-key-request";
export import GetWrappingKeyRequest = GetWrappingKeyRequest.GetWrappingKeyRequest;
import * as ImportKeyRequest from "./import-key-request";
export import ImportKeyRequest = ImportKeyRequest.ImportKeyRequest;
import * as ImportKeyVersionRequest from "./import-key-version-request";
export import ImportKeyVersionRequest = ImportKeyVersionRequest.ImportKeyVersionRequest;
import * as ListKeyVersionsRequest from "./list-key-versions-request";
export import ListKeyVersionsRequest = ListKeyVersionsRequest.ListKeyVersionsRequest;
import * as ListKeysRequest from "./list-keys-request";
export import ListKeysRequest = ListKeysRequest.ListKeysRequest;
import * as RestoreKeyFromFileRequest from "./restore-key-from-file-request";
export import RestoreKeyFromFileRequest = RestoreKeyFromFileRequest.RestoreKeyFromFileRequest;
import * as RestoreKeyFromObjectStoreRequest from "./restore-key-from-object-store-request";
export import RestoreKeyFromObjectStoreRequest = RestoreKeyFromObjectStoreRequest.RestoreKeyFromObjectStoreRequest;
import * as ScheduleKeyDeletionRequest from "./schedule-key-deletion-request";
export import ScheduleKeyDeletionRequest = ScheduleKeyDeletionRequest.ScheduleKeyDeletionRequest;
import * as ScheduleKeyVersionDeletionRequest from "./schedule-key-version-deletion-request";
export import ScheduleKeyVersionDeletionRequest = ScheduleKeyVersionDeletionRequest.ScheduleKeyVersionDeletionRequest;
import * as UpdateKeyRequest from "./update-key-request";
export import UpdateKeyRequest = UpdateKeyRequest.UpdateKeyRequest;
import * as BackupVaultRequest from "./backup-vault-request";
export import BackupVaultRequest = BackupVaultRequest.BackupVaultRequest;
import * as CancelVaultDeletionRequest from "./cancel-vault-deletion-request";
export import CancelVaultDeletionRequest = CancelVaultDeletionRequest.CancelVaultDeletionRequest;
import * as ChangeVaultCompartmentRequest from "./change-vault-compartment-request";
export import ChangeVaultCompartmentRequest = ChangeVaultCompartmentRequest.ChangeVaultCompartmentRequest;
import * as CreateVaultRequest from "./create-vault-request";
export import CreateVaultRequest = CreateVaultRequest.CreateVaultRequest;
import * as GetVaultRequest from "./get-vault-request";
export import GetVaultRequest = GetVaultRequest.GetVaultRequest;
import * as GetVaultUsageRequest from "./get-vault-usage-request";
export import GetVaultUsageRequest = GetVaultUsageRequest.GetVaultUsageRequest;
import * as ListVaultsRequest from "./list-vaults-request";
export import ListVaultsRequest = ListVaultsRequest.ListVaultsRequest;
import * as RestoreVaultFromFileRequest from "./restore-vault-from-file-request";
export import RestoreVaultFromFileRequest = RestoreVaultFromFileRequest.RestoreVaultFromFileRequest;
import * as RestoreVaultFromObjectStoreRequest from "./restore-vault-from-object-store-request";
export import RestoreVaultFromObjectStoreRequest = RestoreVaultFromObjectStoreRequest.RestoreVaultFromObjectStoreRequest;
import * as ScheduleVaultDeletionRequest from "./schedule-vault-deletion-request";
export import ScheduleVaultDeletionRequest = ScheduleVaultDeletionRequest.ScheduleVaultDeletionRequest;
import * as UpdateVaultRequest from "./update-vault-request";
export import UpdateVaultRequest = UpdateVaultRequest.UpdateVaultRequest;
