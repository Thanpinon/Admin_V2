import { Children, cloneElement, FC, ReactElement, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Box from "@component/Box";

// styled component
const AccordionWrapper = styled(Box)`
  cursor: pointer;
  overflow: hidden;
  transition: height 250ms ease-in-out;
`;

// ==========================================
type AccordionProps = {
  expanded?: boolean;
  children: ReactElement[] | any;
};
// ==========================================

const Accordion: FC<AccordionProps> = ({ expanded = false, children }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(expanded);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  const toggle = () => setOpen(!open);

  useEffect(() => {
    let parent = ref.current;

    if (parent) {
      setHeaderHeight(parent.children[0].scrollHeight);
      setParentHeight(parent.scrollHeight);
    }
  }, [ref.current]);

  const modifiedChildren = Children.map(children, (child, ind) => {
    if (ind === 0) return cloneElement(child, { open, onClick: toggle });
    else return child;
  });

  return (
    <AccordionWrapper ref={ref} height={open ? parentHeight : headerHeight}>
      {modifiedChildren}
    </AccordionWrapper>
  );
};

export default Accordion;
