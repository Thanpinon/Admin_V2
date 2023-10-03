import styled from "styled-components";

export const TableStyle = styled.div`
  max-width: 100%;
  overflow-x: auto;

  /* Container for the table with merged borders */
  .table-container {
    display: flex; /* Use flex display to arrange header and body */
  }

  /* Left side (header) styles */
  thead {
    flex: 1; /* Allow the header to take up 50% of available space */
    background-color: #f9f9f9;
  }

  /* Right side (body) styles */
  .body {
    flex: 1; /* Allow the body to take up 50% of available space */
  }

  table {
    font-size: 16px;
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #e0e2e3;
  }

  th {
    text-align: left;
    padding: 8px;
    border-bottom: 1px solid #e0e2e3;
  }

  td {
    padding: 10px;
    border-bottom: 1px solid #e0e2e3;
  }

  /* Alternate Row Background Color */
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  th.column1,
  td.column1 {
    width: 30%;
    text-align: left;
    padding-left: 5%;
    padding-top: 1%;
    padding-bottom: 1%;
    font-weight: 300;
    color: #010f1c;
    background-color: #f9f9f9;
  }

  th.column2,
  td.column2 {
    width: 70%;
    color: #55585b;
    padding-left: 5%;
    padding-top: 1%;
    padding-bottom: 1%;

    background-color: #fff;
    text-align: left;
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    table {
      font-size: 14px;
    }

    th,
    td {
      padding: 8px;
      text-align: center;
    }
  }
`;
