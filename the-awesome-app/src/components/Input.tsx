import React, { ChangeEvent, useImperativeHandle, useRef } from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  id?: string
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void

}

export interface InputType{
    focus: () => void;
    inputRef: HTMLInputElement
}

const Input = React.memo(React.forwardRef((props: InputProps, ref) => {
  
    useImperativeHandle(ref, () => {
        return {
            focus: () => {
                inputRef.current?.focus();
            },
            inputRef: inputRef.current
        }
    })

    const inputRef = useRef<HTMLInputElement>(null);
        const {label, id, ...otherProps} = props;

        return (
            <div className="form-group">
                <label htmlFor={id ? id : label}>{label}</label>
                <input ref={inputRef} {...otherProps}  id={id ? id : label} className="form-control"   />
            </div>
        );
}));

export default Input;
