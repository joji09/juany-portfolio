
import React, { useState, useEffect } from 'react';
import { TextElement, Title } from "../components/TextComponent";
import Collage from "../components/Collage";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const ProjectInfo = ({ ProjectInfoObject }) => {
    const navigate = useNavigate();
    const [navigationStack, setNavigationStack] = useState([]);

    // Function to handle navigation back
    const handleGoBack = () => {
        if (navigationStack.length > 1) {
            const previousPath = navigationStack[navigationStack.length - 2];
            setNavigationStack(prevStack => prevStack.slice(0, -1));
            navigate(previousPath);
        } else {
            navigate('/');
        }
    };

    // Update navigation stack whenever the location changes
    useEffect(() => {
        setNavigationStack(prevStack => [...prevStack, window.location.pathname]);
    }, [window.location.pathname]);

    return (
        <div className="flex w-full no-scrollbar">
            <div className="flex fixed items-center mt-auto top-0 h-full w-full bg-black z-0">
                <div className={`flex items-center relative h-full w-full font-bold z-10`}>
                    <div className="flex relative flex-col md:pt-5 items-start md:items-center w-full h-full overflow-scroll no-scrollbar">
                        <div className="hidden md:flex relative mr-auto ml-6 text-left text-gray-200 cursor-pointer items-center" onClick={handleGoBack}>
                            <IoIosArrowBack size={20}/>
                            <p className="text-gray-200 font-normal text-lg md:text-x1 underline inline">Back</p>
                            </div>
                            <div>
                                <Title justify="left">{ProjectInfoObject.title}</Title>
                                <TextElement>{ProjectInfoObject.long}</TextElement>
                                </div>
                                <Collage object={ProjectInfoObject} />
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default ProjectInfo;