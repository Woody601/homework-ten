var homeContent = `
<title>Home</title>
<div class="home">
<section class="hero">
  <div class="travel-fly">travel-fly</div>
  <div class="description">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br />Fugiat
    aliquid minus nemo sed est.
  </div>
  <div class="read-more">Read More</div>
</section>
<section class="promo-trips">
  <div class="trip-location" id="israel">
    <div class="location-name">Israel</div>
    <div class="trip-price">from $1000</div>
    <div class="learn-more">Learn More</div>
  </div>
  <div class="trip-location" id="usa">
    <div class="location-name">U.S.A</div>
    <div class="trip-price">from $1500</div>
    <div class="learn-more">Learn More</div>
  </div>
  <div class="trip-location" id="austrailia">
    <div class="location-name">Aussie</div>
    <div class="trip-price">from $1800</div>
    <div id="austrailia" class="learn-more">Learn More</div>
  </div>
</section>
<section class="booking">
  <h1>Booking form</h1>
  <div class="booking-wrapper">
    <div class="short-input">
      <!--<label for="fName">name...</label>-->
      <input type="text" placeholder="name..." />
    </div>
    <div class="short-input">
      <!--<label for="email">email...</label>-->
      <input type="text" placeholder="email..." />
    </div>
    <div class="short-input">
      <!--<label for="country">country...</label>-->
      <input type="text" placeholder="country..." />
    </div>
    <div class="short-input">
      <!--<label for="hotel">hotel...</label>-->
      <input type="text" placeholder="hotel..." />
    </div>
    <div class="date-input">
      <label for="checkIn">Check-in...</label>
      <input type="date" />
    </div>
    <div class="date-input">
      <label for="checkOut">Check-out...</label>
      <input type="date" />
    </div>
    <div class="number-select">
      <label for="numAdults">Adults</label>
      <select name="adults">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="number-select">
      <label for="numChildren">Children</label>
      <select name="children">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="number-select">
      <label for="numRooms">Rooms</label>
      <select name="rooms">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="long-input">
      <textarea name="message" placeholder="message..."></textarea>
    </div>
    <input class="booking-submit" type="submit" value="Submit" />
  </div>
</section>
</div>`;

var aboutContent = `
<title>About</title>
<div class="about">
        <section class="hero">
          <div class="header">About:</div>
          <div class="description">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.
          </div>
        </section>
        <section class="clients">
            <h1>Client Quotes:</h1>
            <div class="quote">
                <img src="images/client1.png">
                <div class="quote-content">
                    <div class="quote-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                <div class="client">- Miranda Brown</div>
                </div>
            </div>
            <div class="quote">
                <img src="images/client2.png">
                <div class="quote-content">
                    <div class="quote-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
                <div class="client">- Johnathan Wes</div>
                </div>
            </div>
        </section>
    </div>
`;

var toursContent = `
<div class="tours">
        <section class="hero">
            <div class="header">Tours:</div>
          </section>
          <section class="promo-trips">
            <div class="trip-location" id="israel">
              <div class="location-name">Israel</div>
              <div class="trip-price">from $1000</div>
              <div class="learn-more"><a id="israel" href="#">Learn More</a></div></a>
            </div>
            <div class="trip-location" id="usa">
              <div class="location-name">U.S.A</div>
              <div class="trip-price">from $1500</div>
              <div class="learn-more"><a id="usa" href="#">Learn More</a></div>
            </div>
            <div class="trip-location" id="austrailia">
              <div class="location-name">Austrailia</div>
              <div class="trip-price">from $1800</div>
              <div class="learn-more"><a id="austrailia" href="#">Learn More</a></div>
            </div>
            <div class="trip-location" id="newzealand">
                <div class="location-name">New Zealand</div>
                <div class="trip-price">from $1200</div>
                <div class="learn-more"><a id="newzealand" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="france">
                <div class="location-name">France</div>
                <div class="trip-price">from $2500</div>
                <div class="learn-more"><a id="france" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="egypt">
                <div class="location-name">Eygpt</div>
                <div class="trip-price">from $900</div>
                <div class="learn-more"><a id="egypt" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="japan">
                <div class="location-name">Japan</div>
                <div class="trip-price">from $1300</div>
                <div class="learn-more"><a id="japan" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="canada">
                <div class="location-name">Canada</div>
                <div class="trip-price">from $2000</div>
                <div class="learn-more"><a id="canada" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="uae">
                <div class="location-name">U.A.E.</div>
                <div class="trip-price">from $3000</div>
                <div class="learn-more"><a id="uae" href="#">Learn More</a></div>
              </div>
          </section>
    </div>
`

var israelContent = `
<title>Israel Tour</title>
<div class="tours">
        <section class="hero">
            <div class="header">Tours:</div>
          </section>
          <section class="promo-trips">
            <div class="trip-location" id="israel">
              <div class="location-name">Israel</div>
              <div class="trip-price">from $1000</div>
              <div class="learn-more"><a id="israel" href="#">Learn More</a></div></a>
            </div>
            <div class="trip-location" id="usa">
              <div class="location-name">U.S.A</div>
              <div class="trip-price">from $1500</div>
              <div class="learn-more"><a id="usa" href="#">Learn More</a></div>
            </div>
            <div class="trip-location" id="austrailia">
              <div class="location-name">Austrailia</div>
              <div class="trip-price">from $1800</div>
              <div class="learn-more"><a id="austrailia" href="#">Learn More</a></div>
            </div>
            <div class="trip-location" id="newzealand">
                <div class="location-name">New Zealand</div>
                <div class="trip-price">from $1200</div>
                <div class="learn-more"><a id="newzealand" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="france">
                <div class="location-name">France</div>
                <div class="trip-price">from $2500</div>
                <div class="learn-more"><a id="france" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="egypt">
                <div class="location-name">Eygpt</div>
                <div class="trip-price">from $900</div>
                <div class="learn-more"><a id="egypt" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="japan">
                <div class="location-name">Japan</div>
                <div class="trip-price">from $1300</div>
                <div class="learn-more"><a id="japan" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="canada">
                <div class="location-name">Canada</div>
                <div class="trip-price">from $2000</div>
                <div class="learn-more"><a id="canada" href="#">Learn More</a></div>
              </div>
              <div class="trip-location" id="uae">
                <div class="location-name">U.A.E.</div>
                <div class="trip-price">from $3000</div>
                <div class="learn-more"><a id="uae" href="#">Learn More</a></div>
              </div>
          </section>
      <footer>
        <div class="logo">travel-fly</div>
        <div class="copyright">
          Copyright 2019 travel-fly. All rights reserved
        </div>
        <div class="social-media"></div>
      </footer>
    </div>
`;

var usaContent = `
<title>U.S.A Tour</title>

`;

var austrailiaContent = `
<title>Austrailia Tour</title>

`;

var newzealandContent = `
<title>New Zealand Tour</title>

`;

var franceContent = `
<title>France Tour</title>

`;

var egyptContent = `
<title>Egypt Tour</title>

`;

var japanContent = `
<title>Japan Tour</title>

`;

var canadaContent = `
<title>Canada Tour</title>

`;

var uaeContent = `
<title>U.A.E Tour</title>

`;

var special_offersContent = `
<title>Special Offers</title>
<div class="special-offers">
      <div class="wrapper">
        <div class="offer">
          <div class="offer-header">
            <h1>Special Offer(s):</h1>
          </div>
          <div class="offer-post">
            <div class="offer-image">
                <img src="images/spain.png" alt="">
            </div>
            <div class="offer-text">
                <div class="offer-title">BARCELONA, SPAIN</div>
                <div class="offer-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
            </div>
        </div>
        <div class="offer-post">
          <div class="offer-image">
              <img src="images/spain.png" alt="">
          </div>
          <div class="offer-text">
              <div class="offer-title">BANGKOK, THAILAND</div>
              <div class="offer-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
          </div>
      </div>
    </div>
    </div>
`
var blogContent = `
<title>Blog</title>
<div class="wrapper">
        <div class="blog">
          <div class="blog-header">
            <h1>Blog:</h1>
          </div>
          <div class="blog-post">
            <div class="blog-date">
                <div class="date">06</div>
                <div class="month">Jun</div>
            </div>
            <div class="blog-image">
                <img src="images/blogimage.png" alt="">
            </div>
            <div class="blog-text">
                <div class="blog-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
            </div>
        </div>
        <div class="blog-post">
            <div class="blog-date">
                <div class="date">06</div>
                <div class="month">Jun</div>
            </div>
            <div class="blog-image">
                <img src="images/blogimage.png" alt="">
            </div>
            <div class="blog-text">
                <div class="blog-title">Sed et persipiatis unde omnis iste natus</div>
                <div class="blog-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </div>
            </div>
        </div>
    </div>
    </div>
`;

var contactContent = `
<title>Contact Us</title>
<div class="wrapper">
        <div class="contact">
          <div class="contact-header">
            <h1>Contact Us:</h1>
          </div>
          <div class="map">
            <div class="map-image"><img src="images/map.png" /></div>
            <div class="address">
              travel-fly Inc.<br />
              8901 Marmora Road,<br />
              Glasgow, D04 89GR.<br />Freephone:+1 800 559 6580 <br />
              Telephone:+1 800 603 6035 <br />
              FAX:+1 800 889 9898 <br />
              E-mail: <a href="mailto:mail@travelfly.org">mail@travelfly.org</a>
            </div>
          </div>
          <div class="contactForm">
            <input
              type="text"
              class="textFields"
              name="yourName"
              id="yourName"
              placeholder="Your name..."
            />
            <input
              type="text"
              class="textFields"
              name="email"
              id="email"
              placeholder="Email Address…"
            />
            <input
              type="text"
              class="textFields"
              name="company"
              id="company"
              placeholder="Company..."
            />
            <input
              type="text"
              class="textFields"
              name="company"
              id="company"
              placeholder="Company..."
            />
            <textarea
              class="textFields"
              name="message"
              placeholder="Message..."
            ></textarea>
            <input class="submit" type="submit" value="Send Message" />
          </div>
        </div>
      </div>
`
export function changePageContent(pageID) {
  let pageName = pageID + "Content";
  $("#app").html(eval(pageName));
  if(pageID == "home") {
    $("#nav-holder").addClass("homeNav");
    $("#nav-holder #links").removeClass("links").addClass("homeLinks");
    $("#nav-holder #logo").removeClass("logo").addClass("homeLogo");
  }
  else {
    $("#nav-holder").removeClass("homeNav");
    $("#nav-holder #links").removeClass("homeLinks").addClass("links");
    $("#nav-holder #logo").removeClass("homeLogo").addClass("logo");
  }
}