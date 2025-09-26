        import Link from "next/link";
   
        import Image from "next/image";

        const Footer = () => {
        return (
            <footer className="w-full bg-black text-white pt-10 pb-4 px-4 flex flex-col items-center justify-center" style={{borderTopRightRadius:'60px',borderTopLeftRadius:'60px'}}>
            {/* Top section */}
            <div className="text-center ">
          <div className="w-[250px] h-[100px]"><Image src={'/assets/home/footerlogo.webp'} width={300} height={200} className="object-cover" /> </div>  </div>
                <p className="mt-2 text-center text-[15px] md:text-[20px] max-w-2xl mx-auto">
                Wow, you really like to read every word on the menu? <br />
                Hurry up and place your order, we’ve got other guests waiting.
                </p>
          

            {/* Divider + Social links */}
                {/* Divider + Social links */}
                <div className="w-full flex flex-col items-center justify-center">
           
                <div className="flex justify-center space-x-2 py-4">
                    <Link href="#" aria-label="LinkedIn">
                        <div className=" rounded-md ">
                            <Image src={'/assets/home/instagram.svg'} width={30} height={30} />
                            {/* <Linkedin className="w-6 h-6 text-black hover:text-red-500 transition-colors" /> */}
                        </div>
                    </Link>
                    <Link href="#" aria-label="Instagram">
                        <div className=" rounded-md ">
                        <Image src={'/assets/home/linkedin.svg'} width={30} height={30} />{/* <Instagram className="w-6 h-6 text-black hover:text-red-500 transition-colors" /> */}
                        </div>
                    </Link>
                    <Link href="#" aria-label="Facebook">
                        <div className=" rounded-md">
                        <Image src={'/assets/home/facebook.svg'} width={30} height={30} />   {/* <Facebook className="w-6 h-6 text-black hover:text-red-500 transition-colors" /> */}
                        </div>
                    </Link>
                    <Link href="#" aria-label="Twitter">
                        <div className=" rounded-md ">
                        <Image  src={'/assets/home/youtube.svg'} width={30} height={30} /> {/* <Youtube className="w-6 h-6 text-black hover:text-red-500 transition-colors" /> */}
                        </div>
                    </Link>
                </div>
                <hr className="w-[80%] border-1 bg-[#FFFFFF]"  />
            </div>
{/* footer fixed*/}
            {/* Bottom links */}
            <div className="flex justify-center md:items-center md:space-x-8 text-[15px] md:text-[20px] mt-6">
                <Link href="/privacy " className="m-0">Privacy Policy</Link>
                <span className="w-[1px] h-8 bg-white mx-4 md:mx-12"></span>
                <Link className="legal m-0" href="/legal">Legal</Link>
                <span className="w-[1px] h-8 bg-white mx-4 md:mx-12"></span>
                <Link href="/terms">Terms of Service</Link>
            </div>
            </footer>
        );
        };

        export default Footer;
