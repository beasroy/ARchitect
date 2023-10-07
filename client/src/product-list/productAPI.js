// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/products/all", {
      method:"GET",
    });
    const {products} = await response.json();
    console.log("FROM backend" ,products);
    resolve({ products })
  }
  );
}
// export function fetchCount(amount ) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve({ data: amount }), 500)
//   );
// }

export function fetchProductsByFilters(filter) {
 
  let queryString = '';

  Object.entries(filter).forEach(([key,value])=>queryString+=`${key}=${value.toString().trimEnd()}&`);
  console.log(filter);
  queryString = queryString.substring(0, queryString.length-1);
  return new Promise(async (resolve) => {

    // const filterURL = `http://localhost:8080/products?${queryString}`
    // console.log(filterURL)
    const response = await fetch('http://localhost:8000/products/filter',
      {
        method:"POST",
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(filter)
      }
    )
  
    const data = await response.json()
    console.log("FROM FILTER API", data.products);
    // console.log(data);
    resolve({ data })
  }
  );
}


export function fetchLocations() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/filter/locations")
    const data = await response.json()
    resolve({ data })
  }
  );
}

 export function fetchPriceRanges() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/filter/priceranges")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchBhk() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/filter/bhk")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchSqft() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8000/filter/sqft")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8000/products/'+id) 
    const data = await response.json();
    resolve({data})
  }
  );
}