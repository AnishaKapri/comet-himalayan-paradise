"use client";

import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "../lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  indent?: number;
}

export function Select({
  value,
  onChange,
  options,
  placeholder = "Select…",
  disabled,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}) {
  const selected = options.find((option) => option.value === value);

  return (
    <Listbox value={value} onChange={onChange} disabled={disabled}>
      <div className={cn("relative", className)}>
        <ListboxButton className="relative w-full cursor-pointer rounded-md border border-slate-300 bg-white py-2 pl-3 pr-9 text-left text-sm shadow-sm transition hover:border-slate-400 focus:border-[var(--color-brand)] focus:outline-none data-[disabled]:cursor-not-allowed data-[disabled]:bg-slate-50 data-[disabled]:text-slate-400 data-[open]:border-[var(--color-brand)]">
          <span className={cn("block truncate", !selected && "text-slate-400")}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom start"
          transition
          className="z-50 mt-1 max-h-64 w-[var(--button-width)] origin-top overflow-auto rounded-md border border-slate-200 bg-white py-1 text-sm shadow-lg transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {options.length === 0 && <p className="px-3 py-2 text-slate-400">No options</p>}
          {options.map((option) => (
            <ListboxOption
              key={option.value}
              value={option.value}
              className="relative cursor-pointer select-none py-2 pl-9 pr-3 text-slate-700 data-[focus]:bg-slate-100"
              style={option.indent ? { paddingLeft: `${option.indent * 16 + 36}px` } : undefined}
            >
              <span className="block truncate">{option.label}</span>
              {option.value === value && (
                <Check className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-brand)]" />
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
