import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 1.5;
    transition: all 0.50s linear;
    color: ${({ theme }) => theme.colors.body.text};
    background: ${({ theme }) => theme.colors.body.default};
    font-family: 'Noto Sans Thai', Helvetica Neue, sans-serif;
    
  }

  html {
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.body.text};
  }

  .cursor-pointer {
    cursor: pointer;
  }

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 1031;
  position: fixed;
  overflow: hidden;
  border-radius: 0px 4px 4px 0px;
  background: ${({ theme }) => theme.colors.primary.main};
}

/* Fancy blur effect */
#nprogress .peg {
  right: 0px;
  width: 100px;
  height: 100%;
  display: block;
  position: absolute;
  box-shadow: 0 0 10px ${({ theme }: any) =>
    theme.colors.primary.main}, 0 0 5px ${({ theme }: any) =>
  theme.colors.primary.main};
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  top: 15px;
  right: 15px;
  z-index: 1031;
  display: block;
  position: fixed;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border-radius: 50%;
  border: solid 2px transparent;
  border-top-color: ${({ theme }) => theme.colors.primary.main};
  border-left-color: ${({ theme }) => theme.colors.primary.main};

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.wrap {
  --rdiff: calc(var(--max) - var(--min));
  --ruse: calc(var(--tw) - (var(--thw) / 2));
  display: grid;
  position: relative;
  grid-template: repeat(2, -webkit-max-content) var(--th) / 1fr 1fr;
  grid-template: repeat(2, max-content) var(--th) / 1fr 1fr;
  margin: var(--tm);
  width: var(--tw);
  background: linear-gradient(0deg, var(--tcol) var(--th), transparent 0);
  border-radius: var(--tbr);
  border: var(--tb);
  padding: var(--tp);
  transform: var(--tt);
  height: 0.6rem;
}
.wrap::before,
.wrap::after {
  height: 0.6rem;
  grid-column: 1 / span 2;
  grid-row: 3;
  content: '';
  background: #d4001a;
  border: var(--rb);
  transform: var(--rt);
}
.wrap::before {
  margin-left: calc((var(--thw) / 4) + (var(--a) - var(--min)) / var(--rdiff) * var(--ruse));
  width: calc((var(--b) - var(--a)) / var(--rdiff) * var(--ruse));
}
.wrap::after {
  margin-left: calc((var(--thw) / 4) + (var(--b) - var(--min)) / var(--rdiff) * var(--ruse));
  width: calc((var(--a) - var(--b)) / var(--rdiff) * var(--ruse));
}

[id='multi-lbl'] {
  grid-column: 1 / span 2;
}

input[type='range'] {
  grid-column: 1 / span 2;
  grid-row: 3;
  z-index: 1;
  top: 0;
  left: 0;
  margin: 0;
  background: none;
  /* get rid of white Chrome background */
  --col: #000;
  pointer-events: none;
}
input[type='range']::-webkit-slider-runnable-track,
input[type='range']::-webkit-slider-thumb,
input[type='range'] {
  -webkit-appearance: none;
}
input[type='range']::-webkit-slider-runnable-track {
  width: 100%;
  height: 100%;
  background: none;
}
input[type='range']::-moz-range-track {
  width: 100%;
  height: 100%;
  background: none;
}
input[type='range']::-webkit-slider-thumb {
  pointer-events: auto;
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
  transform: var(--tht);
  background: #d4001a; /* Updated thc value */
  border-radius: var(--thbr);
  border: var(--thb);
}
input[type='range']::-moz-range-thumb {
  pointer-events: auto;
  cursor: pointer;
  width: 1.2rem;
  height: 1.2rem;
  transform: var(--tht);
  background: #d4001a; /* Updated thc value */
  border-radius: var(--thbr);
  border: var(--thb);
}

input[type='range']:focus {
  --col: #d4001a; /* Updated thc value */
}

input[type='range']::-moz-range-thumb:hover {
  background: #d4001a; /* Updated thfc value */
}

input[type='range']::-webkit-slider-thumb:hover {
  background: #d4001a; /* Updated thfc value */
}
`;

export default GlobalStyles;
