import Image from "next/image"

const ContactCard = ({src, name}) => {
    return (
        <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl">
            <Image src={src} width={40} height={40} className="rounded-full" objectFit="cover"/>
            <p className="font-medium">{name}</p>
            <div className="absolute bottom-1 left-6 bg-green-400 h-3 w-3 rounded-full"></div>
        </div>
    )
}

export default ContactCard
