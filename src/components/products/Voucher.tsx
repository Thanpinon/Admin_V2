import { FC, useEffect, useState } from "react";
import { CarouselVoucher } from "@component/carousel";
import SectionVoucher from "@component/SectionVoucher";
import useWindowSize from "@hook/useWindowSize";
import Category from "@models/category.model";

// =====================================================
type Props = { categoryList: Category[] };
// =====================================================

const Voucher: FC<Props> = () => {
  const width = useWindowSize();
  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    if (width < 650) setVisibleSlides(1);
    else if (width < 950) setVisibleSlides(2);
    else setVisibleSlides(3);
  }, [width]);

  return (
    <SectionVoucher iconName="categories" title="Voucher" seeMoreLink="#">
      <CarouselVoucher totalSlides={10} visibleSlides={visibleSlides}>
        test
      </CarouselVoucher>
    </SectionVoucher>
  );
};

export default Voucher;
