const creatNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <nav class="navbar">
    <div class="nav">
        <a href="index.html"><img src="images/title.jpg" class="brand-logo" alt=""></a>
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search Product">
            <button class="search-butt">Search</button>
        </div>
        <a href="account.html"><img src="images/user.png" alt=""></a>
        <a href="cart.html"><img src="images/cart.png" alt=""></a>
    </div>
</div>
<ul class="links">
    <li class="link-items"><a href="index.html" class="link">Home</a></li>
    <li class="link-items"><a href="about.html" class="link">About</a></li>
    <li class="link-items"><a href="men.html" class="link">Men</a></li>
    <li class="link-items"><a href="women.html" class="link">Women</a></li>
    <li class="link-items"><a href="location.html" class="link">Location</a></li>
</ul> `;

}

creatNav();