import { Switch as HeadlessSwitch } from "@headlessui/react";

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
          className={`${
            checked ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
          checked={checked}
          onChange={onChange}>
          <span
            className={`${
              checked ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </HeadlessSwitch>
        <HeadlessSwitch.Label className="cursor-pointer">
          {label}
        </HeadlessSwitch.Label>
      </div>
    </HeadlessSwitch.Group>
  );
}
