const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
        <div class="footer-content">
        <img src= "images/title.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">Categories</li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
            </ul>
        </div>
    </div>
    
    
    <p class="info">support emails - help@JSclothing.com, JScustomersupport@JSclothing.com</p>
    <p class="info">telephone - (999)123-4568
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Just Sayin Clothing LLC</p>
    `;
}

createFooter();