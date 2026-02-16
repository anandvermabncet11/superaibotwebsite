import { BarChart3, Coins, PieChart, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import moment from 'moment';
import React, { useEffect, useState, useRef } from 'react';
import ReactApexChart from 'react-apexcharts';
import { TypeAnimation } from 'react-type-animation';
import Header from './components/Header';
import Footer from './components/Footer';
const Website = () => {
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

    const [state, setState] = React.useState({

        series: [{
            data: [{
                x: new Date(1538778600000),
                y: [6629.81, 6650.5, 6623.04, 6633.33]
            },
            {
                x: new Date(1538780400000),
                y: [6632.01, 6643.59, 6620, 6630.11]
            },
            {
                x: new Date(1538782200000),
                y: [6630.71, 6648.95, 6623.34, 6635.65]
            },
            {
                x: new Date(1538784000000),
                y: [6635.65, 6651, 6629.67, 6638.24]
            },
            {
                x: new Date(1538785800000),
                y: [6638.24, 6640, 6620, 6624.47]
            },
            {
                x: new Date(1538787600000),
                y: [6624.53, 6636.03, 6621.68, 6624.31]
            },
            {
                x: new Date(1538789400000),
                y: [6624.61, 6632.2, 6617, 6626.02]
            },
            {
                x: new Date(1538791200000),
                y: [6627, 6627.62, 6584.22, 6603.02]
            },
            {
                x: new Date(1538793000000),
                y: [6605, 6608.03, 6598.95, 6604.01]
            },
            {
                x: new Date(1538794800000),
                y: [6604.5, 6614.4, 6602.26, 6608.02]
            },
            {
                x: new Date(1538796600000),
                y: [6608.02, 6610.68, 6601.99, 6608.91]
            },
            {
                x: new Date(1538798400000),
                y: [6608.91, 6618.99, 6608.01, 6612]
            },
            {
                x: new Date(1538800200000),
                y: [6612, 6615.13, 6605.09, 6612]
            },
            {
                x: new Date(1538802000000),
                y: [6612, 6624.12, 6608.43, 6622.95]
            },
            {
                x: new Date(1538803800000),
                y: [6623.91, 6623.91, 6615, 6615.67]
            },
            {
                x: new Date(1538805600000),
                y: [6618.69, 6618.74, 6610, 6610.4]
            },
            {
                x: new Date(1538807400000),
                y: [6611, 6622.78, 6610.4, 6614.9]
            },
            {
                x: new Date(1538809200000),
                y: [6614.9, 6626.2, 6613.33, 6623.45]
            },
            {
                x: new Date(1538811000000),
                y: [6623.48, 6627, 6618.38, 6620.35]
            },
            {
                x: new Date(1538812800000),
                y: [6619.43, 6620.35, 6610.05, 6615.53]
            },
            {
                x: new Date(1538814600000),
                y: [6615.53, 6617.93, 6610, 6615.19]
            },
            {
                x: new Date(1538816400000),
                y: [6615.19, 6621.6, 6608.2, 6620]
            },
            {
                x: new Date(1538818200000),
                y: [6619.54, 6625.17, 6614.15, 6620]
            },
            {
                x: new Date(1538820000000),
                y: [6620.33, 6634.15, 6617.24, 6624.61]
            },
            {
                x: new Date(1538821800000),
                y: [6625.95, 6626, 6611.66, 6617.58]
            },
            {
                x: new Date(1538823600000),
                y: [6619, 6625.97, 6595.27, 6598.86]
            },
            {
                x: new Date(1538825400000),
                y: [6598.86, 6598.88, 6570, 6587.16]
            },
            {
                x: new Date(1538827200000),
                y: [6588.86, 6600, 6580, 6593.4]
            },
            {
                x: new Date(1538829000000),
                y: [6593.99, 6598.89, 6585, 6587.81]
            },
            {
                x: new Date(1538830800000),
                y: [6587.81, 6592.73, 6567.14, 6578]
            },
            {
                x: new Date(1538832600000),
                y: [6578.35, 6581.72, 6567.39, 6579]
            },
            {
                x: new Date(1538834400000),
                y: [6579.38, 6580.92, 6566.77, 6575.96]
            },
            {
                x: new Date(1538836200000),
                y: [6575.96, 6589, 6571.77, 6588.92]
            },
            {
                x: new Date(1538838000000),
                y: [6588.92, 6594, 6577.55, 6589.22]
            },
            {
                x: new Date(1538839800000),
                y: [6589.3, 6598.89, 6589.1, 6596.08]
            },
            {
                x: new Date(1538841600000),
                y: [6597.5, 6600, 6588.39, 6596.25]
            },
            {
                x: new Date(1538843400000),
                y: [6598.03, 6600, 6588.73, 6595.97]
            },
            {
                x: new Date(1538845200000),
                y: [6595.97, 6602.01, 6588.17, 6602]
            },
            {
                x: new Date(1538847000000),
                y: [6602, 6607, 6596.51, 6599.95]
            },
            {
                x: new Date(1538848800000),
                y: [6600.63, 6601.21, 6590.39, 6591.02]
            },
            {
                x: new Date(1538850600000),
                y: [6591.02, 6603.08, 6591, 6591]
            },
            {
                x: new Date(1538852400000),
                y: [6591, 6601.32, 6585, 6592]
            },
            {
                x: new Date(1538854200000),
                y: [6593.13, 6596.01, 6590, 6593.34]
            },
            {
                x: new Date(1538856000000),
                y: [6593.34, 6604.76, 6582.63, 6593.86]
            },
            {
                x: new Date(1538857800000),
                y: [6593.86, 6604.28, 6586.57, 6600.01]
            },
            {
                x: new Date(1538859600000),
                y: [6601.81, 6603.21, 6592.78, 6596.25]
            },
            {
                x: new Date(1538861400000),
                y: [6596.25, 6604.2, 6590, 6602.99]
            },
            {
                x: new Date(1538863200000),
                y: [6602.99, 6606, 6584.99, 6587.81]
            },
            {
                x: new Date(1538865000000),
                y: [6587.81, 6595, 6583.27, 6591.96]
            },
            {
                x: new Date(1538866800000),
                y: [6591.97, 6596.07, 6585, 6588.39]
            },
            {
                x: new Date(1538868600000),
                y: [6587.6, 6598.21, 6587.6, 6594.27]
            },
            {
                x: new Date(1538870400000),
                y: [6596.44, 6601, 6590, 6596.55]
            },
            {
                x: new Date(1538872200000),
                y: [6598.91, 6605, 6596.61, 6600.02]
            },
            {
                x: new Date(1538874000000),
                y: [6600.55, 6605, 6589.14, 6593.01]
            },
            {
                x: new Date(1538875800000),
                y: [6593.15, 6605, 6592, 6603.06]
            },
            {
                x: new Date(1538877600000),
                y: [6603.07, 6604.5, 6599.09, 6603.89]
            },
            {
                x: new Date(1538879400000),
                y: [6604.44, 6604.44, 6600, 6603.5]
            },
            {
                x: new Date(1538881200000),
                y: [6603.5, 6603.99, 6597.5, 6603.86]
            },
            {
                x: new Date(1538883000000),
                y: [6603.85, 6605, 6600, 6604.07]
            },
            {
                x: new Date(1538884800000),
                y: [6604.98, 6606, 6604.07, 6606]
            },
            ]
        }],
        options: {
            chart: {
                type: 'candlestick',
                height: 350,
                background: darkMode ? '#1f1f1f' : '#ffffff',
                foreColor: darkMode ? '#fc8dfe' : '#333'
            },

            theme: {
                mode: darkMode ? 'dark' : 'light'
            },

            title: {
                text: 'CandleStick Chart',
                align: 'left'
            },

            grid: {
                borderColor: darkMode ? '#9c38ef' : '#e0e0e0'
            },

            xaxis: {
                type: 'datetime',
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            },

            yaxis: {
                tooltip: { enabled: true },
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            },

            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#19f0f6',   // bullish
                        downward: '#fc8dfe' // bearish
                    }
                }
            }
        }
    });


    const [state2, setState2] = React.useState({

        series: [{
            name: 'candle',
            data: [
                {
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91]
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612]
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612]
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95]
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67]
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4]
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9]
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45]
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35]
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53]
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19]
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620]
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620]
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61]
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58]
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86]
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16]
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4]
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81]
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578]
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579]
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96]
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92]
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22]
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08]
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25]
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97]
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95]
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591]
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592]
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                },
            ]
        }],
        options: {
            chart: {
                height: 350,
                type: 'candlestick',
                background: darkMode ? '#1f1f1f' : '#ffffff',
                foreColor: darkMode ? '#fc8dfe' : '#333'
            },

            theme: {
                mode: darkMode ? 'dark' : 'light'
            },

            title: {
                text: 'CandleStick Chart - Category X-axis',
                align: 'left'
            },

            annotations: {
                xaxis: [{
                    x: 'Oct 06 14:00',
                    borderColor: '#9c38ef',
                    label: {
                        borderColor: '#9c38ef',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#9c38ef'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'Annotation Test'
                    }
                }]
            },

            tooltip: {
                enabled: true,
                theme: darkMode ? 'dark' : 'light'
            },

            grid: {
                borderColor: darkMode ? '#9c38ef' : '#e0e0e0'
            },

            plotOptions: {
                candlestick: {
                    colors: {
                        upward: '#19f0f6',   // bullish candle
                        downward: '#fc8dfe' // bearish candle
                    }
                }
            },

            xaxis: {
                type: 'category',
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    },
                    formatter: function (val) {
                        return moment(val).format('MMM DD HH:mm')
                    }
                }
            },

            yaxis: {
                tooltip: { enabled: true },
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            }
        }



    });
    const [state3, setState3] = React.useState({

        series: [{
            name: "sales",
            data: [{
                x: '2019/01/01',
                y: 400
            }, {
                x: '2019/04/01',
                y: 430
            }, {
                x: '2019/07/01',
                y: 448
            }, {
                x: '2019/10/01',
                y: 470
            }, {
                x: '2020/01/01',
                y: 540
            }, {
                x: '2020/04/01',
                y: 580
            }, {
                x: '2020/07/01',
                y: 690
            }, {
                x: '2020/10/01',
                y: 690
            }]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 380,
                background: darkMode ? '#1f1f1f' : '#ffffff',
                foreColor: darkMode ? '#fc8dfe' : '#333'
            },

            theme: {
                mode: darkMode ? 'dark' : 'light'
            },

            colors: ['#9c38ef', '#19f0f6', '#fc8dfe'],

            title: {
                text: 'Grouped Labels on the X-axis'
            },

            grid: {
                borderColor: darkMode ? '#9c38ef' : '#e0e0e0'
            },

            xaxis: {
                type: 'category',
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    },
                    formatter: function (val) {
                        return "Q" + moment(val).quarter()
                    }
                },
                group: {
                    style: {
                        fontSize: '10px',
                        fontWeight: 700,
                        colors: darkMode ? ['#fc8dfe'] : ['#333']
                    },
                    groups: [
                        { title: '2019', cols: 4 },
                        { title: '2020', cols: 4 }
                    ]
                }
            },

            yaxis: {
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            },

            tooltip: {
                theme: darkMode ? 'dark' : 'light',
                x: {
                    formatter: function (val) {
                        return "Q" + moment(val).quarter() + " " +
                            moment(val).format("YYYY")
                    }
                }
            }
        }




    });

    const [state4, setState4] = React.useState({

        series: [
            {
                type: 'boxPlot',
                data: [
                    {
                        x: 'Jan 2015',
                        y: [54, 66, 69, 75, 88]
                    },
                    {
                        x: 'Jan 2016',
                        y: [43, 65, 69, 76, 81]
                    },
                    {
                        x: 'Jan 2017',
                        y: [31, 39, 45, 51, 59]
                    },
                    {
                        x: 'Jan 2018',
                        y: [39, 46, 55, 65, 71]
                    },
                    {
                        x: 'Jan 2019',
                        y: [29, 31, 35, 39, 44]
                    },
                    {
                        x: 'Jan 2020',
                        y: [41, 49, 58, 61, 67]
                    },
                    {
                        x: 'Jan 2021',
                        y: [54, 59, 66, 71, 88]
                    }
                ]
            }
        ],
        options: {
            chart: {
                type: 'boxPlot',
                height: 350,
                background: darkMode ? '#1f1f1f' : '#ffffff',
                foreColor: darkMode ? '#fc8dfe' : '#333'
            },

            theme: {
                mode: darkMode ? 'dark' : 'light'
            },

            title: {
                text: 'Basic BoxPlot Chart',
                align: 'left'
            },

            grid: {
                borderColor: darkMode ? '#9c38ef' : '#e0e0e0'
            },

            plotOptions: {
                boxPlot: {
                    colors: {
                        upper: '#19f0f6',  // upper box
                        lower: '#fc8dfe'   // lower box
                    }
                }
            },

            xaxis: {
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            },

            yaxis: {
                labels: {
                    style: {
                        colors: darkMode ? '#19f0f6' : '#333'
                    }
                }
            },

            tooltip: {
                theme: darkMode ? 'dark' : 'light'
            }
        }



    });


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
                                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5" />
                                    START NOW
                                </button>
                                <button className={`px-8 py-3 rounded-lg font-semibold border-2 transition ${darkMode ? 'border-gray-700 hover:border-purple-500' : 'border-gray-300 hover:border-purple-500'}`}>
                                    ▶ EXPLORE MORE
                                </button>
                            </div>
                        </div>
                        <div id="chart" className='rounded-3xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm lg:p-4 p-1'>
                            <ReactApexChart key={darkMode ? "dark" : "light"} options={state.options} series={state.series} type="candlestick" width="100%" height={chartHeight} />
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
                                <ReactApexChart key={darkMode ? "dark" : "light"} options={state3.options} series={state3.series} type="bar" width="100%" height={chartHeight} />
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
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
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
                                    <ReactApexChart key={darkMode ? "dark" : "light"} options={state2.options} series={state2.series} type="candlestick" width="100%" height={chartHeight} />
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
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">Explore Markets</button>
                    </div>
                </div>
            </section>
            <section className="py-12 lg:px-6 px-2">
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
                                    <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">Trade {crypto}</button>
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
                                <ReactApexChart key={darkMode ? "dark" : "light"} options={state4.options} series={state4.series} type="boxPlot" width="100%" height={chartHeight} />
                            </div>
                        </div>
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">ALLOCATION</span>
                            <h2 className="text-4xl font-bold mt-4 mb-8">Crypto coin allocation summary</h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Crypto Coin Offer - 70,000,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Crypto Bonuses - 5,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '5%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Crypto Quarterly Supplies - 23,000,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '23%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Crypto Community Extras - 2,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '2%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-12">
                                <div>
                                    <div className="text-4xl font-bold text-purple-500">25%</div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Token Bonus</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-500">15%</div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Early Bonus</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-bold text-purple-500">1%</div>
                                    <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Referral Bonus</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 lg:px-6 px-2">
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
            <section className="py-20 lg:px-6 px-2 bg-gradient-to-r from-purple-600 to-pink-600">
                <div className="container mx-auto text-center">
                    <span className="text-white/80 text-sm uppercase tracking-wide">GET STARTED</span>
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
            <Footer darkMode={darkMode} />
        </div>
    );
};

export default Website;