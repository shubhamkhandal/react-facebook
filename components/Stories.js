import StoryCard from "./StoryCard"

const stories = [
    {
        name:"EVG Culture",
        src:'https://images.pexels.com/photos/1927220/pexels-photo-1927220.jpeg?auto=compress',
        profile:'https://images.pexels.com/photos/1191090/pexels-photo-1191090.jpeg?auto=compress'
    },
    {
        name:"Valeria Boltneva",
        src:'https://images.pexels.com/photos/6811729/pexels-photo-6811729.jpeg?auto=compress',
        profile:'https://images.pexels.com/photos/597200/pexels-photo-597200.jpeg?auto=compress'
    },
    {
        name:"Soniya ",
        src:'https://images.pexels.com/photos/9880447/pexels-photo-9880447.jpeg?auto=compress',
        profile:'https://images.pexels.com/photos/7143231/pexels-photo-7143231.jpeg?auto=compress'
    },
    {
        name:"Krish ken",
        src:'https://images.pexels.com/photos/3806244/pexels-photo-3806244.jpeg?auto=compress',
        profile:'https://images.pexels.com/photos/977539/pexels-photo-977539.jpeg?auto=compress'
    },
    {
        name:"los anglish",
        src:'https://images.pexels.com/photos/2468565/pexels-photo-2468565.jpeg?auto=compress',
        profile:'https://images.pexels.com/photos/2004498/pexels-photo-2004498.jpeg?auto=compress'
    },
]
const Stories = () => {
    return (
        <div className="flex justify-center space-x-2 md:space-x-3 mx-auto">
            {
                stories.map(({name, src, profile}, index)=>(
                    <StoryCard key={index} name={name} src={src} profile={profile}/>
                ))
            }
        </div>
    )
}

export default Stories
