import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    // console.log(children);
  const [selectedVideo, setSelectedVideo] = useState("");
  const [isAuth, setIsAuth] = useState(true);
  const [Name,setName1]=useState("")
  const [imageurl,setImage]=useState("")
   const [title,setTitle]=useState("")
console.log(Name,"name");
  console.log("selectedVideo Global state", selectedVideo);

  const handlePlaySelectedVideo = (videoSrc) => {
    setSelectedVideo(videoSrc);
    // console.log("handlePlaySelectedVideo", videoSrc);
  };

  const handleLogIn = () => {
    setIsAuth(true);
  };
  const handleLogOut = () => {
    setIsAuth(false);
  };

  const changeName=(n)=>
  {
    setName1(n)
    // console.log(Name);
  }
  const changeImage=(n)=>{
    setImage(n)
    console.log(n);

  }
  const changeTitle=(n)=>
  {setTitle(n)
    console.log(n);

  }
  const value = {
    // selectedVideo,
    // setSelectedVideo,
    handlePlaySelectedVideo,
    handleLogIn,
    handleLogOut,
    isAuth,
    changeName,
    changeImage,changeTitle
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
