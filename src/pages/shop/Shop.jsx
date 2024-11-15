// import React from "react";
// import Header from "../../components/header/Header";
// import Head from "../../components/head/Head";
// import Filters from "../../components/filters/Filters";
// import ProductList from "../../components/productList/ProductList";
// import ShopFooter from "../../components/ShopFooter/ShopFooter";

// function Shop() {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: "KaneTykes Bermuda",
//       price: "$1,500.00",
//       image: "/kane.png",
//     },
//     // Add more product data here
//   ]);
//   return (
//     <>
//       <Header name="SHOP" />
//       <div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-grow">
//         <Filters onFilterChange={<div className="flex flex-col min-h-screen">
//       <Header />
//       <div className="flex flex-grow">
//         <Filters onFilterChange={/* Add filter change handler */} />
//         <ProductList products={products} />
//       </div>
//       <Footer />
//     </div>} />
//         <ProductList products={products} />
//       </div>
//       <ShopFooter />
//     </div>
//       {/* <Head />
//       <Filters />
//       <ProductList /> */}
//     </>
//   );
// }

// export default Shop;

// import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import Filters from "../../components/filters/Filters";
// import ProductList from "../../components/productList/ProductList";
// import ShopFooter from "../../components/ShopFooter/ShopFooter";

// function Shop() {
//   // State for products and filtered products
//   const [products] = useState([
//     {
//       id: 1,
//       name: "KaneTykes Bermuda",
//       price: "$1,500.00",
//       image: "/kane.png",
//     },
//     {
//       id: 2,
//       name: "Raven Silver Minks",
//       price: "$1,500.00",
//       image: "/raven.png",
//     },
//     {
//       id: 3,
//       name: "Stormy Black Glory",
//       price: "$1,500.00",
//       image: "/stormy.png",
//     },
//     {
//       id: 4,
//       name: "Raven Silver Corals",
//       price: "$1,500.00",
//       image: "/silver.png",
//     },
//   ]);

//   const [filteredProducts, setFilteredProducts] = useState(products);

//   // Handler for filtering products
//   const handleFilterChange = (filterValue) => {
//     const lowercasedFilter = filterValue.toLowerCase();
//     const filtered = products.filter((product) =>
//       product.name.toLowerCase().includes(lowercasedFilter),
//     );
//     setFilteredProducts(filtered);
//   };

//   return (
//     <>
//       <Header name="SHOP" />
//       <div className="flex min-h-screen flex-col">
//         <div className="flex flex-grow">
//           <Filters onFilterChange={handleFilterChange} />
//           <ProductList products={filteredProducts} />
//         </div>
//         <ShopFooter />
//       </div>
//     </>
//   );
// }

// export default Shop;

import React, { useState } from "react";
import Header from "../../components/header/Header";
import Filters from "../../components/filters/Filters";
import ProductList from "../../components/productList/ProductList";
import ShopFooter from "../../components/ShopFooter/ShopFooter";

function Shop() {
  const [products] = useState([
    {
      id: 1,
      name: "KaneTykes Bermuda",
      price: 1500,
      category: "sneakers",
      image: "/kane.png",
    },
    {
      id: 2,
      name: "Raven Silver Minks",
      price: 1800,
      category: "sneakers",
      image: "/raven.png",
    },
    {
      id: 3,
      name: "Stormy Black Glory",
      price: 1200,
      category: "boots",
      image: "/stormy.png",
    },
    {
      id: 4,
      name: "Raven Silver Corals",
      price: 2000,
      category: "sneakers",
      image: "/silver.png",
    },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);

  // Filter handler that accepts an object with filter values
  const handleFilterChange = ({ searchText, sortOption, category }) => {
    let filtered = products;

    // Filter by search text
    if (searchText) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }

    // Filter by category
    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    // Sort by price
    if (sortOption === "priceAsc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <>
      <Header name="SHOP" />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-grow">
          <Filters onFilterChange={handleFilterChange} />
          <ProductList products={filteredProducts} />
        </div>
        <ShopFooter />
      </div>
    </>
  );
}

export default Shop;
