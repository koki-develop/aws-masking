import { useStorage } from "@plasmohq/storage/hook";

import Switch from "~lib/components/Switch";

import "./index.css";

import { useCallback } from "react";

import type { Settings } from "~lib/types";

function IndexPopup() {
  const [settings, setSettings] = useStorage<Settings>("AWS_MASKING_SETTINGS", {
    disabled: false,
    maskAccountIds: true,
    maskAccessKeys: true,
    maskSecretAccessKeys: true
  });

  const handleChangeEnabled = useCallback((checked: boolean) => {
    setSettings((prev) => ({ ...prev, disabled: !checked }));
  }, []);

  const handleChangeMaskAccountIds = useCallback((checked: boolean) => {
    setSettings((prev) => ({ ...prev, maskAccountIds: checked }));
  }, []);

  const handleChangeMaskAccessKeys = useCallback((checked: boolean) => {
    setSettings((prev) => ({ ...prev, maskAccessKeys: checked }));
  }, []);

  const handleChangeMaskSecretAccessKeys = useCallback((checked: boolean) => {
    setSettings((prev) => ({ ...prev, maskSecretAccessKeys: checked }));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <Switch
        label="Enabled"
        checked={!settings.disabled}
        onChange={handleChangeEnabled}
      />
      <Switch
        label="Mask Account IDs"
        checked={settings.maskAccountIds}
        onChange={handleChangeMaskAccountIds}
      />
      <Switch
        label="Mask Access Keys"
        checked={settings.maskAccessKeys}
        onChange={handleChangeMaskAccessKeys}
      />
      <Switch
        label="Mask Secret Access Keys"
        checked={settings.maskSecretAccessKeys}
        onChange={handleChangeMaskSecretAccessKeys}
      />
    </div>
  );
}

export default IndexPopup;