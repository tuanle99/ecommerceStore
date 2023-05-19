import LoadingComponent from "../../app/layout/LoadingComponent";

import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import ProductList from "./ProductList";
import { useEffect } from "react";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

//for safety, without interface specification, then we have to use type any, which is not safe
//any can lead to unexpected value, any allow all type to pass through without restriction

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    //only load the product the first time, optimize speed, doesn't have to load product the second time accessing that page
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);

  if (status.includes("pending"))
    return <LoadingComponent message="loading products..." />;

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
