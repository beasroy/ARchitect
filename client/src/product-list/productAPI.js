// A mock function to mimic making an async request for data
export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/products")
    const data = await response.json()
    resolve({ data })
  }
  );
}

export function fetchProductsByFilters(filter) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = '';
  console.log(filter)

  Object.entries(filter).forEach(([key,value])=>queryString+=`${key}=${value.toString().trimEnd()}&`);
  queryString = queryString.substring(0, queryString.length-1);
  console.log(queryString)
  // for (let key in filter) {
  //   const categoryValues = filter[key];
  //   if (categoryValues.length!==0 ) {
  //     const lastCategoryValue = categoryValues[categoryValues.length - 1]
  //     queryString += `${key}=${lastCategoryValue}&`
  //   }
  // }
  // console.log(queryString)
  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products?' + queryString)
    const data = await response.json()
    resolve({ data })
  }
  );
}


export function fetchLocations() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/locations")
    const data = await response.json()
    resolve({ data })
  }
  );
}

 export function fetchPriceRanges() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/priceranges")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchBhk() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/bhk")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchSqft() {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:8080/sqft")
    const data = await response.json()
    resolve({ data })
  }
  );
}
export function fetchProductById(id) {
  return new Promise(async (resolve) =>{
    //TODO: we will not hard-code server URL here
    const response = await fetch('http://localhost:8080/products/'+id) 
    const data = await response.json();
    resolve({data})
  }
  );
}