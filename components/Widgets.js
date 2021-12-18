import { SearchIcon } from "@heroicons/react/outline"
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid"
import ContactCard from "./ContactCard"

const contacts = [
    {src:"https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress", name:"ken"},
    {src:"https://images.pexels.com/photos/2530775/pexels-photo-2530775.jpeg?auto=compress", name:"sem"},
    {src:"https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg?auto=compress", name:"sonam"},
    {src:"https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress", name:"synis"},
    {src:"https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress", name:"kristy"}
]

const Widgets = () => {
    return (
        <div className="hidden md:flex flex-col w-60 p-2 mt-5">
            <div className="flex items-center justify-between text-gray-500 space-x-2">
                <h2 className="text-xl">Contacts</h2>
                <div className="flex space-x-3">
                    <VideoCameraIcon className="h-6"/>
                    <SearchIcon className="h-6"/>
                    <DotsHorizontalIcon className="h-6"/>
                </div>
            </div>
            {
                contacts.map(({src, name})=>(
                    <ContactCard src={src} name={name}/>
                ))
            }
        </div>
    )
}

export default Widgets
