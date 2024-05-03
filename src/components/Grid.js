import { Link, useNavigate } from "react-router-dom";
import { TextElement } from "./TextComponent";

// Grid element for images
const Image = ({src}) => (
    <div className="flex items-end mt-auto relative px-0 lg:px-0 w-full max-h-96 overflow-hidden">
        <img src={src} alt="" className="block w-full h-auto" />
    </div>
)

// Grid for landing section
const Grid = ({title, span, path, onClick, image, children}) => {
    // const history = useHistory();
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate('/'+path)} className={`flex items-start col-span-1 md:col-span-1 x1:col-span-1 relative h-full w-full font bold z-10`}>
            <div
            className="flex flex-col cursor-pointer items-start rounded w-full overflow-hidden bg-red-600 shadow-xl hover:-mb-14p border-6 border-red-400 hover:border-t-20 hover:border-red-500 hover:bg-red-900 duration-100"
            onClick={onClick}
            >
            <TextElement title={title}>{children}</TextElement>
            {image[0] && <Image src={image} />}
            </div>
        </div>
    );
}

export default Grid;