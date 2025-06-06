import { useFormContext } from "react-hook-form";

import { SecretSync } from "@app/hooks/api/secretSyncs";

import { TSecretSyncForm } from "../schemas";
import { AwsParameterStoreSyncFields } from "./AwsParameterStoreSyncFields";
import { AwsSecretsManagerSyncFields } from "./AwsSecretsManagerSyncFields";
import { AzureAppConfigurationSyncFields } from "./AzureAppConfigurationSyncFields";
import { AzureKeyVaultSyncFields } from "./AzureKeyVaultSyncFields";
import { CamundaSyncFields } from "./CamundaSyncFields";
import { DatabricksSyncFields } from "./DatabricksSyncFields";
import { GcpSyncFields } from "./GcpSyncFields";
import { GitHubSyncFields } from "./GitHubSyncFields";
import { HumanitecSyncFields } from "./HumanitecSyncFields";
import { TeamCitySyncFields } from "./TeamCitySyncFields";
import { TerraformCloudSyncFields } from "./TerraformCloudSyncFields";
import { VercelSyncFields } from "./VercelSyncFields";
import { WindmillSyncFields } from "./WindmillSyncFields";

export const SecretSyncDestinationFields = () => {
  const { watch } = useFormContext<TSecretSyncForm>();

  const destination = watch("destination");

  switch (destination) {
    case SecretSync.AWSParameterStore:
      return <AwsParameterStoreSyncFields />;
    case SecretSync.AWSSecretsManager:
      return <AwsSecretsManagerSyncFields />;
    case SecretSync.GitHub:
      return <GitHubSyncFields />;
    case SecretSync.GCPSecretManager:
      return <GcpSyncFields />;
    case SecretSync.AzureKeyVault:
      return <AzureKeyVaultSyncFields />;
    case SecretSync.AzureAppConfiguration:
      return <AzureAppConfigurationSyncFields />;
    case SecretSync.Databricks:
      return <DatabricksSyncFields />;
    case SecretSync.Humanitec:
      return <HumanitecSyncFields />;
    case SecretSync.TerraformCloud:
      return <TerraformCloudSyncFields />;
    case SecretSync.Camunda:
      return <CamundaSyncFields />;
    case SecretSync.Vercel:
      return <VercelSyncFields />;
    case SecretSync.Windmill:
      return <WindmillSyncFields />;
    case SecretSync.TeamCity:
      return <TeamCitySyncFields />;
    default:
      throw new Error(`Unhandled Destination Config Field: ${destination}`);
  }
};
