import { BarChart3, Coins, Menu, Moon, PieChart, Shield, Sun, TrendingUp, Users, X, Zap } from 'lucide-react';
import { useState } from 'react';

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

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
            {/* Header */}
            <header className={`fixed w-full top-0 z-50 backdrop-blur-md ${darkMode ? 'bg-black/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-200'}`}>
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-purple-600 to-pink-600' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">SuperAI Bot</span>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#home" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>HOME</a>
                            <a href="#about" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ABOUT US</a>
                            <a href="#solutions" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>OUR SOLUTIONS</a>
                            <a href="#roadmap" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>ROADMAP</a>
                            <a href="#blog" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>BLOG</a>
                            <a href="#contact" className="text-purple-500">CONTACT</a>
                            <a href="#more" className={`hover:text-purple-500 transition ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>MORE</a>
                        </div>

                        {/* Right Side - Theme Toggle & CTA */}
                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle */}
                            <button
                                onClick={toggleTheme}
                                className={`p-2 rounded-lg transition-colors ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
                                aria-label="Toggle theme"
                            >
                                {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-gray-700" />}
                            </button>

                            {/* Sign In Button */}
                            <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                                SIGN IN
                            </button>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2"
                            >
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className={`md:hidden mt-4 pb-4 space-y-3 ${darkMode ? 'bg-gray-900/50' : 'bg-white/50'} rounded-lg p-4`}>
                            <a href="#home" className="block hover:text-purple-500 transition">HOME</a>
                            <a href="#about" className="block hover:text-purple-500 transition">ABOUT US</a>
                            <a href="#solutions" className="block hover:text-purple-500 transition">OUR SOLUTIONS</a>
                            <a href="#roadmap" className="block hover:text-purple-500 transition">ROADMAP</a>
                            <a href="#blog" className="block hover:text-purple-500 transition">BLOG</a>
                            <a href="#contact" className="block text-purple-500">CONTACT</a>
                            <button className="w-full px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">
                                SIGN IN
                            </button>
                        </div>
                    )}
                </nav>
            </header>

            {/* Hero Section */}
            <section className={`pt-32 pb-20 px-6 ${darkMode ? 'bg-gradient-to-b from-black via-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full mb-4">
                                <span className="text-purple-500 text-sm">Welcome to SuperAI Bot</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                                Smart Crypto Trading
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
                            <p className={`mb-8 text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl backdrop-blur-sm flex items-center justify-center">
                                <BarChart3 className="w-48 h-48 text-purple-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                                <TrendingUp className="w-32 h-32 text-purple-500 mx-auto" />
                                <div className="mt-4 text-center">
                                    <Coins className="w-24 h-24 text-pink-500 mx-auto" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">ABOUT US</span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">About Us – Crypto Trading Platform</h2>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                We are a next-generation cryptocurrency trading platform built on secure blockchain technology. Our mission is to make crypto trading accessible, secure, and profitable for everyone.
                            </p>
                            <p className={`mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                With advanced security measures, lightning-fast execution, and an intuitive interface, we empower traders to navigate the crypto market with confidence. Join thousands of satisfied traders who trust SuperAI Bot.
                            </p>
                            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
                                READ MORE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ICO Solutions */}
            <section className={`py-20 px-6 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}>
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-16">Most powerful & optimistic solutions for ICO</h2>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 px-6">
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
            <section id="solutions" className={`py-20 px-6 ${darkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">OUR SERVICES</span>
                            <h2 className="text-4xl font-bold mt-4 mb-12">Our Services SuperAI Bot</h2>
                            <div className="relative">
                                <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                                    <BarChart3 className="w-48 h-48 text-purple-500 mx-auto" />
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
            <section className="py-12 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center">
                        {cryptoLogos.map((crypto, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800/50' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
                            >
                                <Coins className="w-8 h-8 mx-auto text-purple-500" />
                                <p className="text-xs mt-2">{crypto}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Token Allocation */}
            <section className={`py-20 px-6 ${darkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-white to-gray-50'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <div className={`p-8 rounded-3xl ${darkMode ? 'bg-gradient-to-br from-purple-900/30 to-pink-900/30' : 'bg-gradient-to-br from-purple-100 to-pink-100'}`}>
                                <PieChart className="w-48 h-48 text-purple-500 mx-auto" />
                            </div>
                        </div>
                        <div>
                            <span className="text-purple-500 text-sm uppercase tracking-wide">ALLOCATION</span>
                            <h2 className="text-4xl font-bold mt-4 mb-8">Token allocation summary</h2>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>Tokens Offer - 70,000,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>ICO Bonuses - 5,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '5%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>ICO Quarterly Supplies - 23,000,000,000</span>
                                    </div>
                                    <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                                        <div className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" style={{ width: '23%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span>ICO Community Extras - 2,000,000</span>
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
            <section className="py-20 px-6">
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
            <section className="py-20 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
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

            {/* Footer */}
            <footer className={`py-12 px-6 ${darkMode ? 'bg-black border-t border-gray-800' : 'bg-gray-900 text-white'}`}>
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                                    <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold">SuperAI Bot</span>
                            </div>
                            <p className={darkMode ? 'text-gray-400' : 'text-gray-300'}>
                                Secure crypto trading platform powered by blockchain technology.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>About Us</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Services</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Roadmap</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Help Center</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Privacy Policy</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>Terms of Service</a></li>
                                <li><a href="#" className={`${darkMode ? 'text-gray-400 hover:text-purple-500' : 'text-gray-300 hover:text-purple-400'} transition`}>FAQ</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Newsletter</h4>
                            <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>Stay updated with crypto news</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className={`flex-1 px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-600'}`}
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold">→</button>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-12 pt-8 border-t ${darkMode ? 'border-gray-800' : 'border-gray-700'} text-center ${darkMode ? 'text-gray-400' : 'text-gray-300'}`}>
                        <p>Copyright © 2026 SuperAI Bot. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Website;