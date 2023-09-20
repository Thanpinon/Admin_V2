const navigations = [
  {
    icon: "_pc-display",
    title: "จัดสเป็กคอม",
    href: "/product/search/music",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_pc-display-horizontal",
    title: "คอมพิวเตอร์เซ็ค",
    href: "/product/search/bikes",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: "_pc-display-horizontal",
        title: "เซ็ต โปรโมชั่น",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Man Clothes",
              href: "/product/search/man-clothes",
              subCategories: [
                {
                  title: "Shirt",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "T- shirt",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
                {
                  title: "Pant",
                  href: "/product/search/pant",
                  imgUrl: "/assets/images/products/categories/pant.png",
                },
                {
                  title: "Underwear",
                  href: "/product/search/underwear",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Accessories",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: "Belt",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "Hat",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: "Watches",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
                },
                {
                  title: "Sunglasses",
                  href: "/product/search/Sunglasses",
                  imgUrl: "/assets/images/products/categories/sunglass.png",
                },
              ],
            },
            {
              title: "Shoes",
              href: "/product/search/shoes",
              subCategories: [
                {
                  title: "Sneakers",
                  href: "/product/search/Sneakers",
                  imgUrl: "/assets/images/products/categories/sneaker.png",
                },
                {
                  title: "Sandals",
                  href: "/product/search/Sandals",
                  imgUrl: "/assets/images/products/categories/sandal.png",
                },
                {
                  title: "Formal",
                  href: "/product/search/Formal",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "Casual",
                  href: "/product/search/Casual",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Bags",
              href: "/product/search/bags",
              subCategories: [
                {
                  title: "Backpack",
                  href: "/product/search/backpack",
                  imgUrl: "/assets/images/products/categories/backpack.png",
                },
                {
                  title: "Crossbody Bags",
                  href: "/product/search/Crossbody Bags",
                  imgUrl: "/assets/images/products/categories/bag.png",
                },
                {
                  title: "Side Bags",
                  href: "/product/search/Side Bags",
                  imgUrl: "/assets/images/products/categories/mini-bag.png",
                },
                {
                  title: "Slides",
                  href: "/product/search/Slides",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "_pc-display-horizontal",
        title: "เซ็ต ประจำเดือน",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "เซ็ต AMD",
              href: "/product/search/man-clothes",
              subCategories: [
                {
                  title: "Shirt",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "T- shirt",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
                {
                  title: "Pant",
                  href: "/product/search/pant",
                  imgUrl: "/assets/images/products/categories/pant.png",
                },
                {
                  title: "Underwear",
                  href: "/product/search/underwear",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Accessories",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: "Belt",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "Hat",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: "Watches",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
                },
                {
                  title: "Sunglasses",
                  href: "/product/search/Sunglasses",
                  imgUrl: "/assets/images/products/categories/sunglass.png",
                },
              ],
            },
            {
              title: "Shoes",
              href: "/product/search/shoes",
              subCategories: [
                {
                  title: "Sneakers",
                  href: "/product/search/Sneakers",
                  imgUrl: "/assets/images/products/categories/sneaker.png",
                },
                {
                  title: "Sandals",
                  href: "/product/search/Sandals",
                  imgUrl: "/assets/images/products/categories/sandal.png",
                },
                {
                  title: "Formal",
                  href: "/product/search/Formal",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "Casual",
                  href: "/product/search/Casual",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Bags",
              href: "/product/search/bags",
              subCategories: [
                {
                  title: "Backpack",
                  href: "/product/search/backpack",
                  imgUrl: "/assets/images/products/categories/backpack.png",
                },
                {
                  title: "Crossbody Bags",
                  href: "/product/search/Crossbody Bags",
                  imgUrl: "/assets/images/products/categories/bag.png",
                },
                {
                  title: "Side Bags",
                  href: "/product/search/Side Bags",
                  imgUrl: "/assets/images/products/categories/mini-bag.png",
                },
                {
                  title: "Slides",
                  href: "/product/search/Slides",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
              ],
            },
          ],
        },
      },
     
    ],
  },
  {
    icon: "_cpu",
    title: "ซีพียู",
    href: "/fashion",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Man Clothes",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
        {
          title: "Woman Clothes",
          href: "/product/search/woman-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
      ],
      rightImage: {
        imgUrl: "/assets/images/promotion/offer-1.png",
        href: "/sale-page-1",
      },
    },
  },
  {
    icon: "_motherboard",
    title: "เมนบอร์ด",
    href: "/product/search/electronics",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Man Clothes",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
        {
          title: "Woman Clothes",
          href: "/product/search/woman-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
      ],
      bottomImage: {
        imgUrl: "/assets/images/promotion/offer-5.png",
        href: "/",
      },
    },
  },
  {
    icon: "_gpu-card",
    title: "การ์ดจอ",
    href: "/product/search/bikes",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: "_gpu-card",
        title: "AMD",
        href: "/product/search/fashion",
        megaMenu: "MegaMenu1",
        menuData: {
          categories: [
            {
              title: "Man Clothes",
              href: "/product/search/man-clothes",
              subCategories: [
                {
                  title: "Shirt",
                  href: "/product/search/shirt",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "T- shirt",
                  href: "/product/search/t-shirt",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
                {
                  title: "Pant",
                  href: "/product/search/pant",
                  imgUrl: "/assets/images/products/categories/pant.png",
                },
                {
                  title: "Underwear",
                  href: "/product/search/underwear",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Accessories",
              href: "/product/search/accessories",
              subCategories: [
                {
                  title: "Belt",
                  href: "/product/search/belt",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
                {
                  title: "Hat",
                  href: "/product/search/Hat",
                  imgUrl: "/assets/images/products/categories/hat.png",
                },
                {
                  title: "Watches",
                  href: "/product/search/Watches",
                  imgUrl: "/assets/images/products/categories/watch.png",
                },
                {
                  title: "Sunglasses",
                  href: "/product/search/Sunglasses",
                  imgUrl: "/assets/images/products/categories/sunglass.png",
                },
              ],
            },
            {
              title: "Shoes",
              href: "/product/search/shoes",
              subCategories: [
                {
                  title: "Sneakers",
                  href: "/product/search/Sneakers",
                  imgUrl: "/assets/images/products/categories/sneaker.png",
                },
                {
                  title: "Sandals",
                  href: "/product/search/Sandals",
                  imgUrl: "/assets/images/products/categories/sandal.png",
                },
                {
                  title: "Formal",
                  href: "/product/search/Formal",
                  imgUrl: "/assets/images/products/categories/shirt.png",
                },
                {
                  title: "Casual",
                  href: "/product/search/Casual",
                  imgUrl: "/assets/images/products/categories/t-shirt.png",
                },
              ],
            },
            {
              title: "Bags",
              href: "/product/search/bags",
              subCategories: [
                {
                  title: "Backpack",
                  href: "/product/search/backpack",
                  imgUrl: "/assets/images/products/categories/backpack.png",
                },
                {
                  title: "Crossbody Bags",
                  href: "/product/search/Crossbody Bags",
                  imgUrl: "/assets/images/products/categories/bag.png",
                },
                {
                  title: "Side Bags",
                  href: "/product/search/Side Bags",
                  imgUrl: "/assets/images/products/categories/mini-bag.png",
                },
                {
                  title: "Slides",
                  href: "/product/search/Slides",
                  imgUrl: "/assets/images/products/categories/belt.png",
                },
              ],
            },
          ],
        },
      },
      {
        icon: "_gpu-card",
        title: "NVidia",
        href: "/product/search/electronics",
        megaMenu: 2,
      },
      {
        icon: "_gpu-card",
        title: "Intel",
        href: "/product/search/home&garden",
        megaMenu: 3,
      },
      // {
      //   icon: "baby-girl",
      //   title: "Baby Girl",
      //   href: "/product/search/bikes",
      //   megaMenu: "MegaMenu1",
      // },
    ],
  },
  {
    icon: "_memory",
    title: "แรม",
    href: "/product/search/home&garden",
    menuComponent: "MegaMenu1",
    menuData: {
      categories: [
        {
          title: "Man Clothes",
          href: "/product/search/man-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
        {
          title: "Woman Clothes",
          href: "/product/search/woman-clothes",
          subCategories: [
            {
              title: "Shirt",
              href: "/product/search/shirt",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "T- shirt",
              href: "/product/search/t-shirt",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
            {
              title: "Pant",
              href: "/product/search/pant",
              imgUrl: "/assets/images/products/categories/pant.png",
            },
            {
              title: "Underwear",
              href: "/product/search/underwear",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Accessories",
          href: "/product/search/accessories",
          subCategories: [
            {
              title: "Belt",
              href: "/product/search/belt",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
            {
              title: "Hat",
              href: "/product/search/Hat",
              imgUrl: "/assets/images/products/categories/hat.png",
            },
            {
              title: "Watches",
              href: "/product/search/Watches",
              imgUrl: "/assets/images/products/categories/watch.png",
            },
            {
              title: "Sunglasses",
              href: "/product/search/Sunglasses",
              imgUrl: "/assets/images/products/categories/sunglass.png",
            },
          ],
        },
        {
          title: "Shoes",
          href: "/product/search/shoes",
          subCategories: [
            {
              title: "Sneakers",
              href: "/product/search/Sneakers",
              imgUrl: "/assets/images/products/categories/sneaker.png",
            },
            {
              title: "Sandals",
              href: "/product/search/Sandals",
              imgUrl: "/assets/images/products/categories/sandal.png",
            },
            {
              title: "Formal",
              href: "/product/search/Formal",
              imgUrl: "/assets/images/products/categories/shirt.png",
            },
            {
              title: "Casual",
              href: "/product/search/Casual",
              imgUrl: "/assets/images/products/categories/t-shirt.png",
            },
          ],
        },
        {
          title: "Bags",
          href: "/product/search/bags",
          subCategories: [
            {
              title: "Backpack",
              href: "/product/search/backpack",
              imgUrl: "/assets/images/products/categories/backpack.png",
            },
            {
              title: "Crossbody Bags",
              href: "/product/search/Crossbody Bags",
              imgUrl: "/assets/images/products/categories/bag.png",
            },
            {
              title: "Side Bags",
              href: "/product/search/Side Bags",
              imgUrl: "/assets/images/products/categories/mini-bag.png",
            },
            {
              title: "Slides",
              href: "/product/search/Slides",
              imgUrl: "/assets/images/products/categories/belt.png",
            },
          ],
        },
      ],
    },
  },
  {
    icon: "_device-hdd",
    title: "ฮาร์ดดิสก์ และ เอสเอสดี",
    href: "/product/search/gifts",
    menuComponent: "MegaMenu2",
    menuData: [
      {
        icon: "dress",
        title: "Fashion",
        href: "/product/search/fashion",
      },
      {
        icon: "laptop",
        title: "Electronics",
        href: "/product/search/electronics",
      },
      {
        icon: "plant-pot",
        title: "Home & Garden",
        href: "/product/search/home&garden",
      },
      {
        icon: "motorbike",
        title: "Bikes",
        href: "/product/search/bikes",
      },
      {
        icon: "gift-1",
        title: "Gifts",
        href: "/product/search/gifts",
      },
      {
        icon: "voice-recorder",
        title: "Music",
        href: "/product/search/music",
      },
      {
        icon: "make-up",
        title: "Health & Beauty",
        href: "/product/search/health&beauty",
      },
      {
        icon: "track",
        title: "Pets",
        href: "/product/search/pets",
      },
      {
        icon: "teddy-bear",
        title: "Baby Toys",
        href: "/product/search/baby-toys",
      },
      {
        icon: "food",
        title: "Groceries",
        href: "/product/search/groceries",
      },
      {
        icon: "car",
        title: "Automotive",
        href: "/product/search/automotive",
      },
    ],
  },
  {
    icon: "_safe2",
    title: "พาวเวอร์ซัพพลาย",
    href: "/product/search/music",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_fan",
    title: "ชุดระบายความร้อน",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_laptop",
    title: "โน๊ตบุ๊ก",
    href: "/product/search/health&beauty",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_mouse2",
    title: "เมาส์",
    href: "/product/search/pets",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_keyboard",
    title: "คีย์บอร์ด",
    href: "/product/search/baby-toys",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_display",
    title: "จอ คอมพิวเตอร์",
    href: "/product/search/groceries",
    menuComponent: "MegaMenu1",
  },
  {
    icon: "_controller",
    title: "อุปกรณ์เสริม",
    href: "/product/search/automotive",
    menuComponent: "MegaMenu1",
  },
];

export default navigations;
