import { FC } from "react";
import styled from "styled-components";
import { Span } from "@component/Typography";

// styled components
const BadgeContainer = styled.div`
  display: flex;
  margin-right: 30px;
  flex-direction: row;
  align-items: center;
`;

const StyledBadge = styled.span`
  font-size: 11px;
  padding: 1px 5px;
  color: #e94560;
  font-weight: 600;
  border-radius: 6px;
  background: #ffe1e6;
`;

// ==========================================================
interface Props {
  style?: object;
  title: string | number;
  children: string | number;
}
// ==========================================================

const Badge: FC<Props> = ({ title, children, style }) => {
  return (
    <BadgeContainer style={style}>
      {title && (
        <Span style={{ marginRight: "5px" }} className="nav-link">
          {children}
        </Span>
      )}
      <StyledBadge>{title}</StyledBadge>
    </BadgeContainer>
  );
};

export default Badge;
