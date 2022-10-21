import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    gap: 0.25rem;

    li {
      width: 2.125rem;
      height: 2.125rem;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1rem;
    }

    li:first-child {
      display: none;
    }

    li:last-child {
      display: none;
    }
    
    li a {
      text-decoration: none;
      font-size: 1rem;
      color: #999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
    
    li.active a {
      color: #1A7FCD;
      background-color: #fff;
      border: 1px solid #1A7FCD;
    }

    li.active a:hover {
      background-color: #fff !important;
      color: #1A7FCD !important;
    }
    
    li a:hover,
    li a.active {
      background-color: #ccc;
    }
    
    .page-selection {
      width: 48px;
      height: 30px;
      color: #15ADEC;
    }
  }
`;
