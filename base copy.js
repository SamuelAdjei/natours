doctype html 
html 
    head 
        meta(charset='UTF-8')
        meta(name='viewport' content='width=device-width, initial-scale=1.0')
        link(rel="stylesheet", href="css/style.css")
        link(rel="shortcut icon", type='image/png' href="img/favicon.png")
        link(rel="stylesheet", href='https://fonts.googleapis.com/css?family=Lato:300,300i,700')
        title Natours | Exciting tours for adventurous people



    body
    // HEADER
    header.header  
        nav.nav.nav--tours
            a.nav__el(href='#') All tours
        .header__logo
            img(src='img/logo-white.png' alt='Natours logo')
        nav.nav.nav--user
            //- a.nav__el(href='#') My bookings
            //- a.nav__el(href='#')
            //-     img.nav__user-img(src='img/user.jpg' alt='User photo')
            //-     span Jonas
            button.nav__el Log in 
            button.nav__el.nav__el--cta Sign up 

    // CONTENT
    section.overview
        h1= tour
    

    // FOOTER
    footer.footer   
        .footer__logo
            img(src='img/logo-green.png' alt='Natourlogo')
        ul.footer__nav
            li: a(href='#') About Us
            li: a(href='#') Download Apps
            li: a(href='#') Become a guide
            li: a(href='#') Careers
            li: a(href='#') Contact
        p.footer__copyright &copy; by Samuel Adjei.



