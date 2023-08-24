import { useState } from "react";
// import classNames from "classnames";

interface Props extends React.HTMLProps<HTMLInputElement> {
  id: string;
  name: string;
  className?: string;
  label?: string;
}

function TextField({ className, label, id, ...rest }: Props) {
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

  // const wrapperCn = classNames(className, styles.wrapper);

  return (
    <div className="form-control">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} onInvalid={onInvalid} onBlur={onBlur} {...rest} />

      {validationMessage && <p className="error">{validationMessage}</p>}
    </div>
  );
}

export default TextField;
