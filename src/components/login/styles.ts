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

  .row2 .img-fluid {
    margin: 10% 0;
    opacity: 0.5;
    width: 40%;
  }

  .card-2 .row {
    justify-content: center;
  }

  .card-3 .row {
    justify-content: center;
  }

  .row1 {
    font-size: 0.7rem;
    font-weight: bold;
    color: black;
  }

  .row3 {
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
  }

  @media (max-width: 400px) {
    .row3 {
      font-size: 0.7rem;
      font-weight: bold;
      color: black;
    }
    .container {
      width: 100%;
    }
  }

  @media (max-width: 320px) {
    .row3 {
      font-size: 0.6rem;
      font-weight: bold;
      color: black;
    }
  }

  .row4 {
    font-size: 0.6rem;
    color: rgb(196, 196, 196);
    margin: 5% 0 2.5rem;
  }

  .card-3 .row3 {
    margin: 5% 0 2.5rem;
  }

  .col {
    overflow: visible;
  }

  .row {
    overflow: visible;
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
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    margin-left: 20px;

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
    margin-left: 20px;
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
  .form__field {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }

  .css-img-button {
    display: flex;
    margin-top: 38px;
    justify-content: space-between;
    align-items: center;
    width: 97%;
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
