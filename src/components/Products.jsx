import { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      }
    }
    getProducts();
  }, [])

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
        <Skeleton count={6} height={250} className='mb-3'/>
        </div>
        <div className="col-md-3">
        <Skeleton count={6} height={250} className='mb-3'/>
        </div>
        <div className="col-md-3">
        <Skeleton count={6} height={250} className='mb-3'/>
        </div>
          
      </>
    )
  }

  const filterProducts = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className='btn btn-outline-dark me-2' onClick={()=>setFilter(data)}>All</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("men's clothing")}>Men&apos;s Clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("women's clothing")}>Women&apos;s Clothing</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("jewelery")}>Jewelery</button>
        <button className='btn btn-outline-dark me-2' onClick={()=>filterProducts("electronics")}>Electronics</button>
      </div>
      {
        filter.map((product) => {
          return (
              <div className="col-md-auto mb-4" key={product.id}>
                <div className="card">
                  <div className="card h-100 text-center p-4">
                    <img src={product.image} className="card-img-top" alt={product.title} height={"250px"} />
                    <div className="card-body">
                      <h5 className="card-title mb-0">{product.title.substring(0, 12)}</h5>
                      <p className="card-text lead fw-bold">${product.price}</p>
                      <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                    </div>
                  </div>
                </div>
              </div>
          )
        })
      }
      </>
    )
  }

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}

export default Products