'use client';
import Navbar from '../components/Navbar';
import BookingCard from '../components/BookingCard';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1>
              INDIA'S <span className={styles.highlight}>LEADING</span><br />
              <span className={styles.highlight}>ONE WAY INTERCITY</span><br />
              CAB SERVICE PROVIDER
            </h1>
          </div>
          <div className={styles.formWrapper}>
            <BookingCard />
          </div>
        </div>
      </section>

      {/* Floating Info Section */}
      <section className={styles.floatingInfoSection}>
        <div className={styles.floatingInfoContainer}>
          <div className={styles.infoBox}>
            <h2>Transparent Billing</h2>
            <p>GPS Based Billing | No Km Tampering</p>
          </div>
          <div className={styles.infoBoxCenter}>
            <h2>Download Now!</h2>
            <div className={styles.storeLogos}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className={styles.storeStoreBadge}/>
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className={styles.storeStoreBadge}/>
            </div>
          </div>
          <div className={styles.infoBox}>
            <h2>No return fare</h2>
            <p>Oneway Cab Fare | No Hidden Charges</p>
          </div>
        </div>
      </section>

      {/* Features Row */}
      <section className={styles.featuresRow}>
        <div className={styles.featuresContainer}>
          <div className={styles.featureCard}>
            <div className={styles.featureIconPlaceholder}>M</div>
            <h3 className={styles.featureTitle}>RETURN FARE, NOT FAIR!</h3>
            <p className={styles.featureDesc}>Why Pay For Return Journey When You Are Travelling Oneway? Now Get Discounted AC Taxi At Just Half Of The Round Trip Cost For Your One Way Travel.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconPlaceholder}>📍</div>
            <h3 className={styles.featureTitle}>GPS BASED BILLING SYSTEM</h3>
            <p className={styles.featureDesc}>Since The GPS Data Captures The Actual Distance And Time Travelled, It Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureIconPlaceholder}>🚗</div>
            <h3 className={styles.featureTitle}>NOW AVAILABLE ROUTES ARE!</h3>
            <p className={styles.featureDesc}>Lucknow | Gorakhpur | Varanasi<br/>| Ayodhya | Allahabad | Bareilly</p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introContainer}>
          <h2>INDIA'S PREMIER INTERCITY AND LOCAL TAXI SERVICES</h2>
          <p>
            At Yatri Cabs, We Pride Ourselves On Being A Top-Tier Online Oneway Cab Booking Service, Delivering Reliable And Premium Intercity And Local Taxi Services. With Over A Decade Of Experience, Instead Of Self-Drive Car Rental, We Have Become The Leading Driver-Driven One Way Car Rental Company In India, Renowned For Our Extensive Coverage Across The Country
          </p>
        </div>
      </section>

      {/* Why Yatri Section */}
      <section className={styles.whyYatriSection}>
        <div className={styles.whyYatriTitleBox}>
          <h2 className={styles.whyYatriTitle}>WHY <span className={styles.yatriGreen}>YATRI</span> ?</h2>
        </div>
        <div className={styles.whyYatriContent}>
          <div className={styles.whyYatriLeft}>
            <img src="https://imgs.search.brave.com/KeJTqgSZkaw_9X0QFO0O-IHOwY4pIXKEQat46ijLiKY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9tYWRy/aWQtc3BhaW4tYmxh/Y2stdWJlci1jYXIt/YWR2ZXJ0aXNlbWVu/dC10cmFmZmljLXBs/YXphLWRlLWxhLWlu/ZGVwZW5kZW5jaWEt/Mzc3MDIyNjIyLmpw/Zw" alt="Yatri Cab" className={styles.carImg} />
          </div>
          <div className={styles.whyYatriRight}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>⚡</div>
              <div className={styles.whyText}>
                <h4>FAST RESPONSE TIME</h4>
                <p>Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Times And Seamless Car Hire Service, Ensuring You Get On The Road Quickly</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>👥</div>
              <div className={styles.whyText}>
                <h4>VAST FLEET</h4>
                <p>We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Car Hire Needs.</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📱</div>
              <div className={styles.whyText}>
                <h4>EASY TO ORDER</h4>
                <p>Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team.</p>
              </div>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💲</div>
              <div className={styles.whyText}>
                <h4>GREAT TARIFFS</h4>
                <p>Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table Section */}
      <section className={styles.tableSection}>
        <div className={styles.tableContainer}>
          <table className={styles.fareTable}>
            <thead>
              <tr>
                <th>CAR TYPE</th>
                <th>MODEL INCLUDES</th>
                <th>PASSENGERS</th>
                <th>IDEAL FOR</th>
                <th>FARE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AC Sedans</td>
                <td>Etios, Amaze, Dzire etc.</td>
                <td>4 Pax</td>
                <td>Comfortable trips with small families</td>
                <td>Rs.11/KM</td>
              </tr>
              <tr>
                <td>AC Hatchbacks</td>
                <td>Wagon R, Celerio, Micra etc.</td>
                <td>4 Pax</td>
                <td>Budget trips over short distances</td>
                <td>Rs.11/KM</td>
              </tr>
              <tr>
                <td>AC SUV</td>
                <td>Ertiga, Xylo etc.</td>
                <td>6-7 Pax</td>
                <td>Premium trips with large families</td>
                <td>Rs.13/KM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Bus/Train Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          <div className={styles.whyChooseText}>
            <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span className={styles.yatriGreen}>ONE-WAY JOURNEY</span>?</h2>
            <p>Our Oneway Car Rental Service Is Cheaper Than AC Bus And 2-Tier AC Train Ticket Fares. It Reduces Your Travel Time, And You Travel In Your Own Private Space, Allowing You To Fully Enjoy Your Journey. Our One Way Taxi Will Come To Your Doorstep And Take You To Your Desired Destination. So, Book Your Cheapest One Way Cab From Lucknow To Gorakhpur Or Varanasi To Ayodhya With Our Reliable Oneway Car Rental Service With Driver. Experience The Convenience Of Our Taxi Service, Where You Can Rent A Car Effortlessly And Enjoy Seamless Cab Booking. Choose Our Car Hire Option For A Hassle-Free And Comfortable Travel Experience. We Offer Outstation Cab And Intercity Travel Services, Ensuring A Smooth And Enjoyable Luxury Ride Wherever You Need To Go.</p>
          </div>
          <div className={styles.whyChooseImage}>
            <img src="https://placehold.co/500x400?text=Phone+Taxi+Illustration" alt="App Booking" className={styles.illustrationImg} />
          </div>
        </div>
      </section>

      {/* Bottom Banner Section */}
      <section className={styles.bottomBannerSection}>
        <div className={styles.bottomBannerContainer}>
          <div className={styles.greenBannerTitle}>
            <h2>CAR RENTAL IN INDIA - BOOK RELIABLE VEHICLES FOR ALL YOUR NEEDS</h2>
          </div>
          <div className={styles.bannerContentBox}>
            <p className={styles.bannerIntro}>Choosing a chauffeur-driven car rental over a self-drive Car Hire option in India offers several benefits with Yatri Car Rental:</p>
            <ul className={styles.benefitsList}>
              <li><strong>1. Skilled Chauffeurs:</strong> Our experienced and courteous drivers ensure a safe, comfortable, and stress-free ride. Whether you need a taxi service, outstation car rental, or oneway cab, they are adept at navigating India's roads for a seamless travel experience.</li>
              <li><strong>2. Dedicated Oneway Cab Service:</strong> We offer specialized oneway car rental services across India, allowing you to pay only for the distance you travel. This makes intercity trips with Yatri Car Rental both cost-effective and convenient.</li>
              <li><strong>3. Well-Maintained Car Rental Fleet:</strong> Our fleet of rental cars in India is kept in top condition, ensuring you enjoy a comfortable and secure ride, whether you opt for a car hire, taxi service, or outstation car rental.</li>
              <li><strong>4. Transparent Pricing for Car Hire:</strong> Our GPS-based billing system ensures fair pricing by eliminating any chances of Kilometer tampering by the driver. With real-time distance measurement and live location tracking, you get transparency and peace of mind when using our car rental services.</li>
              <li><strong>5. 24/7 Customer Support for Car Rentals:</strong> Our customer care team is available round the clock to assist with any inquiries or concerns regarding your car hire, taxi service, or outstation car rental, ensuring a smooth and enjoyable experience throughout your journey in India.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose One Way Cab */}
      <section className={styles.whyOneWaySection}>
        <h2 className={styles.whyOneWayTitle}>WHY CHOOSE <span className={styles.yatriGreen}>ONE WAY CAB</span>?</h2>
        <div className={styles.whyOneWayContent}>
          <div className={styles.whyOneWayList}>
            <ul>
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare For One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>Transparent Billing With GPS Based Billing System</li>
            </ul>
          </div>
          <div className={styles.whyOneWayImage}>
            <img src="https://placehold.co/400x300?text=Red+Car" alt="Red Car on Road" />
          </div>
          <div className={styles.whyOneWayList}>
            <ul>
              <li>Pick-Up From Your House</li>
              <li>Dedicated Cab Just For You</li>
              <li>Drop To Your Desired Destination</li>
              <li>Completed More Than 20,000+ Oneway Trips</li>
              <li>Multiple Payment Option Including Credit Card.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Discover Affordable Travel */}
      <section className={styles.discoverSection}>
        <div className={styles.discoverText}>
          DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <strong className={styles.yatriGreen}>INTERCITY CAR RENTAL</strong> IN INDIA &ndash; WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN EVERY CITY. UNLEASH YOUR JOURNEY!
        </div>
      </section>

      {/* Exploring India Section */}
      <section className={styles.exploringSection}>
        <div className={styles.greenBannerTitleDark}>
          <h2>EXPLORING INDIA'S AMAZING LANDSCAPES, FROM THE MOUNTAINS TO THE BEACHES, ONE MEMORABLE ROAD TRIP AT A TIME</h2>
        </div>
        <div className={styles.bannerContentBoxLight}>
          <ul className={styles.exploringList}>
            <li>Experience The Thrill Of Road Travel With Our Reliable Car Rental And Taxi Service As We Explore The Diverse Landscapes Of India Together. We're Passionate About Making Car Hire Accessible And Enjoyable For Everyone.</li>
            <li>Instead Of Worrying About The Road, Relax In Our Chauffeur-Driven Cabs On Your Next Vacation. With A Presence In Over 2000 Cities Across India, We're Here To Take You Wherever Your Heart Desires With Our Luxury Car Rental Services.</li>
            <li>We Cherish The Freedom To Stop, Breathe In The Fresh Air, Immerse In Local Cultures, And Savor Regional Cuisines Along The Way. These Moments Of Discovery Enrich Your Travels And Create Lasting Memories Through Our Rent A Car Service.</li>
            <li>No Destination Is Too Far Or Too Close; We Encourage You To Explore The Beauty Around You With Our Car Hire Options. Pack Your Bags, Set Out On Weekend Adventures, And Uncover The Gems In Your Vicinity With Our Taxi Service.</li>
            <li>Planning Your Trip Is A Breeze With Our User-Friendly Website, Or You Can Chat With Our Travel Experts At <strong>7860663399</strong> For Personalized Guidance On Car Rental. Our Cab Booking App Simplifies The Process, Ensuring A Hassle-Free Experience When You Rent A Car.</li>
            <li>Our Experienced Drivers Are Your Companions On The Road, Guiding You Through India's Best Experiences With Our Car Rental And Taxi Service. From Booking To Your Safe Return Home, We're Dedicated To Ensuring You Have An Exceptional Road Trip.</li>
          </ul>
        </div>
      </section>

      {/* Three Features Section */}
      <section className={styles.threeFeaturesSection}>
        <div className={styles.threeFeaturesContainer}>
          <div className={styles.threeFeatureCard}>
            <div className={styles.featureIconGraphic}>💸🚗</div>
            <h3>For Any Budget</h3>
            <p>Choose From Hatchbacks, Sedans, Mini SUVs, Prime SUVs, And Mini Buses Like Tempo Travellers 12-Seater To 25-Seater To Find A Ride Within Your Budget And At Your Convenience With Our Car Rental And Cab Service Options.</p>
          </div>
          <div className={styles.threeFeatureCard}>
            <div className={styles.featureIconGraphic}>📍🚗</div>
            <h3>For Any Distance</h3>
            <p>Book Daily Rides With Multiple Stops Within The City Or Travel To Your Favourite Destinations Across The Country With Our Oneway Or Round Trip Outstation Cab Service. Enjoy Seamless Cab Booking For All Your Travel Needs.</p>
          </div>
          <div className={styles.threeFeatureCard}>
            <div className={styles.featureIconGraphic}>📅🚗</div>
            <h3>For Any Duration</h3>
            <p>Plan A Day Out With Our Hourly-Based Packages For Local City Tours Or Book Our Car Rental Services With A Driver For Long Or Multiple-Day Trips. Our Taxi Service Ensures Reliable Transportation Tailored To Your Car Hire Needs.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Yatri Section */}
      <section className={styles.whyChooseYatriFull}>
        <div className={styles.greenBannerTitleDark}>
          <h2>WHY CHOOSE YATRI CAR RENTAL?</h2>
        </div>
        <div className={styles.whyChooseYatriContent}>
          <ul className={styles.whyChooseYatriList}>
            <li><strong>Yatri Car Rental</strong> Has Been A Trusted Digital Platform For Booking Local And Outstation Car Rental And Taxi Services Since 2014. Our Primary Goal Is To Offer Our Clients An Exceptional Car Rental And Cab Booking Experience, And We Take Great Pride In Our Commitment To Safety, Reliability, And Experienced Drivers. These Qualities Are Evident Across All Our Car Rental Services, Making Us The Preferred Choice For Those Seeking Rental Cars And Taxi Services In INDIA.</li>
            <li><strong>Service You Can Trust</strong> - At Yatri Car Rental, We Are Dedicated To Providing Dependable Services In INDIA. We Guarantee That We Won't Cancel Any Bookings Without Advance Notification, And Our Rental Cars Are Meticulously Maintained To Ensure A Seamless And Stress-Free Journey For Our Clients.</li>
            <li><strong>Safety Is Our Priority</strong> - Safety And Comfort Are Paramount At Yatri Car Rental In INDIA. We Exclusively Hire Experienced And Skilled Drivers Who Possess In-Depth Knowledge Of The City's Roads And Traffic Regulations. Our Drivers Are Committed To Delivering Excellent Customer Service And Ensuring A Comfortable And Stress-Free Travel Experience For Passengers.</li>
            <li><strong>Expert Chauffeurs At Your Service</strong> - Yatri Car Rental Takes Pride In Selecting Only The Most Skilled, Knowledgeable, And Courteous Drivers To Enhance The Convenience And Satisfaction Of Our Clients.</li>
            <li><strong>Extensive Industry Experience</strong> - With Over 10 Years Of Industry Expertise, Yatri Car Rental Is Your Go-To Choice For Premium Car Hire Services.</li>
            <li><strong>Proven Track Record</strong> - We Place A Strong Emphasis On Transparency In Our Billing System And Consistently Strive To Provide A Seamless And Satisfactory Experience For Our Customers. Our Commitment To Customer Comfort And Satisfaction Is Evident In Our Outstanding Google Ratings, Where We Consistently Receive Ratings Of 4.8 Stars Or Higher.</li>
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <h2 className={styles.testimonialsTitle}>Customer Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {[
            { name: "Vikram Kulkarni", loc: "Kalyan, Maharashtra", text: "I used Yatri Cabs for my one-way trip from Lucknow to Varanasi, and I was genuinely surprised by how much I saved! The 50% off claim is real, and it was significantly cheaper than taking a train. The car was clean, and the driver was professional. Highly recommend!" },
            { name: "Rajesh Kumawat", loc: "Kanpur, Uttar Pradesh", text: "The GPS-based billing system is a game-changer. I always worried about drivers tampering with meters on long intercity rides, but with Yatri Cabs, everything was transparent and real-time. It gave me complete peace of mind. Excellent service for my trip to Ayodhya!" },
            { name: "Anjali Mishra", loc: "Gorakhpur, Uttar Pradesh", text: "Traveling with my family from Gorakhpur to Prayagraj was so comfortable with Yatri Car Rental. We chose an SUV, and it was spacious and well-maintained. The driver was courteous and knowledgeable about the route. It made our pilgrimage hassle-free and enjoyable." },
            { name: "Siddharth Vaidya", loc: "Rohini, Delhi", text: "As a frequent business traveler, finding a reliable one-way cab service that doesn't charge for a return journey is crucial. Yatri Cabs delivers exactly that. Their 24/7 support and easy booking process through the app make my life so much simpler. They're my go-to for intercity travel now." }
          ].map((r, i) => (
            <div key={i} className={styles.testimonialCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.testimonialText}>{r.text}</p>
              <div className={styles.testimonialAuthor}>
                <strong>{r.name}</strong><br/>
                <span>{r.loc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App Download & Driver Partner */}
      <section className={styles.footerCTASection}>
        <div className={styles.ctaLeft}>
          <div className={styles.ctaPhones}>
            <img src="https://placehold.co/150x300?text=App" alt="Phone App" className={styles.phoneImg} />
            <img src="https://placehold.co/150x300?text=App2" alt="Phone App 2" className={styles.phoneImg2} />
          </div>
          <div className={styles.ctaAppText}>
            <h2>GET YOUR<br/><span className={styles.yatriGreen}>YATRI CABS</span><br/>APP NOW!</h2>
            <p className={styles.ctaCode}>USE CODE <strong>WELCOMEYATRI</strong> AND GET <strong>FLAT 05% OFF*</strong> ON YOUR FIRST INTERCITY RIDE</p>
            <div className={styles.ctaDownloadBox}>
              <p>Download Now!</p>
              <div className={styles.storeLogos}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className={styles.storeStoreBadge}/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className={styles.storeStoreBadge}/>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.ctaRight}>
          <h2>BECOME A <span className={styles.yatriGreen}>DRIVER</span> PARTNER</h2>
          <p>Join <strong className={styles.yatriGreen}>Yatri Car Rental</strong> And Attach Your Car To Our Platform. Earn More By Serving Our Passengers And Benefit From Our Extensive Customer Base.</p>
          <button className={styles.downloadAppBtn}>DOWNLOAD THE APP</button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}