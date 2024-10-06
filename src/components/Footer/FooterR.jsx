import Tags from "./tags";
export default function FooterR(){
    return(
        <div className="h-[40vh] w-[50vw] ">
            <div className="h-[40vh] w-[13vw] flex p-[4vmin] gap-[20vmin] ">
                <Tags Title="USEFUL LINKS" first="Search" second="Site Map" third="Help" fourth="Services" fifth="Career"/>
                <Tags Title="HELP & SUPPORT" first="Customer Support" second="Forums" third="Testimonials" fourth="Gift Card" fifth="Contact Form"/>
                <Tags Title="RESOURCES" first="Community" second="Disclaimer" third="License" fourth="Privacy" fifth="Partnership"/>
            </div>
        </div>
    )
}