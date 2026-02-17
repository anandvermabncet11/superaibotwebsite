import { Coins, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import moment from 'moment';
import { useEffect, useRef, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useNavigate } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import Footer from './components/Footer';
import Header from './components/Header';
import { state2Fun, state3Fun, state4Fun, stateFun } from './rawdata';
const Website = () => {
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleTheme = () => setDarkMode(!darkMode);

    const features = [
        {
            icon: <Shield className="w-12 h-12" />,
            title: "Advanced Security",
            description: "Multi-layer security with cold storage and encrypted transactions to keep your assets safe."
        },
        {
            icon: <Zap className="w-12 h-12" />,
            title: "Fast & Reliable Trading",
            description: "Execute trades instantly with our high-performance matching engine and 99.9% uptime."
        },
        {
            icon: <Users className="w-12 h-12" />,
            title: "User-Friendly Interface",
            description: "Intuitive design for both beginners and professionals with advanced charting tools."
        }
    ];

    const services = [
        { name: "Crypto Trading", description: "Trade 200+ cryptocurrencies with low fees" },
        { name: "Spot Trading", description: "Buy and sell crypto instantly at market prices" },
        { name: "Margin Trading", description: "Leverage up to 10x on selected pairs" },
        { name: "Portfolio Management", description: "Track and manage your crypto portfolio" },
        { name: "Blockchain Excellence", description: "Built on secure blockchain infrastructure" },
        { name: "Crypto Staking Solution", description: "Earn passive income by staking your coins" },
        { name: "Crypto Trading Education", description: "Learn trading strategies from experts" },
        { name: "Account & Margin Trading", description: "Manage funds with margin capabilities" }
    ];

    const cryptoLogos = [
        "Bitcoin", "Ethereum", "BNB", "Tether", "Cardano", "XRP", "Dogecoin", "Polygon"
    ];

    const carouselRef = useRef(null);
    const popularCoinsRef = useRef(null);
    const cryptocoinAllocationRef = useRef(null);
    const askanything = useRef(null);
    const faq = useRef(null);

    const getTicker = (name) => {
        switch (name) {
            case 'Bitcoin': return 'BTC';
            case 'Ethereum': return 'ETH';
            case 'BNB': return 'BNB';
            case 'Tether': return 'USDT';
            case 'Cardano': return 'ADA';
            case 'XRP': return 'XRP';
            case 'Dogecoin': return 'DOGE';
            case 'Polygon': return 'MATIC';
            default: return name;
        }
    };

    const getDescription = (name) => {
        const map = {
            Bitcoin: 'The original cryptocurrency used as digital gold and store of value.',
            Ethereum: 'Smart-contract platform powering DeFi and NFTs.',
            BNB: 'Blockchain native token used for fees and governance on Binance Chain.',
            Tether: 'Stablecoin pegged to USD, commonly used for trading pairs.',
            Cardano: 'Research-driven blockchain focusing on scalability and sustainability.',
            XRP: 'Fast settlement token optimized for cross-border payments.',
            Dogecoin: 'Community-driven memecoin with wide retail recognition.',
            Polygon: 'Layer-2 scaling solution for Ethereum with low fees.'
        };
        return map[name] || 'Popular cryptocurrency.';
    };

    useEffect(() => {
        if (document.getElementById('hide-scrollbar-style')) return;
        const style = document.createElement('style');
        style.id = 'hide-scrollbar-style';
        style.innerHTML = `
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            .hide-scrollbar::-webkit-scrollbar { display: none; }
        `;
        document.head.appendChild(style);
    }, []);

    const faqs = [
        {
            question: "What is cryptocurrency trading?",
            answer: "Cryptocurrency trading involves buying and selling digital currencies on exchanges to profit from price movements."
        },
        {
            question: "Is crypto trading safe on your platform?",
            answer: "Yes, we use bank-level security, cold storage, and 2FA authentication to protect your assets."
        },
        {
            question: "How do I start trading cryptocurrencies?",
            answer: "Simply create an account, verify your identity, deposit funds, and start trading instantly."
        },
        {
            question: "What crypto services can I find?",
            answer: "We offer spot trading, margin trading, staking, portfolio management, and educational resources."
        }
    ];

    useEffect(() => {
        const containerId = 'tradingview_xauusd_hero';

        const renderWidget = () => {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            if (window.TradingView && window.TradingView.widget) {
                new window.TradingView.widget({
                    container_id: containerId,
                    width: '100%',
                    height: '100%',
                    symbol: 'OANDA:XAUUSD',
                    interval: '60',
                    timezone: 'Etc/UTC',
                    theme: darkMode ? 'dark' : 'light',
                    style: '1',
                    locale: 'en',
                    toolbar_bg: darkMode ? '#0f172a' : '#ffffff',
                    enable_publishing: false,
                    allow_symbol_change: true,
                });
            }
        };

        if (!window.TradingView) {
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/tv.js';
            script.async = true;
            script.onload = renderWidget;
            document.head.appendChild(script);
        } else {
            renderWidget();
        }

        return () => {
            const container = document.getElementById(containerId);
            if (container) container.innerHTML = '';
        };
    }, [darkMode]);

    const getChartHeight = () => {
        if (typeof window === 'undefined') return 350;
        const w = window.innerWidth;
        if (w < 420) return 220;
        if (w < 640) return 260;
        if (w < 1024) return 320;
        return 350;
    };

    const [chartHeight, setChartHeight] = useState(getChartHeight());

    useEffect(() => {
        const onResize = () => setChartHeight(getChartHeight());
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header Component */}
            <Header darkMode={darkMode} setDarkMode={setDarkMode} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

            {/* Hero Section */}
            <section className={`pt-32 pb-20 lg:px-6 px-2 ${darkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full mb-4">
                                <span className="text-purple-500 text-sm">Welcome to Trade4you</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">

                                <TypeAnimation
                                    sequence={[
                                        'Smart Crypto Trading',
                                        2000,
                                        '',
                                        500,
                                        'Smart Forex Trading',
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />
                            </h1>
                            <p className="text-xl mb-4">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                                    Powered by Secure
                                </span>
                            </p>
                            <p className="text-xl mb-8">
                                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold">
                                    Blockchain Technology
                                </span>
                            </p>
                            <p className={`mb-8 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in-up`}>
                                Trade with confidence on our advanced platform. Access 200+ cryptocurrencies with industry-leading security and lightning-fast execution.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button
                                    onClick={() => navigate("/login")}
                                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    START NOW
                                </button>
                                <button
                                    onClick={() => popularCoinsRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                    className={`px-8 py-3 rounded-lg font-semibold border-2 transition ${darkMode ? 'border-gray-700 hover:border-purple-500' : 'border-gray-300 hover:border-purple-500'}`}>
                                    ▶ EXPLORE MORE
                                </button>
                            </div>
                        </div>
                        <div id="chart" className='rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm lg:p-4 p-1'>
                            <ReactApexChart key={darkMode ? "dark" : "light"} options={stateFun(darkMode).options} series={stateFun(darkMode).series} type="candlestick" width="100%" height={chartHeight} />
                        </div>
                    </div>
                </div>
            </section>
            <div className="relative lg:h-[50rem] h-[20rem] lg:p-10 p-1 rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm">
                <div className="w-full  bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                    <div id="tradingview_xauusd_hero" className="w-full h-full" />
                </div>
            </div>
            {/* About Section */}
            <section id="about" className="py-20 lg:px-6 px-2">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            {/* <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                                <TrendingUp className="w-32 h-32 text-purple-500 mx-auto" />
                                <div className="mt-4 text-center">
                                    <Coins className="w-24 h-24 text-pink-500 mx-auto" />
                                </div>
                            </div> */}
                            <div id="chart" className='rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm lg:p-4 p-1'>
                                <ReactApexChart key={darkMode ? "dark" : "light"} options={state3Fun(darkMode, moment).options} series={state3Fun(darkMode, moment).series} type="bar" width="100%" height={chartHeight} />
                            </div>
                        </div>
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">ABOUT US</span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">About Us – Crypto Trading Platform</h2>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                We are a next-generation cryptocurrency trading platform built on secure blockchain technology. Our mission is to make crypto trading accessible, secure, and profitable for everyone.
                            </p>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                With advanced security measures, lightning-fast execution, and an intuitive interface, we empower traders to navigate the crypto market with confidence. Join thousands of satisfied traders who trust Trade4you.
                            </p>
                            <button
                                onClick={() => cryptocoinAllocationRef.current?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Crypto Solutions */}
            {/* <section className={`py-20 px-6 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}>
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16">Most powerful & optimistic solutions for Crypto</h2>
                </div>
            </section> */}

            {/* Features */}
            <section className="py-20 lg:px-6 px-2">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-purple-500 text-sm uppercase tracking-wide">WHY CHOOSE US</span>
                        <h2 className="text-4xl font-bold mt-4">Why Choose Our Crypto Trading Platform?</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`p-8 rounded-2xl transition-all hover:scale-105 ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30 hover:from-purple-900/50 hover:to-pink-900/50' : 'bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100'
                                    }`}
                            >
                                <div className="text-purple-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section id="solutions" className={`py-20 lg:px-6 px-2 ${darkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">OUR SERVICES</span>
                            <h2 className="text-4xl font-bold mt-4 mb-12">Our Services Trade4you</h2>
                            <div className="relative">
                                <div id="chart" className='rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm lg:p-4 p-1'>
                                    <ReactApexChart key={darkMode ? "dark" : "light"} options={state2Fun(darkMode, moment).options} series={state2Fun(darkMode, moment).series} type="candlestick" width="100%" height={chartHeight} />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition cursor-pointer border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                                >
                                    <h4 className="font-semibold text-purple-500">{service.name}</h4>
                                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Crypto Logos */}
            {/* Forex & Crypto Trading */}
            <section className={`py-16 lg:px-6 px-2 ${darkMode ? 'bg-gradient-to-b from-gray-900/20 to-black/20' : 'bg-white'}`}>
                <div className="container mx-auto">
                    <div className="text-center mb-8">
                        <span className="text-purple-500 text-sm uppercase tracking-wide">MARKETS</span>
                        <h2 className="text-3xl font-bold mt-2">Forex & Crypto Trading</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        <div>
                            <h3 className="text-xl font-semibold text-purple-500 mb-3">Forex Trading</h3>
                            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <TypeAnimation
                                    sequence={[
                                        'Forex trading lets you trade global currency pairs such as EUR/USD, GBP/USD and USD/JPY with tight spreads and deep liquidity. Our platform provides real-time quotes, advanced order types, and risk-management tools designed for both intraday and long-term traders.',
                                        2000,
                                        '',
                                        500,
                                        'Experience seamless forex trading with our secure platform. Access',
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />

                            </p>
                            <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <li>24-hour market access across global sessions</li>
                                <li>Competitive spreads and high liquidity</li>
                                <li>Flexible leverage and stop-loss/take-profit orders</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-purple-500 mb-3">Crypto Trading</h3>
                            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <TypeAnimation
                                    sequence={[
                                        'Trade 200+ cryptocurrencies with spot, margin and staking options. We combine secure custody (cold storage), robust APIs for automated strategies, and educational tools to help you navigate volatile markets.',
                                        2000,
                                        '',
                                        500,
                                        'Experience seamless crypto trading with our secure platform. Access',
                                        2000,
                                    ]}
                                    repeat={Infinity}
                                />

                            </p>
                            <ul className={`list-disc pl-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <li>Wide selection of coins and tokens</li>
                                <li>Secure cold storage and 2FA protection</li>
                                <li>Staking and yield-generation opportunities</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button onClick={() => popularCoinsRef.current?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">Explore Markets</button>
                    </div>
                </div>
            </section>
            <section ref={popularCoinsRef} className="py-12 lg:px-6 px-2">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">CRYPTOS</span>
                            <h3 className="text-2xl font-bold mt-1">Popular Coins</h3>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (!el) return;
                                    el.scrollBy({ left: -el.clientWidth * 0.6, behavior: 'smooth' });
                                }}
                                className="px-3 py-2 rounded-lg bg-gray-200/60 hover:bg-gray-200 text-sm"
                            >Prev</button>
                            <button
                                onClick={() => {
                                    const el = carouselRef.current;
                                    if (!el) return;
                                    el.scrollBy({ left: el.clientWidth * 0.6, behavior: 'smooth' });
                                }}
                                className="px-3 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
                            >Next</button>
                        </div>
                    </div>

                    <div ref={carouselRef} className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory py-2">
                        {cryptoLogos.map((crypto, index) => (
                            <div key={index} className={`flex-shrink-0 w-72 snap-center p-4 rounded-2xl border ${darkMode ? 'bg-gray-800/60 border-gray-700' : 'bg-white border-gray-200'}`}>
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-10 h-10 rounded-md flex items-center justify-center ${darkMode ? 'bg-purple-900/30' : 'bg-purple-50'}`}>
                                            <Coins className="w-6 h-6 text-purple-500" />
                                        </div>
                                        <div>
                                            <div className="font-semibold">{crypto}</div>
                                            <div className="text-xs text-gray-400">{getTicker(crypto)}</div>
                                        </div>
                                    </div>
                                    <div className="text-sm text-gray-400">LIVE</div>
                                </div>

                                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    {/* {getDescription(crypto) */}
                                    <TypeAnimation
                                        sequence={[
                                            getDescription(crypto),
                                            2000,
                                            '',
                                            500,
                                            getDescription(crypto),
                                            2000,
                                        ]}
                                        repeat={Infinity}
                                    />
                                    {/* } */}
                                </p>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-xs text-gray-400">Price</div>
                                        <div className="font-semibold">—</div>
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Market Cap</div>
                                        <div className="font-semibold">—</div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                                        onClick={() => askanything.current?.scrollIntoView({ behavior: 'smooth' })}
                                    >Trade {crypto}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Token Allocation */}
            <section className={`py-20 lg:px-6 px-2 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div id="chart" className='rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm lg:p-4 p-1'>
                                <ReactApexChart key={darkMode ? "dark" : "light"} options={state4Fun(darkMode, moment).options} series={state4Fun(darkMode, moment).series} type="boxPlot" width="100%" height={chartHeight} />
                            </div>
                        </div>
                        <div ref={cryptocoinAllocationRef}>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">FOREX MARKETING & OPPORTUNITY</span>
                            <h2 className="text-4xl font-bold mt-4 mb-8">Forex Trading Opportunity</h2>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                Being the largest financial market with a daily turnover of around $7.5 trillion, the forex market is attracting traders from all across the globe.
                            </p>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                With many more favourable conditions for traders, Forex Trading in India is getting more prominence than ever before. When done with the right strategies, any determined trader could earn unmatchable profits at the end of the day.
                            </p>
                            <p className={`mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                                A successful forex trader would purchase one currency and sell them at the right time with the help of mediators called forex brokers. If you are new to the forex market and trading, it is important to be guided by the right people.
                            </p>
                            <button
                                onClick={() => askanything.current?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                                START FOREX TRADING
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:px-6 px-2"
                ref={faq}
            >
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-purple-500 text-sm uppercase tracking-wide">NEED HELP?</span>
                        <h2 className="text-4xl font-bold mt-4">Frequently Asked Questions – Crypto Trading</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                            >
                                <summary className="font-semibold cursor-pointer flex items-center gap-3">
                                    <span className="text-purple-500 text-xl">Q</span>
                                    {faq.question}
                                </summary>
                                <p className={`mt-4 pl-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:px-6 px-2 bg-gradient-to-r from-purple-600 to-pink-600" >
                <div className="container mx-auto text-center">
                    <span className="text-white/80 text-sm uppercase tracking-wide"
                        ref={askanything}
                    >GET STARTED</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
                        Ask anything from anywhere!
                    </h2>
                    <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                        Have questions? Our support team is available 24/7 to help you with your crypto trading journey.
                    </p>
                    <button className="px-8 py-3 bg-white text-purple-600 rounded-lg font-semibold hover:shadow-lg transition">
                        ↓ DOWNLOAD
                    </button>
                </div>
            </section>

            {/* Footer Component */}
            <Footer darkMode={darkMode} faq={faq} />
        </div>
    );
};

export default Website;