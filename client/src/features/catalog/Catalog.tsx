import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

//for safety, without interface specification, then we have to use type any, which is not safe
//any can lead to unexpected value, any allow all type to pass through without restriction

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  // function addProduct() {
  //   setProducts((prevState) => [
  //     ...products,
  //     {
  //       id: prevState.length + 1,
  //       name: "string",
  //       description: "string",
  //       price: 100,
  //       pictureUrl: "string",
  //       brand: "string",
  //     },
  //   ]);
  // }

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
