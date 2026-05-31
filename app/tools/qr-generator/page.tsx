"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { QRCodeCanvas } from "qrcode.react";

export default function QRGenerator() {
    const [text, setText] = useState("https://quicktoolkit.com");

    return (
        <main className="min-h-screen bg-gray-50">

            <Navbar />

            {/* TOOL SECTION */}
            <section className="max-w-4xl mx-auto px-4 py-10 md:py-16">

                {/* TITLE */}
                <h1 className="text-3xl md:text-4xl font-bold text-center text-black">
                    QR Code Generator
                </h1>

                <p className="text-center text-gray-600 mt-3 text-sm sm:text-base">
                    Create QR codes instantly for links, text, and contacts
                </p>

                {/* TOOL BOX */}
                <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl shadow mt-8">

                    {/* INPUT */}
                    <label className="text-sm font-medium text-gray-700">
                        Enter Text or URL
                    </label>

                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="w-full mt-2 p-3 border rounded-lg text-black focus:ring-2 focus:ring-black"
                        placeholder="https://example.com"
                    />

                    {/* QR DISPLAY */}
                    <div className="flex flex-col items-center mt-8">

                        <div className="bg-white p-4 border rounded-xl">
                            <QRCodeCanvas value={text || " "} size={180} />
                        </div>

                        <p className="text-gray-500 text-sm mt-4 text-center">
                            Scan this QR code using your phone camera
                        </p>

                    </div>

                </div>

                {/* SEO CONTENT */}
                {/* SEO CONTENT */}
                <div className="mt-12 text-gray-800">

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        What is a QR Code Generator?
                    </h2>

                    <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
                        A QR Code Generator is a free online tool that converts text, URLs, or any data into a scannable QR code.
                        Users can scan it using a smartphone camera to instantly open websites, share information, or access content.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        How to use this tool?
                    </h2>

                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                        <li>Enter any text or URL in the input box</li>
                        <li>QR code will be generated instantly</li>
                        <li>Scan it using your mobile camera</li>
                        <li>Share or download the QR code easily</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Where is QR Code used?
                    </h2>

                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                        <li>Website and app link sharing</li>
                        <li>Business cards and resumes</li>
                        <li>Restaurant menus and payments</li>
                        <li>WiFi sharing without passwords</li>
                        <li>Marketing and advertisements</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        Benefits of QR Code Generator
                    </h2>

                    <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                        <li>Fast and instant QR creation</li>
                        <li>No login or signup required</li>
                        <li>Works on mobile and desktop</li>
                        <li>Completely free to use</li>
                        <li>Easy sharing of information</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        SEO Keywords
                    </h2>

                    <p className="text-gray-700 leading-7 text-sm sm:text-base mb-6">
                        QR code generator, free QR code maker, create QR code online, QR generator for links,
                        instant QR code generator, QR code for website, QR code scanner generator.
                    </p>

                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                        FAQ
                    </h2>

                    <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-7">

                        <p>
                            <strong>Is this QR Code Generator free?</strong><br />
                            Yes, it is 100% free to use.
                        </p>

                        <p>
                            <strong>Can I use it for business?</strong><br />
                            Yes, it is perfect for marketing, menus, and sharing links.
                        </p>

                        <p>
                            <strong>Does it work on mobile?</strong><br />
                            Yes, QR codes work with any smartphone camera.
                        </p>

                    </div>

                </div>
            </section>

            <Footer />

        </main>
    );
}