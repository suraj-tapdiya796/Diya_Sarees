// Creating dynamic javascript code which will generate header and footer for all pages

function forHeader()
{
    var htmlhead =
    `
    <!-- For Top Header -->
    <div class="header" id="top-header">
        <div class="Main-logo">
            <img src="./Images/logo img.png" class="logo" alt="Main of website Logo">
        </div>
    
        <div class="search-cart">
            <div class="search-box">
                <input type="text" class="search-bar" placeholder="&nbsp;Product name, Category name, etc...">
                <button class="search-btn" id="search" style="background-color:#e0a961;">Search</button>
            </div>
    
            <div class="cart-login">
                <a href="login.html"><button class="main-login" style="background-color:#e0a961;">Login</button></a>
                </div>
                <div class="for-cart">
                 <a class="nav-link" href="cart.html">
                    <i id="cart" class="fa-solid fa-cart-shopping fa-2xl"></i>
                </a>
                </div>
            </div>
        </div>
    </div>
    <!--For Bootsrtap nav bar-->
    <nav class="navbar navbar-expand-xl bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav  mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="allproducts.html">All Products</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="women.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Women
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="allproducts.html">All products</a></li>
                            <li><a class="dropdown-item" href="dresses.html">Dresses</a></li>
                            <li><a class="dropdown-item" href="pants.html">Pants</a></li>
                            <li><a class="dropdown-item" href="skirts.html">Skirts</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="men.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Men
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="allproducts.html">All products</a></li>
                            <li><a class="dropdown-item" href="shirt.html">Shirts</a></li>
                            <li><a class="dropdown-item" href="pant.html">Pants</a></li>
                            <li><a class="dropdown-item" href="hoodie.html">Hoodies</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="kids.html">Kids</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="contact.html">Contact</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="size.html">SizeGuide</a>
                  </li>
                </ul>
            </div>
        </div>
    </nav>
        `
        ;
        // Return the header HTML code
        return htmlhead;
        }


function forFooter() {
var footerHTML=`

<footer class="footer">
<div class="footer-columns">
  <div>
    <div class="heading">Women</div>
    <div><a href="dresses.html">Dresses</a></div>
    <div><a href="pants.html">Pants</a></div>
    <div><a href="skirts.html">Skirts</a></div>
  </div>
  <div>
    <div class="heading">Men</div>
    <div><a href="shirt.html">Shirts</a></div>
    <div><a href="pant.html">Pants</a></div>
    <div><a href="hoodie.html">Hoodies</a></div>
  </div>
  <div>
    <div class="heading"><a href="kids.html">Kids</a></div>
  </div>
  <div>
    <div class="heading">Links</div>
    <div><a href="Main.html">Home</a></div>
    <div><a href="login.html">Login</a></div>
    <div><a href="contact.html">Contact</a></div>
  </div>
</div>
<!--For copyright-->   
<hr>
  <div>Copyright &copy <strong>Suraj_Creation</strong> 2024 </div>
</footer>

`; 
 return footerHTML;
        }
// Ffunction for inserting header and footer
function insertHeader() {
    // Get the header element of the current page
    var headerElement = document.querySelector('header')
    var htmlhead = forHeader();
    headerElement.innerHTML = htmlhead;
    
}
function insertfooter(){
    var footerElement = document.querySelector('footer')
    var footerhtml = forFooter();
    footerElement.innerHTML = footerhtml;
}
  
// Call the insertHeader function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', insertfooter);
document.addEventListener('DOMContentLoaded', insertHeader);