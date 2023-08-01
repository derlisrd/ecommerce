import { BsCart2 } from "react-icons/bs";
import { GrHomeRounded, GrSearchAdvanced } from "react-icons/gr";

function MobileMenu() {
    return ( <div className="fixed border-t border-slate-200 md:hidden bottom-0 left-0 w-full px-5 py-5 bg-gray-100 ">
        <div className="flex flex-row gap-2 items-center justify-between">
            <GrHomeRounded />
            <BsCart2 />
            <GrSearchAdvanced />
        </div>
    </div> );
}

export default MobileMenu;