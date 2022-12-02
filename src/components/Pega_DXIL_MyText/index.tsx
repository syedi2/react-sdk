import React from 'react';
// JA: Needed to add the next line
import PropTypes from "prop-types";

import { TextField } from '@material-ui/core';

// JA: Needed to update this to get from npm by default
// import FieldValueList from '../designSystemExtensions/FieldValueList';
import FieldValueList from '@pega/react-sdk-bridge-infra/lib/components/designSystemExtensions/FieldValueList';

// Currently, React SDK is not set up to use 'styled-components'. Had to add that.
import StyledPegaDxilMyTextWrapper from './styles';

export default function PegaDxilMyText(props) {
  const {
    label,
    required,
    disabled,
    value = '',
    validatemessage,
    status,
    onChange,
    onBlur,
    readOnly,
    testId,
    fieldMetadata,
    helperText,
    displayMode
  } = props;
  const helperTextToDisplay = validatemessage || helperText;

  const maxLength = fieldMetadata?.maxLength;

  let readOnlyProp = {}; // Note: empty if NOT ReadOnly

  if(displayMode === 'LABELS_LEFT'){
    const field = {
      [label]: value
    };
    return <FieldValueList item={field}/>
  }

  if (readOnly) {
    readOnlyProp = { readOnly: true };
  }

  let testProp = {};

  testProp = {
    'data-test-id': testId
  };

  return (
    <StyledPegaDxilMyTextWrapper>
    <TextField
      fullWidth
      variant={readOnly ? 'standard' : 'outlined'}
      helperText={helperTextToDisplay}
      placeholder=''
      size='small'
      required={required}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      error={status === 'error'}
      label={label}
      value={value}
      InputProps={{ ...readOnlyProp, inputProps: { maxLength, ...testProp } }} /* JA: InputProps in file from Paul was incomplete */
    />
    </StyledPegaDxilMyTextWrapper>
  );
}

PegaDxilMyText.defaultProps = {
  value: '',
  placeholder: '',
  validatemessage: '',
  helperText: '',
  displayAsStatus: false,
  hideLabel: false,
  disabled: false,
  readOnly: false,
  required: false,
  testId: null,
  fieldMetadata: {},
  additionalProps: {},
  displayMode: null,
  variant: 'inline',
  formatter: '',
  isTableFormatter: false,
  hasSuggestions: false
};

PegaDxilMyText.propTypes = {
  value: PropTypes.string,

  // eslint-disable-next-line react/no-unused-prop-types
  placeholder: PropTypes.string,
  displayMode: PropTypes.string,

  // eslint-disable-next-line react/no-unused-prop-types
  displayAsStatus: PropTypes.bool,
  label: PropTypes.string.isRequired,

  // eslint-disable-next-line react/no-unused-prop-types
  hideLabel: PropTypes.bool,

  // eslint-disable-next-line react/no-unused-prop-types
  getPConnect: PropTypes.func.isRequired,
  validatemessage: PropTypes.string,
  helperText: PropTypes.string,
  disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  readOnly: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  testId: PropTypes.string,
  fieldMetadata: PropTypes.objectOf(PropTypes.any),

  // eslint-disable-next-line react/no-unused-prop-types
  additionalProps: PropTypes.objectOf(PropTypes.any),

  // eslint-disable-next-line react/no-unused-prop-types
  variant: PropTypes.string,

  // eslint-disable-next-line react/no-unused-prop-types
  formatter: PropTypes.string,

  // eslint-disable-next-line react/no-unused-prop-types
  isTableFormatter: PropTypes.bool,

  // eslint-disable-next-line react/no-unused-prop-types
  hasSuggestions: PropTypes.bool
};
