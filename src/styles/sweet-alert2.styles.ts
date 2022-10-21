import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .swal2-container-class {
    transform: unset !important;
    top: 0 !important;
    left: 0 !important;
    background-color: rgba(0, 0, 0, 0.5) !important;
    width: 100% !important;
    height: 100vh !important;
    pointer-events: all !important;
  }

  .swal2-popup-class {
    display: block !important;
    width: auto !important;
    padding: 1.5rem !important;
  }

  .swal2-icon-class {
    margin: 0 auto !important;
    border: 0.15rem solid !important;
  }

  .swal2-html-class {
    margin: 1.25rem auto 0 auto !important;
    text-align: center !important;
    font-size: 1rem !important;
  }

  .swal2-actions-class {
    margin-top: 1rem !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .swal2-confirm-button-class {
    background-color: #1A7FCD !important;
    padding: 0.75em 1.25em !important;
    font-size: 0.875rem !important;
  }

  .swal2-cancel-button-class {
    background-color: #ccc !important;
    padding: 0.75em 1.25em !important;
    font-size: 0.875rem !important;
  }

  .animate__animated {
    animation-duration: 0.35s !important;
  }
`;
