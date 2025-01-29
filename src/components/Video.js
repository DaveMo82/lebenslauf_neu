import React, {useState} from "react";
import ReactPlayer from "react-player";

function VideoPopup() {
    const [isOpen, setIsOpen] = useState(false);

return(
    <div className="flex flex-col items-center">
        <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg bg-red-700 px-4 py-1 mt-10 mx-6"
        >
            See my video
        </button>

        {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
               
                <div className="bg-white rounded-lg shadow-lg relative w-full max-w-[400px] md:max-w-[600px] overflow-hidden">
                <button
                onClick={() => setIsOpen(false)}
                className="absolute rounded-lg text-red-500 px-2 py-1 top-2 font-bold text-xl"
                >X</button>
                <ReactPlayer
                url="https://vimeo.com/1051470587/6923beecf7"
                controls
                width="100%"
                height="100%"
                className="aspect-video"
                />
                
                 </div>
            </div>
        )}

    </div>


)
}

export default VideoPopup;