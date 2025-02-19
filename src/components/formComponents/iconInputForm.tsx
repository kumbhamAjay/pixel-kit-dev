import React from 'react'
import { Field } from 'formik'
import { PiInputProps } from '../input/input'
import Textfield from '@atlaskit/textfield'
import { PiTypography } from '../..'
import { PiTickIcon } from '../icon/tick.icon'
import { PiUndoIcon } from '../icon/undo.icon'

export default function PiIconInputForm({
  onChange,
  onKeyDown,
  onClick,
  ...formField
}: PiInputProps) {
  const handleValueChange: any = (e: any) => {
    if (formField?.isAllowZero) {
      let { value } = e.target;

      if (value === "0" || value === "0.00") {
        e.target.value = value;
      } else if (value.startsWith("0")) {
        if (value.startsWith("0.") && /^\d+(\.\d{0,2})?$/.test(value)) {
          e.target.value = value;
        } else {
          e.target.value = "0";
        }
      }
    }


    if (onChange) {
      onChange(e);
    }
  };


  const onFieldClick = () => {
    const input: any = document.getElementById(formField.name)

    setTimeout(() => {
      input.focus()
      input.select()
    }, 10)
  }

  return (
    <Field name={formField.name}>
      {({ field, form, meta }: any) => (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className='select-label'>
            {formField.label && (
              <div className='field-label-div' style={{ display: 'flex' }}>
                <PiTypography component='label'>{formField.label}</PiTypography>
                {formField.isMandatory && (
                  <span
                    className='mandatory-star'
                    style={{ color: 'red', paddingLeft: '4px' }}
                  >
                    *
                  </span>
                )}
              </div>
            )}
            {formField.isIcons && (
              <div>
                <div className='tick-icon' title='Save Changes'>
                  <PiTickIcon
                    onClick={(e: any) => {
                      formField.emitSave ? formField.emitSave(e) : null
                    }}
                  />
                </div>

                <div className='undo-icon' title='Undo Changes'>
                  <PiUndoIcon
                    onClick={(e: any) => {
                      formField.emitUndo ? formField.emitUndo(e) : null
                    }}
                  />
                </div>
              </div>
            )}
          </div>
          <Textfield
            {...field}
            id={formField.name}
            onChange={(e: any) => {
              handleValueChange(e)
              form.setFieldValue(e.target.name, e.target.value)
            }}
            onKeyPress={(e: any) => {
              var key = e.charCode ? e.charCode : e.keyCode
              if (
                (key === 32 || key === 44 || key === 13) &&
                formField.type === 'string'
              ) {
                e.preventDefault()
                return false
              }
              if (
                (key === 32 || key === 46 || key === 101) &&
                formField.type === 'number'
              ) {
                e.preventDefault()
                return false
              } else if (formField.type === 'string') {
                var t = e.target.value
                if (
                  key !== 37 &&
                  key !== 39 &&
                  e.target.selectionStart > t.indexOf('.')
                ) {
                  e.target.value =
                    t.indexOf('.') > 0
                      ? t.substr(0, t.indexOf('.')) +
                      t.substr(
                        t.indexOf('.'),
                        formField.allowedDecimalsPoints
                          ? formField.allowedDecimalsPoints
                          : 2
                      )
                      : t
                  return true
                } else {
                  return true
                }
              } else {
                return true
              }
            }}
            onKeyUp={() => { }}
            onKeyDown={onKeyDown}
            onClick={onFieldClick}
            elemBeforeInput={formField.elemBeforeInput}
            label={formField.label}
            type={formField.type}
            placeholder={formField.placeholder}
            isDisabled={formField.isDisabled}
            maxLength={formField.maxLength}
            isMandatory={formField.isMandatory}
            isAllowZero={formField?.isAllowZero}
          />
          <small className='validation-error'>
            {meta.touched && meta.error ? meta.error : ''}
          </small>
        </div>
      )}
    </Field>
  )
}
