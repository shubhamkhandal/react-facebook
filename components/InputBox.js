import { ClockIcon, EmojiHappyIcon,  } from "@heroicons/react/outline";
import { CameraIcon, UserRemoveIcon, VideoCameraIcon, XCircleIcon } from "@heroicons/react/solid";
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";



const InputBox = () => {
    const session = useSession();
    const [postText, setPostText] = useState('')
    const [showImage, setShowImage] = useState(null)
    const filePicker = useRef(null);

    const addImagePost = (e) => {
       const reader = new FileReader();
       if(e.target.files[0]){
           reader.readAsDataURL(e.target.files[0])
       }
       reader.onload = (readerEvent) => {
        setShowImage(readerEvent.currentTarget.result)
       }
    }

    const removeImage = () => {setShowImage(null)}

    const sendPost = (e) => {
        e.preventDefault();
        
        db.collection('posts').add({
            message:postText,
            name: session.data.user.name,
            email: session.data.user.email,
            image: session.data.user.image,
            timestamp:  firebase.firestore.FieldValue.serverTimestamp()
        }).then(
            (doc)=>{
                if(showImage){
                    const uploadTask = storage.ref(`posts/${doc.id}`).putString(showImage,'data_url')
                    removeImage()

                    uploadTask.on(
                        "state_change",
                        null,
                        (error)=> console.error(error),
                        () => {
                             storage
                             .ref("posts")
                             .child(doc.id)
                             .getDownloadURL()
                             .then((url)=>{
                                 db.collection("posts").doc(doc.id).set(
                                     {
                                         postImage:url,
                                     },
                                     {merge:true}
                                 )
                             })
                        }
                    )
                }
            }
        )

        
        setPostText('')
    }

    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
            <div className="flex space-x-4 p-4 items-center
            ">
                <Image src={session.data.user.image} width={40} height={40} layout="fixed" className="rounded-full"/>
                <form className="flex flex-1">
                    <input type="text" placeholder={`What's on your mind, ${session.data.user.name} ?`} className="rounded-full bg-gray-100 px-5 h-12 flex-grow focus:outline-none" value={postText} onChange={(event) => setPostText(event.target.value)} />
                    <button type="submit" hidden onClick={sendPost}>submit</button>
                </form>
                
            </div>
            {
                    showImage && (
                        <div className="p-10 relative">
                            <Image src={showImage} width={'100%'} height={'100%'} layout="responsive" className="object-cover"/>
                            <XCircleIcon className="text-black h-8 absolute top-6 right-6 cursor-pointer hover:text-blue-500 transition hover:scale-125" onClick={removeImage}/>
                        </div>
                    )
                }
            <div className="flex items-center justify-evenly border-t p-3">
                <div className="inputIcon">
                    <VideoCameraIcon className="text-red-500 h-7"/>
                    <p className="text-gray-500 text-xs sm:text-sm xl:text-base">Live video</p>
                </div>
                <div className="inputIcon" onClick={()=> filePicker?.current.click()}>
                    <CameraIcon className="text-green-500 h-7"/>
                    <p className="text-gray-500 text-xs sm:text-sm xl:text-base">Photo/video</p>
                    <input type="file" ref={filePicker} onChange={addImagePost} hidden />
                </div>
                <div className="inputIcon">
                    <EmojiHappyIcon className="text-yellow-500 h-7"/>
                    <p className="text-gray-500 text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    )
}

export default InputBox
