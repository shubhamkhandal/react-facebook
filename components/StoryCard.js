import Image from "next/image"

const StoryCard = ({name,src,profile}) => {
    return (
        <div className="relative w-[100%] md:h-[200px] p-2 group">
            <Image 
                className="rounded-full absolute  z-50 top-10" 
                src={profile} width={40} 
                height={40} layout="fixed" 
                objectFit="cover"/>
            <Image
                className="object-cover md:rounded-3xl lg:rounded-3xl brightness-75 filter md:group-hover:opacity-80 opacity-0 md:opacity-100"
                src={src}
                layout="fill"
            />
            <p className="z-10 text-white absolute bottom-3  md:text-sm lg:text-base opacity-0 md:opacity-100">{name}</p>
        </div>
    )
}

export default StoryCard
