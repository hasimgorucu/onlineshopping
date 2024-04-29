import { useGetAllProductsQuery } from "../sliceses/producApi";
import ProductCard from "./ProductCard";
import './Home.css'



function Home() {
  const {data, error, isLoading} = useGetAllProductsQuery();
  
  return (
    <div className="home-container">
      <h1>TÜM ÜRÜNLER</h1>
      <div className="products-container">
        {isLoading && <div>Loading..</div>}
        {error && <div>Bir Hata oluştu..</div>}
        <div className="card-container">
        {data && data?.map((item,index)=>{
         return <ProductCard key={index} data={item}/>
        })}
        </div>
      </div>
    </div>
  )
}

export default Home;
