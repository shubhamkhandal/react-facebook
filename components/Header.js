import Image from "next/image";
import { SearchIcon,FlagIcon, PlayIcon,ShoppingCartIcon, UserGroupIcon, ViewGridIcon, ChatIcon, BellIcon, ChevronDownIcon} from "@heroicons/react/outline";
import {HomeIcon} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
    const session = useSession();

    return (
        <header className="sticky top-0 z-50 flex items-center p-2 lg:px-5 shadow-md bg-white">
            {/* left */}
            <div className="flex items-center">
                <Image layout='fixed' src="https://cdn-icons-png.flaticon.com/512/124/124010.png" width={40} height={40} className="rounded-full"/>
                <div className="flex items-center bg-gray-200 rounded-full p-2 ml-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input type="text" placeholder="Search facebook" className="hidden md:inline-flex bg-transparent pl-2 outline-none" />
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2 items-center">
                    <HeaderIcon active Icon={HomeIcon}/>
                    <HeaderIcon Icon={FlagIcon}/>
                    <HeaderIcon Icon={PlayIcon}/>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image onClick={signOut} src={session.data.user.image} width={40} height={40} className="rounded-full"/>
                <p className="whitespace-nowrap font-semibold pr-3">{session.data.user.name}</p>
                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
            </div>

        </header>
    )
}

export default Header
