
export const fetchAllProducts = async (setAllProducts) => {
     await fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => setAllProducts(json));
};


