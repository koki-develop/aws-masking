export type Settings = {
  disabled: boolean;
  maskInputs: boolean;
  maskAccountIds: boolean;
  maskArns: boolean;
  maskAccessKeys: boolean;
  maskSecretAccessKeys: boolean;
};

export const defaultSettings: Settings = {
  disabled: false,
  maskInputs: true,
  maskAccountIds: true,
  maskArns: true,
  maskAccessKeys: true,
  maskSecretAccessKeys: true
};
