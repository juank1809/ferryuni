"use client";

import React, { Dispatch, Key, SetStateAction } from "react";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
interface Props {
  lugares: string[];
  value: Key;
  setValue: Dispatch<SetStateAction<Key>>;
}

const MapInput: React.FC<Props> = ({ lugares, setValue, value }) => {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        label="Selecciona una localización"
        className="max-w-xs"
        selectedKey={value}
        onSelectionChange={setValue}
      >
        {lugares.map((lugar) => {
          return (
            <AutocompleteItem key={lugar} value={lugar}>
              {lugar}
            </AutocompleteItem>
          );
        })}
      </Autocomplete>
    </div>
  );
};

export default MapInput;
