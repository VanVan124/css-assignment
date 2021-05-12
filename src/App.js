// import logo from './logo.svg';
import './App.css';
import bg from './img/bg1.png';
import img from './img/img.png';

function App() {
    return (
        <div className="App">
            <div className="App-top">
                <header className="header">
                    <div className="header-left">
                        <div className="logo">
                            My Logo
                        </div>
                    </div>
                    <div className="header-right">

                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>

                        </div>
                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </div>
                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>
                        <div className="subscribe-box">
                            Subscribe for more
                        </div>
                    </div>
                </header>

                <div className="nav-bar">
                    <div className="nav-bar-left">
                        <div className="nav">
                            News
                        </div>
                        <div className="nav">
                            Sex
                        </div>
                        <div className="nav">
                            Special Features
                        </div>
                        <div className="nav">
                            Technology
                        </div>
                        <div className="nav">
                            Sport
                        </div>
                        <div className="nav">
                            Analysis
                        </div>
                    </div>

                    <div className="nav-bar-right">
                        <div className="weather">
                            <div className="weather-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M12 3c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092z"/>
                                </svg>

                            </div>
                            <div className="weather-right">
                                28&#176;, Sofia
                            </div>
                        </div>
                        <div className="search">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path
                                    d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="newsfeed">
                    <div className="top-feed">
                        <div className="top-feed-left">
                            <div className="top-feed-left-display">
                                <img src={bg} className="top-feed-left-bg" alt=""/>
                                <div className="top-feed-left-img">
                                    <img src={""}/>
                                    <div className="featured-tag">
                                        <div className="featured-tag-star">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>
                                            </svg>

                                        </div>
                                        <p> FEATURED</p>
                                    </div>
                                </div>

                            </div>
                            <div className="top-feed-left-content">
                                <div className="top-feed-left-header">
                                    Malaria vaccine to be tested on 4,800 children — UK scientist
                                </div>
                                <div className="top-feed-left-detail">
                                    Accusamus dolores quia dolorem quidem a suscipit molestias expedita et. Est cum
                                    molestiae.
                                    Eligendi dolores sint quia velit velit qui odio ab.
                                </div>
                            </div>
                            <div className="top-feed-left-button">
                                Read more
                            </div>
                        </div>
                        <div className="top-feed-right">
                            <div className="top-feed-right-header">
                                LATEST NEWS
                            </div>
                            <div className="top-feed-right-list">
                                <div className="top-feed-right-item">
                                    <div className="item-header">
                                        Doloremque ullam sed doloribus ut asperiores et sed in ut.
                                    </div>
                                    <div className="item-detail-small">
                                        Adebayo Folorunsho-Francis - Dec 7, 2020
                                    </div>
                                </div>
                                <div className="top-feed-right-item">
                                    <div className="item-header">
                                        Doloremque ullam sed doloribus ut asperiores et sed in ut.
                                    </div>
                                    <div className="item-detail-small">
                                        Adebayo Folorunsho-Francis - Dec 7, 2020
                                    </div>
                                </div>
                                <div className="top-feed-right-item">
                                    <div className="item-header">
                                        Doloremque ullam sed doloribus ut asperiores et sed in ut.
                                    </div>
                                    <div className="item-detail-small">
                                        Adebayo Folorunsho-Francis - Dec 7, 2020
                                    </div>
                                </div>
                                <div className="top-feed-right-item">
                                    <div className="item-header">
                                        Doloremque ullam sed doloribus ut asperiores et sed in ut.
                                    </div>
                                    <div className="item-detail-small">
                                        Adebayo Folorunsho-Francis - Dec 7, 2020
                                    </div>
                                </div>
                                <div className="top-feed-right-item">
                                    <div className="item-header">
                                        Doloremque ullam sed doloribus ut asperiores et sed in ut.
                                    </div>
                                    <div className="item-detail-small">
                                        Adebayo Folorunsho-Francis - Dec 7, 2020
                                    </div>
                                </div>


                            </div>
                            <div className="read-more-button">
                                See all latest news
                            </div>
                        </div>
                    </div>

                    <div className="breaking-news">

                        <a className="breaking-news-item">
                            <div className="breaking-news-item-wrapper">
                                <div className="item-header">
                                    WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa
                                </div>
                                <div className="item-detail-large">
                                    Yusuff Moshood - Dec 3, 2020
                                </div>
                            </div>
                        </a>
                        <a className="breaking-news-item">
                            <div className="breaking-news-item-wrapper">
                                <div className="item-header">
                                    WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa
                                </div>
                                <div className="item-detail-large">
                                    Yusuff Moshood - Dec 3, 2020
                                </div>
                            </div>
                        </a>
                        <a className="breaking-news-item">
                            <div className="breaking-news-item-wrapper">
                                <div className="item-header">
                                    WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa
                                </div>
                                <div className="item-detail-large">
                                    Yusuff Moshood - Dec 3, 2020
                                </div>
                            </div>
                        </a>
                        <a className="breaking-news-item">
                            <div className="breaking-news-item-wrapper">
                                <div className="item-header">
                                    WHO launches ‘infodemic alliance’ to fight COVID-19 misinformation in Africa
                                </div>
                                <div className="item-detail-large">
                                    Yusuff Moshood - Dec 3, 2020
                                </div>
                            </div>
                        </a>

                        <div className="news-img">
                            <img src={img} alt=""/>
                        </div>
                    </div>

                    <div className="section news">
                        <div className="section-header">
                            NEWS
                        </div>
                        <div className="wrapper">
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-large">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Adebayo Folorunsho-Francis - Dec 3, 2020
                                </div>
                                <div className="item-detail-large">
                                    Sit voluptatum suscipit sunt sed ut ratione alias. Dolorem culpa alias quos. Aliquid
                                    iusto laboriosam alias. Optio ullam molestiae et non repellendus sit iste.
                                </div>
                                <div className="read-more-button">
                                    Continue reading this article
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="sex section">
                        <div className="section-header">
                            SEX
                        </div>
                        <div className="wrapper">
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="technology section">
                        <div className="section-header">
                            TECHNOLOGY
                        </div>
                        <div className="wrapper">
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>

                            <div className="news-item-large">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Adebayo Folorunsho-Francis - Dec 3, 2020
                                </div>
                                <div className="item-detail-large">
                                    Sit voluptatum suscipit sunt sed ut ratione alias. Dolorem culpa alias quos. Aliquid
                                    iusto laboriosam alias. Optio ullam molestiae et non repellendus sit iste.
                                </div>
                                <div className="read-more-button">
                                    Continue reading this article
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="App-bot">
                <div className="newsfeed">
                    <div className="sport section">
                        <div className="section-header">
                            SPORT
                        </div>
                        <div className="wrapper">
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="special section">
                        <div className="section-header">
                            SPECIAL FEATURES
                        </div>
                        <div className="wrapper">
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                            <div className="news-item-small">
                                <div className="item-image">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="item-header">
                                    Et ipsam deleniti mollitia iure et incidunt assumenda expedita.
                                </div>
                                <div className="item-detail-small">
                                    Dec 2, 2020
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="footer-left">
                        <div className="logo">
                            <p>L</p>
                        </div>

                        <div className="footer-nav">
                            <div className="nav">
                                News
                            </div>
                            <div className="nav">
                                Sex
                            </div>
                            <div className="nav">
                                Special Features
                            </div>
                            <div className="nav">
                                Technology
                            </div>
                            <div className="nav">
                                Sport
                            </div>
                            <div className="nav">
                                Analysis
                            </div>
                        </div>
                    </div>
                    <div className="footer-right">
                        <div className="footnote">
                            Project &copy; 2020
                        </div>
                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                            </svg>

                        </div>
                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                            </svg>
                        </div>
                        <div className="sns-box">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
        ;
}

export default App;
