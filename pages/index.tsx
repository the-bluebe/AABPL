import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/components/Sections/Home";
import About from "@/components/Sections/About";
import MissionVision from "@/components/Sections/MissionVision";
import Services from "@/components/Sections/Services";
import Team from "@/components/Sections/Team";
import Contact from "@/components/Sections/Contact";

export default function MyHome() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center w-full">
                <div className="w-full">
                    <Home />
                </div>
                <div className="w-full max-w-screen-xl mx-auto">
                    <About />
                    <MissionVision />
                    <Services />
                    <Team />
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    );
}
