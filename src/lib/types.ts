export type Settings = {
  disabled: boolean;
  maskInputs: boolean;
  maskAccountIds: boolean;
  maskArns: boolean;
  maskAccessKeyIds: boolean;
  maskSecretAccessKeys: boolean;
};

export const defaultSettings: Settings = {
  disabled: false,
  maskInputs: true,
  maskAccountIds: true,
  maskArns: true,
  maskAccessKeyIds: true,
  maskSecretAccessKeys: true
};
