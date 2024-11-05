import CommonHeading from "../Home/CommonHeading/CommonHeading";

const Footer = () => {
    const headTag = <h2 className="text-center text-2xl font-semibold">
        Gadget Heaven
    </h2>
    const byText = <p className="text-center text-gray-600">
        Leading the way in cutting-edge technology and innovation.
    </p>
    return (
        <footer className=" bg-base-200 text-black border-2 mt-5 p-10">
            <CommonHeading headTag={headTag} byText={byText}/>
            <div className="footer justify-around pt-5">

            <nav >
                <h6 className="footer-title text-xl ">Services</h6>
                <p className="link link-hover">Product Support</p>
                <p className="link link-hover">Order Tracking</p>
                <p className="link link-hover">Shipping and Delivery</p>
                <p className="link link-hover">Returns</p>
            </nav>
            <nav>
                    <h6 className="footer-title text-xl">Company</h6>
                <p className="link link-hover">About us</p>
                <p className="link link-hover">Careers</p>
                <p className="link link-hover">Contact</p>
                <p className="link link-hover">Press kit</p>
            </nav>
            <nav>
                    <h6 className="footer-title text-xl">Legal</h6>
                <p className="link link-hover">Terms of Service</p>
                <p className="link link-hover">Privacy policy</p>
                <p className="link link-hover">Cookie policy</p>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;