import axios from "axios";
const BASEURL = process.env.REACT_APP_BASEURL
const APIKEY = process.env.REACT_APP_APIKEY
// Export an object containing methods we'll use for accessing the Google Book API

// export default { 
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   },
  
export default { 
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }, 

  searchId: function(keyId) {
    return axios.get("https://www.googleapis.com/books/v1/volumes/" + keyId);
  },
  // Gets all Carts
  getCarts: function() {
    return axios.get("/api/carts");
  },
      // getBooks: function() {
      //   return axios.get("/api/books");
      // },

  // Gets the cart with the given id
  getCart: function(id) {
    return axios.get("/api/carts/" + id);
  },
  // Update the cart with the given id
  updateCart: function(idd) {    
    const id = idd._id;
    const qtys = String(idd.qty);       
    return axios.put("/api/carts/" + id, [qtys]);
  },

   // Saves Cart to the database
   saveCart: function(cartData) {
    return axios.post("/api/carts", cartData);
  },

  // Deletes the Cart with the given id
  deleteCart: function(id) {    
    return axios.delete("/api/carts/" + id);
  }, 
//*********************************************************************** */
  //GET ORDERS
  getOrders: function() {
    return axios.get("/api/orders");
  },  
  // ORDERS DB UPDATE
  saveOrder: function(order) {    
    return axios.post("/api/orders/", order);  
  },
  //********************************************************************** */

  //GET ORDERS
  getSavedItems: function() {
    return axios.get("/api/saveditems");
  },  
  // SAVED ITEMS DB UPDATE
  SavedItems: function(savedItem) {   
    return axios.post("/api/saveditems/", savedItem);   
  },
  // Deletes the Saved Item with the given id
  deleteSavedItem: function(id) {        
    return axios.delete("/api/saveditems/" + id);
  }, 

  //******************************************************************* */
  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function(currentAccount) {    
    return axios.get(`/api/users/current/${currentAccount.userName}`);
  },
  // Update the user with the given id
  updateUser: function(id) {
    return axios.put("/api/users", id);
  },

  deleteUser: function(id) {    
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database.
  saveUser: function(newAccount) {
    return axios.post("/api/users", newAccount);
  },
  loginUser: function(userAccount) {
    return axios.post("/api/users/login", userAccount);
  }  
};
