import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({allProducts}) => {
  return (
    <Container>
      {allProducts.map((product) => (
        <Product img={product.image} key={product.id}/>
      ))}
    </Container>
  );
};

export default Products;
