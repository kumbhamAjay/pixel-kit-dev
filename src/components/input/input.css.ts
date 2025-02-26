import { css } from '@emotion/css'
import { ThemeContextType } from '../../themeContext'

export const PiInputClass = (props: ThemeContextType) => css`
  width: 100%;
  text-align: left;
  .select-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .save-reset-icons {
      display: flex;
      gap: 16px;
    }
    .field-label-div {
      display: flex;
    }
    .tick-icon,
    .undo-icon {
      border-radius: 4px;
      cursor: pointer;
      /*box-shadow: 0px 0px 2px rgb(0 0 0 / 12%), 0px 20px 20px rgb(0 0 0 / 8%);*/
      max-height: 32px;
      max-width: 32px;
      align-items: center;
      display: flex;
      justify-content: center;
      background: #f7faff;
      border: 1px solid transparent;
      padding: 4px;

      &:hover {
        border: 1px solid #d0daec;
      }
    }
    .mandatory-star {
      color: red;
      padding-left: 4px;
    }
  }
  div {
    border-style: none;
    background-color: #fff;
  }
  div:hover {
    background-color: ${props.white};
  }
  input {
    margin: 4px 0 4px 0;
    padding: 8px 6px !important;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border: 0.125rem solid ${props.inputHoverBorder};
    border-radius: 4px;
    height: 36px !important;
    background-color: ${props.fieldBgColor};
    &:hover {
      background-color: #fff;
      border: 0.125rem solid ${props.inputHoverBorder};
    }
    &:focus {
      background-color: ${props.white};
      border: 0.125rem solid ${props.inputFocusBorder};
    }
  }
  .form-error-msg {
    color: #f60a31;
    font-size: 12px;
  }
  /*.error > input {
    border: 0.125rem solid ${props.error};
  }

  .success > input {
    border: 0.125rem solid ${props.success};
  }*/
`
