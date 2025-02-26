# Shopping Cart Practice App  
### A simple and interactive cart system for adding and reviewing items  

This Shopping Cart Practice App allows users to add item to their cart and review their selections in an interactive overlay. The overlay provides a clear summary of selected items, including quantities, individual prices, and the total cost. Users can easily adjust their cart contents, ensuring a smooth and intuitive shopping experience. Designed to simulate real-world e-commerce functionality, this project helps in understanding cart management and checkout logic. It is a great tool for practicing dynamic UI updates and state management.  

Built with modern React.js practices, this project leverages reusable components and efficient state handling. It ensures a responsive and seamless user experience with the latest web technologies.  


## Technologies Used  

- **HTML** – Forms the structure of the app and organizes content efficiently.  
- **CSS** – Provides basic styling and layout for a polished appearance.  
- **Tailwind CSS** – Enables fast, utility-first styling with minimal custom CSS.  
- **Vite** – Ensures a lightning-fast development experience with instant hot module replacement.  
- **React.js** – Powers the dynamic UI with reusable components and efficient state management.  
- **LocalStorage** – Stores cart data persistently, ensuring the cart remains intact on page reloads.  


## Features  

### 1. Add Shirts to Cart  
- Users can add multiple shirts to their cart with a single click.  
- Items are dynamically updated in the cart without requiring a page reload.  
- Quantity increases if the same shirt is added again instead of creating duplicate entries.  

### 2. Interactive Cart Overlay  
- Displays all selected items with their quantities and individual prices.  
- Shows a live total cost calculation as items are added or removed.  
- Provides an intuitive interface for reviewing and managing cart contents.  

### 3. Persistent Cart with LocalStorage  
- Cart data is saved automatically using LocalStorage.  
- Ensures the cart remains intact even after a page refresh.  
- Allows users to resume their shopping session without losing selections.


## Installation  

Follow these steps to set up and run the Project Manager app locally (Make sure you have Node.js and npm installed before running the commands):  

1. **Clone the repository:**  
   ```sh
   git clone https://github.com/Ummamali/cartswift.git
   cd cartswift

2. **Install dependencies:**
    ```sh
    npm install
    
3. **Start the development server:**
     ```sh
     npm run dev


## License  

This project is licensed under the **MIT License**. For more details, visit [MIT License](https://opensource.org/licenses/MIT).  
