import { ProductCard } from "./components/ProductCard";

const products = [
  {
    id: 0,
    name: "Product 1",
    category: "Category 1",
    price: 200,
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png",
  },
  {
    id: 1,
    name: "Product 2",
    category: "Category 1",
    price: 500,
    img: "https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_desert_titanium_pdp_image_position_1__gben_2.png",
  },
];

function App() {
  return (
    <div>
      {products.map((product) => (
        <ProductCard data={product} />
      ))}
    </div>
  );
}

export default App;
