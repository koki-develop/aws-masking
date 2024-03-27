import { Switch as HeadlessSwitch } from "@headlessui/react";
import clsx from "clsx";

export type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Switch({ label, checked, onChange }: SwitchProps) {
  return (
    <HeadlessSwitch.Group>
      <div className="flex items-center gap-2 whitespace-nowrap">
        <HeadlessSwitch
          className={clsx(
            "relative inline-flex h-6 w-11 items-center rounded-full transition",
            {
              "bg-primary": checked,
              "bg-gray-300": !checked
            }
          )}
          checked={checked}
          onChange={onChange}>
          <span
            className={clsx(
              "inline-block h-4 w-4 transform rounded-full bg-white transition",
              {
                "translate-x-6": checked,
                "translate-x-1": !checked
              }
            )}
          />
        </HeadlessSwitch>
        <HeadlessSwitch.Label className="cursor-pointer">
          {label}
        </HeadlessSwitch.Label>
      </div>
    </HeadlessSwitch.Group>
  );
}
