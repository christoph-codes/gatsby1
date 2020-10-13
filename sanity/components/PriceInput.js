import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(Number(value)));
}
const formatMoney = Intl.NumberFormat('en-nv', {
    style: 'currency',
    currency: 'USD',
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div className="PriceInput">
      <h2>{type.title} - {value && formatMoney(value)}</h2>
      <p>{type.description}</p>
      <input
        type={type.name}
        value={value}
        onChange={e => {
          onChange(createPatchFrom(e.target.value));
        }}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function() {
  this._inputElement.focus();
};
