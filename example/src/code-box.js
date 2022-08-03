import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".wrapper {\n  display: flex;\n  align-items: center;\n  width:100%;\n}\n\n.codeInput {\n  box-sizing: border-box;\n  width: 20%;\n  height: 80px;\n  color: #1B2733;\n  font-weight: 600;\n  font-size: 24px;\n  line-height: inherit;\n  text-align: center;\n  vertical-align: baseline;\n  background: #FFF;\n  border: 1px solid #C1C7CD;\n  outline: none;\n}\n\n.codeInput:nth-of-type(1), .codeInput:nth-of-type(4) {\n  border-right: none;\n  border-radius: 2px 0 0 2px;\n}\n\n.codeInput:nth-of-type(2), .codeInput:nth-of-type(5) {\n  border-right: none;\n  border-radius: 0;\n}\n\n.codeInput:nth-of-type(3), .codeInput:nth-of-type(6) {\n  border-radius: 0 2px 2px 0;\n}\n\n.codeInput:focus {\n  border: 1px solid #0A64FA;\n}\n\n\n.separate {\n  margin: 0 10px;\n}";
styleInject(css_248z);

const CodeBox = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    onChange
  } = props;
  const inputRef = useRef([]);
  const [code, setCode] = useState(new Array(6).fill('')); // 读取粘贴板

  const readClipboard = e => {
    const pasteText = (e.clipboardData || window.clipboardData).getData('text').trim();
    const data = pasteText.split('').slice(0, 6);
    const newCode = code.map(v => v);
    data.forEach((item, index) => {
      newCode[index] = item;
    });
    setCode(newCode);

    if (newCode.every(v => v !== '')) {
      e.target.blur();
      onChange(newCode.join(''));
    }
  };

  useEffect(() => {
    inputRef.current[0].focus();
    document.addEventListener('paste', readClipboard);
    return function cleanup() {
      document.removeEventListener('paste', readClipboard);
    };
  }, []); // 聚焦

  const focusOn = index => {
    const el = inputRef.current[index];

    if (el) {
      el.focus();
    }
  }; // 输入框 change 事件


  const handleChange = (e, i) => {
    const value = e.target.value.trim();
    const newCode = code.map(v => v);
    newCode[i] = value;
    setCode(newCode);

    if (newCode.every(v => v !== '')) {
      e.target.blur();
      onChange(newCode.join(''));
      return;
    }

    if (value !== '') {
      focusOn(i + 1);
    }
  }; // 键盘事件


  const onKeyDown = (e, i) => {
    if (e.keyCode === 8) {
      if (e.target.value === '') {
        // 如果空的话，那么就退回到上一个输入框
        focusOn(i - 1);
      }
    }
  };

  useImperativeHandle(ref, () => ({
    clear: () => {
      focusOn(0);
      setCode(new Array(6).fill(''));
    }
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[0] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[0],
    onChange: e => {
      handleChange(e, 0);
    },
    onKeyDown: e => {
      onKeyDown(e, 0);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[1] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[1],
    onChange: e => {
      handleChange(e, 1);
    },
    onKeyDown: e => {
      onKeyDown(e, 1);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[2] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[2],
    onChange: e => {
      handleChange(e, 2);
    },
    onKeyDown: e => {
      onKeyDown(e, 2);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "separate"
  }, "-"), /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[3] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[3],
    onChange: e => {
      handleChange(e, 3);
    },
    onKeyDown: e => {
      onKeyDown(e, 3);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[4] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[4],
    onChange: e => {
      handleChange(e, 4);
    },
    onKeyDown: e => {
      onKeyDown(e, 4);
    }
  }), /*#__PURE__*/React.createElement("input", {
    className: "codeInput",
    ref: el => {
      inputRef.current[5] = el;
    },
    maxLength: "1",
    autoComplete: "false",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    value: code[5],
    onChange: e => {
      handleChange(e, 5);
    },
    onKeyDown: e => {
      onKeyDown(e, 5);
    }
  }));
});
CodeBox.propTypes = {
  onChange: PropTypes.func.isRequired
};

export { CodeBox as default };
