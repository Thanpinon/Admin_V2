import styled from "styled-components";

const StyledFlashSaleBar = styled.div`
  /* styles.module.css or styled-components styles */
  .flash-sale-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px; /* You can adjust the height as needed (e.g., 120-150px) */
    padding: 10px;
    background-color: rgba(253, 75, 107, 0.05);
    color: #fd4b6b;

    border: 1px solid #fd4b6b;
  }

  .flash-sale-left {
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
  }

  .flash-icon {
    margin-right: 5px;
  }

  .flash-sale-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
  }

  .countdown-text {
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-weight: bold;
  }

  .countdown-text div {
    text-align: center;
  }
  @media (max-width: 280px) {
    .flash-sale-left,
    .flash-icon,
    .flash-sale-right {
      font-size: 13px; /
    }
  }
`;

export default StyledFlashSaleBar;
