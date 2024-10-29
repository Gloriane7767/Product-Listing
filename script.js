// Array of product objects.
const productList = [
  {
    id: 1,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    description:
      "USB 3.0 and USB 2.0 Compatibility. Fast data transfers. Improve PC Performance. High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system.",
    price: "$64",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
  },
  {
    id: 2,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads. Read/write speeds of up to 535MB/s/450MB/s.",
    price: "$109",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
  },
  // Add more products as needed
];

// Function to generate and display product elements
function displayProducts() {
  // Select the container where products will be displayed
  const productContainer = document.querySelector(".products--list");

  // Loop through each product and create HTML element
  productList.forEach((product) => {
    const productItem = document.createElement("li");
    productItem.innerHTML = `
      <div class="product card">
        <img
          alt="This is an image"
          src="${product.image}"
          class="product--image"
        />
        <div class="product--text">
          <h1 class="product--name">${product.name}</h1>
          <p class="product--description">${product.description}</p>
          <button class="product--buy">Buy Now</button>
          <p class="product--price">${product.price}</p>
        </div>
      </div>
    `;
    productContainer.appendChild(productItem);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const productForm = document.getElementById("productForm");

  productForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload on form submit

    const productName = document.getElementById("productName").value;
    const productPrice = document.getElementById("productPrice").value;

    // Display the values or use them for further processing
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);

    // Optionally, you could add the product to a list or display it on the page
  });
});
