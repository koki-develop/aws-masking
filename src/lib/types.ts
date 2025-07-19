export type Settings = {
  disabled: boolean;
  maskInputs: boolean;
  maskAccountIds: boolean;
  maskArns: boolean;
  maskAccessKeyIds: boolean;
  maskSecretAccessKeys: boolean;
  maskOrganizationalUnits: boolean;
  maskRootUnits: boolean;
  maskEmails: boolean;
};

export const defaultSettings: Settings = {
  disabled: false,
  maskInputs: true,
  maskAccountIds: true,
  maskArns: true,
  maskAccessKeyIds: true,
  maskSecretAccessKeys: true,
  maskOrganizationalUnits: true,
  maskRootUnits: true,
  maskEmails: true
};
