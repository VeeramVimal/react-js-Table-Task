import "./styles.css";
// import Table from "react-bootstrap/Table";
import { productData } from "./mockData";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(productData?.products);
  }, [productData?.products?.length]);
  return (
    <div className="App">
      <table className="table table-stripped">
        <thead>
          {/* <tr> */}
          <th>Title</th>
          <th>description</th>
          <th>price</th>
          <th>discountPercentage</th>
          <th>rating</th>
          <th>stock</th>
          <th>brand</th>
          <th>category</th>
          <th>thumbnail</th>
          <th>images</th>
          {/* </tr> */}
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.discountPercentage}</td>
                <td>{item.rating}</td>
                <td>{item.stock}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>
                  <image src={`${item.thumbnail}`} />
                </td>
                <td>
                  <image src={`${item.images}`} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
