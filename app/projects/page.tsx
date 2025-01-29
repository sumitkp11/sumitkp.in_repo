import Header from "../src/components/Header";
import Footer from "../src/components/Footer"
export default function Projects() {

    return (
        <>
        <Header />
        <div>
            <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <iframe className="float-right border-2 border-black m-3" src="http://projects.react1.sumitkp.in/" height={480} width={854} scrolling="no" title="W3Schools Free Online Web Tutorials"></iframe>
            </div>
        </div>

        <Footer />
        </>
        
    )
};