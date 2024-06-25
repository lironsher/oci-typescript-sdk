/**
 * MySQL Database Service API
 * The API for the MySQL Database Service
 * OpenAPI spec version: 20190415
 * Contact: mysql-cloud-dev_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OracleSDKGenerator.
 * Do not edit the class manually.
 *
 * Copyright (c) 2020, 2024, Oracle and/or its affiliates.  All rights reserved.
 * This software is dual-licensed to you under the Universal Permissive License (UPL) 1.0 as shown at https://oss.oracle.com/licenses/upl or Apache License 2.0 as shown at http://www.apache.org/licenses/LICENSE-2.0. You may choose either license.
 */

import * as CreateChannelRequest from "./create-channel-request";
export import CreateChannelRequest = CreateChannelRequest.CreateChannelRequest;
import * as DeleteChannelRequest from "./delete-channel-request";
export import DeleteChannelRequest = DeleteChannelRequest.DeleteChannelRequest;
import * as GetChannelRequest from "./get-channel-request";
export import GetChannelRequest = GetChannelRequest.GetChannelRequest;
import * as ListChannelsRequest from "./list-channels-request";
export import ListChannelsRequest = ListChannelsRequest.ListChannelsRequest;
import * as ResetChannelRequest from "./reset-channel-request";
export import ResetChannelRequest = ResetChannelRequest.ResetChannelRequest;
import * as ResumeChannelRequest from "./resume-channel-request";
export import ResumeChannelRequest = ResumeChannelRequest.ResumeChannelRequest;
import * as UpdateChannelRequest from "./update-channel-request";
export import UpdateChannelRequest = UpdateChannelRequest.UpdateChannelRequest;
import * as ChangeBackupCompartmentRequest from "./change-backup-compartment-request";
export import ChangeBackupCompartmentRequest = ChangeBackupCompartmentRequest.ChangeBackupCompartmentRequest;
import * as CopyBackupRequest from "./copy-backup-request";
export import CopyBackupRequest = CopyBackupRequest.CopyBackupRequest;
import * as CreateBackupRequest from "./create-backup-request";
export import CreateBackupRequest = CreateBackupRequest.CreateBackupRequest;
import * as DeleteBackupRequest from "./delete-backup-request";
export import DeleteBackupRequest = DeleteBackupRequest.DeleteBackupRequest;
import * as GetBackupRequest from "./get-backup-request";
export import GetBackupRequest = GetBackupRequest.GetBackupRequest;
import * as ListBackupsRequest from "./list-backups-request";
export import ListBackupsRequest = ListBackupsRequest.ListBackupsRequest;
import * as UpdateBackupRequest from "./update-backup-request";
export import UpdateBackupRequest = UpdateBackupRequest.UpdateBackupRequest;
import * as AddHeatWaveClusterRequest from "./add-heat-wave-cluster-request";
export import AddHeatWaveClusterRequest = AddHeatWaveClusterRequest.AddHeatWaveClusterRequest;
import * as CreateDbSystemRequest from "./create-db-system-request";
export import CreateDbSystemRequest = CreateDbSystemRequest.CreateDbSystemRequest;
import * as DeleteDbSystemRequest from "./delete-db-system-request";
export import DeleteDbSystemRequest = DeleteDbSystemRequest.DeleteDbSystemRequest;
import * as DeleteHeatWaveClusterRequest from "./delete-heat-wave-cluster-request";
export import DeleteHeatWaveClusterRequest = DeleteHeatWaveClusterRequest.DeleteHeatWaveClusterRequest;
import * as GenerateHeatWaveClusterMemoryEstimateRequest from "./generate-heat-wave-cluster-memory-estimate-request";
export import GenerateHeatWaveClusterMemoryEstimateRequest = GenerateHeatWaveClusterMemoryEstimateRequest.GenerateHeatWaveClusterMemoryEstimateRequest;
import * as GetDbSystemRequest from "./get-db-system-request";
export import GetDbSystemRequest = GetDbSystemRequest.GetDbSystemRequest;
import * as GetHeatWaveClusterRequest from "./get-heat-wave-cluster-request";
export import GetHeatWaveClusterRequest = GetHeatWaveClusterRequest.GetHeatWaveClusterRequest;
import * as GetHeatWaveClusterMemoryEstimateRequest from "./get-heat-wave-cluster-memory-estimate-request";
export import GetHeatWaveClusterMemoryEstimateRequest = GetHeatWaveClusterMemoryEstimateRequest.GetHeatWaveClusterMemoryEstimateRequest;
import * as ListDbSystemsRequest from "./list-db-systems-request";
export import ListDbSystemsRequest = ListDbSystemsRequest.ListDbSystemsRequest;
import * as RestartDbSystemRequest from "./restart-db-system-request";
export import RestartDbSystemRequest = RestartDbSystemRequest.RestartDbSystemRequest;
import * as RestartHeatWaveClusterRequest from "./restart-heat-wave-cluster-request";
export import RestartHeatWaveClusterRequest = RestartHeatWaveClusterRequest.RestartHeatWaveClusterRequest;
import * as StartDbSystemRequest from "./start-db-system-request";
export import StartDbSystemRequest = StartDbSystemRequest.StartDbSystemRequest;
import * as StartHeatWaveClusterRequest from "./start-heat-wave-cluster-request";
export import StartHeatWaveClusterRequest = StartHeatWaveClusterRequest.StartHeatWaveClusterRequest;
import * as StopDbSystemRequest from "./stop-db-system-request";
export import StopDbSystemRequest = StopDbSystemRequest.StopDbSystemRequest;
import * as StopHeatWaveClusterRequest from "./stop-heat-wave-cluster-request";
export import StopHeatWaveClusterRequest = StopHeatWaveClusterRequest.StopHeatWaveClusterRequest;
import * as UpdateDbSystemRequest from "./update-db-system-request";
export import UpdateDbSystemRequest = UpdateDbSystemRequest.UpdateDbSystemRequest;
import * as UpdateHeatWaveClusterRequest from "./update-heat-wave-cluster-request";
export import UpdateHeatWaveClusterRequest = UpdateHeatWaveClusterRequest.UpdateHeatWaveClusterRequest;
import * as CreateConfigurationRequest from "./create-configuration-request";
export import CreateConfigurationRequest = CreateConfigurationRequest.CreateConfigurationRequest;
import * as DeleteConfigurationRequest from "./delete-configuration-request";
export import DeleteConfigurationRequest = DeleteConfigurationRequest.DeleteConfigurationRequest;
import * as GetConfigurationRequest from "./get-configuration-request";
export import GetConfigurationRequest = GetConfigurationRequest.GetConfigurationRequest;
import * as ListConfigurationsRequest from "./list-configurations-request";
export import ListConfigurationsRequest = ListConfigurationsRequest.ListConfigurationsRequest;
import * as ListShapesRequest from "./list-shapes-request";
export import ListShapesRequest = ListShapesRequest.ListShapesRequest;
import * as ListVersionsRequest from "./list-versions-request";
export import ListVersionsRequest = ListVersionsRequest.ListVersionsRequest;
import * as UpdateConfigurationRequest from "./update-configuration-request";
export import UpdateConfigurationRequest = UpdateConfigurationRequest.UpdateConfigurationRequest;
import * as CreateReplicaRequest from "./create-replica-request";
export import CreateReplicaRequest = CreateReplicaRequest.CreateReplicaRequest;
import * as DeleteReplicaRequest from "./delete-replica-request";
export import DeleteReplicaRequest = DeleteReplicaRequest.DeleteReplicaRequest;
import * as GetReplicaRequest from "./get-replica-request";
export import GetReplicaRequest = GetReplicaRequest.GetReplicaRequest;
import * as ListReplicasRequest from "./list-replicas-request";
export import ListReplicasRequest = ListReplicasRequest.ListReplicasRequest;
import * as UpdateReplicaRequest from "./update-replica-request";
export import UpdateReplicaRequest = UpdateReplicaRequest.UpdateReplicaRequest;
import * as GetWorkRequestRequest from "./get-work-request-request";
export import GetWorkRequestRequest = GetWorkRequestRequest.GetWorkRequestRequest;
import * as ListWorkRequestErrorsRequest from "./list-work-request-errors-request";
export import ListWorkRequestErrorsRequest = ListWorkRequestErrorsRequest.ListWorkRequestErrorsRequest;
import * as ListWorkRequestLogsRequest from "./list-work-request-logs-request";
export import ListWorkRequestLogsRequest = ListWorkRequestLogsRequest.ListWorkRequestLogsRequest;
import * as ListWorkRequestsRequest from "./list-work-requests-request";
export import ListWorkRequestsRequest = ListWorkRequestsRequest.ListWorkRequestsRequest;
