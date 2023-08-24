import { useState } from "react";

interface Props extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export function TextField({ label, id, ...rest }: Props) {
  const [validationMessage, setValidationMessage] = useState<string>("");

  const onInvalid = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValidationMessage(target.validationMessage);
  };

  const onBlur = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;

    if (validationMessage) {
      setValidationMessage(target.validationMessage);
    }
  };

  return (
    <div className="form-control">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} onInvalid={onInvalid} onBlur={onBlur} {...rest} />
      {validationMessage && <p className="error">{validationMessage}</p>}
    </div>
  );
}
