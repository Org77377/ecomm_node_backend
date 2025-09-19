# Project Usage

**Note**: The `node_modules` folder has been deleted due to memory occupancy.

### Setup Instructions:

1. **Unzip** the folder.
2. **Open** the folder in Visual Studio Code or any other code editor.
3. **Install dependencies**:

    Run the following command to install all the necessary libraries:
    ```bash
    npm i
    ```

### How to Run the Project:

- To start the project, run:
    ```bash
    npm start
    ```
- By default, the application will run on **port 3000**. Open your browser and type the following URL to view the app:
    ```
    http://localhost:3000
    ```

---

## API Endpoints:

### **General Routes (GET):**

- **`/`**  
  Displays the list of all products.

- **`/signup`**  
  Creates a new user.

- **`/login`**  
  Logs in a user.

- **`/addtocart`**  
  Adds a product to the logged-in user's cart.

- **`/delete`**  
  Deletes a product from the logged-in user's cart.

> **Note**: You must be logged in to use the `/addtocart` and `/delete` routes.

---

### **Cart Routes:**

- **`/cart/:name` (GET)**  
  Displays the cart items for the logged-in user.

- **`/cart/:name` (POST)**  
  Adds an item to the cart for the logged-in user.

> **Note**: 
> - To delete or update the quantity of items, the user must be logged in.
> - If a user adds a product that's already in their cart, it will update the quantity.
> - To remove an item from the cart, use the `/delete` route.

---

### **Product Routes:**

These routes can be accessed without logging in.

- **`/product` (GET)**  
  Fetches all products from the collection.

- **`/product/:id` (GET)**  
  Fetches a product by its ID.

- **`/product/:id` (PUT)**  
  Updates a product by its ID.

- **`/product` (POST)**  
  Adds a new product to the collection.

---

### Additional Notes:

- **ThunderClient** or any API testing tool can be used to test these routes (except for routes that require authentication).

---

> **Project is available in Github**
  ``` https://github.com/Org77377/ecomm_node_backend ```
