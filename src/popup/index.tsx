import { useStorage } from "@plasmohq/storage/hook";

import Switch from "~lib/components/Switch";

import "./index.css";

import clsx from "clsx";
import iconSrc from "data-url:../../assets/icon.png";
import { useCallback } from "react";

import { defaultSettings, type Settings } from "~lib/types";

function IndexPopup() {
  const [settings, setSettings] = useStorage<Settings>(
    "AWS_MASKING_SETTINGS",
    defaultSettings
  );

  const handleChangeEnabled = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      disabled: !checked
    }));
  }, []);

  const handleChangeMaskInputs = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskInputs: checked
    }));
  }, []);

  const handleChangeMaskAccountIds = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskAccountIds: checked
    }));
  }, []);

  const handleChangeMaskArns = useCallback((checked: boolean) => {
    setSettings((prev) => ({ ...defaultSettings, ...prev, maskArns: checked }));
  }, []);

  const handleChangeMaskAccessKeyIds = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskAccessKeyIds: checked
    }));
  }, []);

  const handleChangeMaskSecretAccessKeys = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskSecretAccessKeys: checked
    }));
  }, []);

  const handleChangeMaskOrganizationalUnits = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskOrganizationalUnits: checked
    }));
  }, []);

  const handleChangeMaskRootUnits = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskRootUnits: checked
    }));
  }, []);

  const handleChangeMaskEmails = useCallback((checked: boolean) => {
    setSettings((prev) => ({
      ...defaultSettings,
      ...prev,
      maskEmails: checked
    }));
  }, []);

  // Remove the handleChangeMaskPhoneNumbers function

  return (
    <div className="bg-secondary text-white">
      <div className="px-4 py-2 flex items-center gap-2">
        <img className="object-contain" src={iconSrc} alt="" width={20} />
        <h1 className="text-base flex-grow whitespace-nowrap">AWS Masking</h1>
        <Switch checked={!settings.disabled} onChange={handleChangeEnabled} />
      </div>

      <hr />

      <div
        className={clsx("flex flex-col gap-4 px-4 py-4", {
          "opacity-50": settings.disabled
        })}>
        <Switch
          label="Mask Inputs"
          checked={settings.maskInputs}
          onChange={handleChangeMaskInputs}
        />
        <Switch
          label="Mask ARNs"
          checked={settings.maskArns}
          onChange={handleChangeMaskArns}
        />
        <Switch
          label="Mask Account IDs"
          checked={settings.maskAccountIds}
          onChange={handleChangeMaskAccountIds}
        />
        <Switch
          label="Mask Access Key IDs"
          checked={settings.maskAccessKeyIds}
          onChange={handleChangeMaskAccessKeyIds}
        />
        <Switch
          label="Mask Secret Access Keys"
          checked={settings.maskSecretAccessKeys}
          onChange={handleChangeMaskSecretAccessKeys}
        />
        <Switch
          label="Mask Organizational Units"
          checked={settings.maskOrganizationalUnits}
          onChange={handleChangeMaskOrganizationalUnits}
        />
        <Switch
          label="Mask Root Units"
          checked={settings.maskRootUnits}
          onChange={handleChangeMaskRootUnits}
        />
        <Switch
          label="Mask Emails"
          checked={settings.maskEmails}
          onChange={handleChangeMaskEmails}
        />
      </div>
    </div>
  );
}

export default IndexPopup;
