import styled, { css } from 'styled-components';

const transform = (transformString: string) => css`
  -webkit-transform: ${transformString};
  -moz-transform: ${transformString};
  -ms-transform: ${transformString};
  -o-transform: ${transformString};
  transform: ${transformString};
`;

const transition = (transitionString: string) => css`
  -webkit-transition: ${transitionString};
  -moz-transition: ${transitionString};
  -o-transition: ${transitionString};
  transition: ${transitionString};
`;

export const OuterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #051321;
    font-family: 'Roboto Condensed', sans-serif;
  }
`;

export const InnerContainer = styled.div`
  position: relative;
  max-width: 420px;
  padding: 40px 20px;
  overflow: hidden;
  margin: 0 auto;

  @media (min-width: 1024px) {
    position: absolute;
    top: 50%;
    left: 50%;
    ${transform(`translate(-50%, -50%)`)};
  }

  main {
    float: left;
    width: 100%;
    position: relative;

    section {
      border-radius: 5px;
      float: left;
      width: 100%;
      background-color: #eb524a;

      .content {
        float: left;
        width: 100%;
        padding: 20px 30px 50px 30px;
        position: relative;
        text-align: center;

        @media (min-width: 414px) {
          text-align: left;
        }

        img {
          display: inline-block;
          width: 140px;
          border-radius: 50%;

          @media (min-width: 414px) {
            float: left;
            width: 30%;
            margin-right: 10%;
          }
        }

        aside {
          float: left;
          width: 100%;
          color: #ffffff;
          margin-top: 10px;

          @media (min-width: 414px) {
            width: 60%;
          }

          h1 {
            font-weight: 100;
            font-size: 22px;
            margin-bottom: 10px;
          }

          p {
            font-size: 14px;
            letter-spacing: 0.5px;
            line-height: 160%;
          }
        }
      }
    }

    .title {
      float: left;
      width: 100%;
      background-color: #c63535;
      max-height: 0px;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      overflow: hidden;
      ${transition('all 0.55s')};

      &.active {
        max-height: 100px;
        ${transition('all 1.3s')};

        p {
          ${transform('scale(1)')};
          transition-delay: 0.2s;
        }
      }

      p {
        padding: 15px 30px;
        color: #ffffff;
        font-size: 16px;
        display: inline-block;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        ${transition('all 0.3s')};
        ${transform('scale(0)')};
      }
    }

    button {
      position: absolute;
      bottom: 0;
      right: 50%;
      background-color: #ffbe44;
      color: #c63535;
      border: 0;
      width: 200px;
      height: 48px;
      text-align: center;
      border-radius: 30px;
      font-size: 16px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin-bottom: -24px;
      margin-right: -100px;
      ${transition('all 0.4s')};
      transition-delay: 0.1s;
      outline: none;
      overflow: hidden;
      z-index: 10;
      font-family: inherit;

      span {
        opacity: 1;
        ${transition('opacity 0.2s')};
        transition-delay: 0.4s;
        display: block;
        width: 200px;
        float: left;
        padding: 15px 0px;
      }

      svg {
        position: absolute;
        top: 50%;
        left: 50%;
        ${transform('translate(-50%, -50%)')};
        opacity: 0;
        ${transition('all 0.4s')};

        path {
          fill: #c63535;
        }
      }

      &.active {
        margin-right: 0;
        right: 20px;
        width: 65px;
        height: 65px;
        margin-bottom: -32.5px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        border-radius: 65px;
        box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

        span {
          opacity: 0;
          transition-delay: 0s;
          width: 200px;
        }

        svg {
          opacity: 1;
          transition-delay: 0.5s;
        }
      }
    }
  }

  nav {
    float: left;
    width: 100%;
    overflow: hidden;
    max-height: 0px;
    ${transition('all 0.5s')};

    &.active {
      max-height: 600px;
      ${transition('all 1s')};

      a {
        opacity: 1;
        ${transform('translateY(0px)')};
        ${transition('all 0.7s')};

        &:nth-of-type(1) {
          transition-delay: 0.5s;
        }

        &:nth-of-type(2) {
          transition-delay: 0.7s;
        }

        &:nth-of-type(3) {
          transition-delay: 0.9s;
        }
      }
    }

    a {
      float: left;
      width: 100%;
      margin-top: 18px;
      background-color: #ffffff;
      padding: 18px 20px;
      border-radius: 5px;
      text-decoration: none;
      ${transition('all 0.3s')};
      opacity: 0;
      ${transform('translateY(-10px)')};
      position: relative;

      @media (min-width: 414px) {
        padding: 18px 30px;
      }

      .arrow {
        position: absolute;
        right: 15px;
        top: 50%;
        ${transform('translateY(-50%)')};

        path {
          fill: darken(#ffffff, 10%);
        }
      }

      &.gmail {
        .icon {
          svg {
            background-color: #d14836;
          }
        }

        .content {
          h1 {
            color: #d14836;
          }
        }
      }

      &.facebook {
        .icon {
          svg {
            background-color: #3b5998;
          }
        }

        .content {
          h1 {
            color: #3b5998;
          }
        }
      }

      &.twitter {
        .icon {
          svg {
            background-color: #1da1f2;
          }
        }

        .content {
          h1 {
            color: #1da1f2;
          }
        }
      }

      .icon {
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 20px;

        svg {
          width: 100%;
          height: 100%;
          padding: 14px;

          path {
            fill: #ffffff;
          }
        }
      }

      .content {
        h1 {
          font-size: 20px;
          font-weight: 400;
          line-height: 160%;
          letter-spacing: 0.4px;
        }

        span {
          font-size: 14px;
          color: darken(#ffffff, 30%);
          display: block;
          letter-spacing: 0.4px;
        }
      }
    }
  }
`;
