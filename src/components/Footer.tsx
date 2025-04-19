import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">
                        B<span className="text-lime-500">oo</span>mFit
                    </h3>
                    <p className="text-gray-400">
                        Your all-in-one fitness tracker. Stay healthy, stay fit.
                    </p>
                </div>

                {/*Quick Links*/}
                <div>
                    <h4 className="font-semibold mb-2">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="#features">Features</Link></li>
                        <li><Link href="#plans">Pricing</Link></li>
                        <li><Link href="/auth/login">Login</Link></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="font-semibold mb-2">Follow Us</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" target="_blank">Instagram</a></li>
                        <li><a href="#" target="_blank">YouTube</a></li>
                        <li><a href="#" target="_blank">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="text-center text-gray-500 mt-8 text-sm">
                &copy; {new Date().getFullYear()} BoomFit. All rights reserved.
            </div>
        </footer>
    )
}