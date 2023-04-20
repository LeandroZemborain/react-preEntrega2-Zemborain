import React, { Fragment, useState } from "react";
import ItemComponent from "../components/ItemComponent";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
const BASE_URL = "https://fakestoreapi.com/products/category";

const CategoryView = (props) => {
  const [count, setCount] = useState(0);
  const {category} = useParams();
  const [data, loading] = useFetch(`${BASE_URL}/${category}`);

  const updateCount = () => {
    setCount(count + 1);
  };

  return (
    <Fragment>
      <div className="container">
        <h1>Total: {count}</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {loading ? (
            <h1>Estamos cargando tu info...</h1>
          ) : (
            data.map((item, index) => {
              return (
                <div key={index} className="col">
                  <ItemComponent  data={item} handlerUpdate={updateCount} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryView;
