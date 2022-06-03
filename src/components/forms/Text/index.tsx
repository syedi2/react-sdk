// import React from "react";


// export default function Text(props) {
//   console.log('props', props);
//   return (
//     <div></div>
//   );


// }

/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable react/require-default-props */
import React from "react";
import { useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { format } from "../../../helpers/formatters";

function formatNumber(props, text) {
  const { symbol, symbolPosition, displayAs, decimalPrecision } = props;
  let decPlaces = decimalPrecision;

  if (displayAs === "pxNumber") decPlaces = 0;
  else if (decimalPrecision === undefined || decimalPrecision === "-999") {
    if (symbol === "currency") decPlaces = 2;
    else decPlaces = 3;
  }

  if (symbol === "none") return format(text, "decimal", { decPlaces });
  return format(text, "currency", {
    position: symbolPosition === "right" ? "after" : "before",
    decPlaces
  });
}

export default function Text(props) {
  const {
    label,
    hideLabel,
    formatType,
    value,
    customFormat,
    additionalProps,
    testId,
    decorator,
    displayAs
  } = props;
  let { text } = props;
  text = text || value;
  const { noLabel } = additionalProps;
  const readOnly = true;
  console.log('props text', props);
  const textRef: any = useRef(null);

  useLayoutEffect(() => {
    if (displayAs === "RichTextDisplay") {
      // Prpc currently sends text as HTML
      textRef.current.innerHTML = text;
    }
  });

  if (text) {
    if (formatType === "datetime" || formatType === "date") {
      text = format(text, formatType, {
        format: customFormat || (formatType === "date" ? "LL" : "LLL")
      });
    } else if (formatType === "number") {
      text = formatNumber(props, text);
    }
  }

  if (formatType === "boolean") {
    text = format(text, formatType);
  }

  if (label !== undefined && !noLabel && text !== undefined) {
    return (
      // <Input
      //   type="text"
      //   label={label}
      //   labelHidden={hideLabel}
      //   data-testid={testId}
      //   value={text}
      //   readOnly={readOnly}
      // />
      <div></div>
    );
  }
  if (label !== undefined && !noLabel && text === undefined) {
    // return <Label>{label}</Label>;
    return null;
  }
  console.log('text', text);
  console.log('label', label);
  return (
    // <CosmosText ref={textRef}>{decorator ? decorator(text) : text}</CosmosText>
    <div></div>
  );
}

Text.propTypes = {
  formatType: PropTypes.string,
  displayAs: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  value: PropTypes.string,
  label: PropTypes.string,
  hideLabel: PropTypes.bool,
  customFormat: PropTypes.string,
  additionalProps: PropTypes.shape({
    noLabel: PropTypes.bool
  }),
  testId: PropTypes.string,
  decorator: PropTypes.func
};
