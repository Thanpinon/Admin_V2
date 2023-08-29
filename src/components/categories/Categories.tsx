import { cloneElement, FC, ReactElement, useEffect, useRef, useState } from "react";
import CategoryDropdown from "./CategoryDropdown";
import { StyledCategory } from "./styles";

// =====================================================================
type CategoriesProps = { open?: boolean; children: ReactElement };
// =====================================================================

const Categories: FC<CategoriesProps> = ({ open: isOpen, children }) => {
  const [open, setOpen] = useState(isOpen);
  const popoverRef = useRef(open);
  popoverRef.current = open;

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!isOpen) setOpen(!open);
  };

  const handleDocumentClick = () => {
    if (popoverRef.current && !isOpen) setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => window.removeEventListener("click", handleDocumentClick);
  }, []);

  return (
    <StyledCategory open={open}>
      {cloneElement(children, {
        open,
        onClick: toggleMenu,
        className: `${children.props.className} cursor-pointer`,
      })}
      <CategoryDropdown open={open} />
    </StyledCategory>
  );
};

export default Categories;
