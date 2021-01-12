import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #9bcfd4;

  /* height: 121%; */

  .container {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
    color: #000;
  }

  .responsive-table {
    li {
      border-radius: 3px;
      padding: 25px 30px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    .table-header {
      background-color: #95a5a6;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.03em;
    }

    .table-row {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      align-items: center;
    }

    .col-1 {
      flex-basis: 10%;
    }

    .col-2 {
      flex-basis: 40%;
    }

    .col-3 {
      flex-basis: 25%;
    }

    .col-4 {
      flex-basis: 25%;
    }

    .col-5 {
      flex-basis: 15%;
      display: flex;
      align-items: center;
      svg {
        margin: 0 5px;
        cursor: pointer;
        width: 20px;
      }
    }

    @media all and (max-width: 767px) {
      .table-header {
        display: none;
      }

      .table-row {
      }

      li {
        display: block;
      }

      .col {
        flex-basis: 100%;
      }

      .col {
        display: flex;
        padding: 10px 0;
        &:before {
          color: #6c7a89;
          background-color: #99999938;
          padding-right: 10px;
          content: attr(data-label);
        }
      }
    }
  }

  .button-edit {
    background: none;
    padding: 0;
    border: none;
    outline: none;
    color: #000;
  }

  .button-add {
    background-color: #ef8354;
    border: none;
    outline: none;
  }

  .containerButton {
    margin: 9px 0 9px 0;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const ContainerModal = styled.div`
  .modal-footer {
    .btn-primary {
      background: blue !important;
    }
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
`
