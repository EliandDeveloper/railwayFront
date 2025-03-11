
const api_url = 'https://localhost:7158/api/';
const new_api = 'https://railwaytest-production-d2b3.up.railway.app/api'

export const endpoind = {
    GET_PRODUCTS: api_url + 'Products/GetProducts',
    SAVE_PRODUCT: api_url + 'Products/SaveProduct',
    UPDATE_PRODUCT: api_url +'Products/UpdateProduct',
    REMOVE_PRODUCT: api_url + 'Products/RemoveProduct',
    GET_EMPLOYEES: new_api + '/empleados',
  };