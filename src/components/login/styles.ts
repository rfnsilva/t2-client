import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #9bcfd4;
  color: rgb(105, 104, 104);
  font-family: sans-serif;

  //CSS Card

  .container {
    width: 600px;
  }

  .card {
    padding: 1.2rem 3rem 1rem 3rem;
    margin: 1rem;
    border-radius: 1.5rem;
    border-color: rgba(238, 237, 237, 0.438);
    box-shadow: 5px 8px 10px #80808033;
  }

  @media (max-width: 767px) {
    .card {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }
  }

  .temp {
    font-size: 5rem;
    color: rgb(57, 57, 58);
  }

  .card-1 {
    background: linear-gradient(
      to right,
      #ffffff 50%,
      rgba(241, 224, 190, 0.507)
    );
  }

  @media (max-width: 767px) {
    .temp {
      font-size: 3rem;
    }
  }

  .location {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 767px) {
    .location {
      font-size: 0.75rem;
    }
  }

  .img-fluid {
    display: flex;
    align-items: center;
    -webkit-user-drag: none;
  }

  @media (max-width: 400px) {
    .container {
      width: 100%;
    }
  }

  .col {
    overflow: visible;
  }

  .row {
    overflow: visible;
    margin: 0;
  }

  //CSS Input

  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    background-color: rgb(208 208 208 / 17%);
    border-radius: 12px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 91%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: #000;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    margin-left: 23px;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
    margin-left: 25px;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
  }
  /* reset input */
  /* .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  } */

  .css-img-button {
    display: flex;
    margin-top: 38px;
    justify-content: space-between;
    align-items: center;
    width: 97%;
  }

  .error {
    width: 100%;
    color: red;
    background: linear-gradient(
      to right,
      #ffffff 50%,
      rgba(241, 224, 190, 0.507)
    );
  }

  //CSS Button
  .login-btn {
    font-family: Hack, monospace;
    background: #7bc3ca;
    color: #fff;
    cursor: pointer;
    font-size: 2em;
    padding: 1.5rem;
    border: 0;
    transition: all 0.5s;
    border-radius: 10px;
    width: 100%;
    position: relative;
    outline: none;

    &:hover {
      background: #4f9fa7;
      transition: all 0.5s;
      border-radius: 10px;
      color: #ffffff;
    }
  }

  @media (max-width: 380px) {
    .login-btn {
      width: 121px;
    }
  }

  @media (max-width: 283px) {
    .login-btn {
      font-size: 1.3rem !important;
    }
  }

  @media (max-width: 450px) {
    .login-btn {
      font-size: 1.5rem;
    }

    .css-img-button {
      width: 88%;
    }
  }
`
