import { Switch as HeadlessSwitch } from "@headlessui/react";

export type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Switcha({ label, checked, onChange }: SwitchProps) {
  return (
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
  );
}
