const Collage = props => {
    const imagesh = [];
    const imagesv = [];

    if (props.object){
        for (let i = 0; i < props.object.images.horizontal.length; i++) {
            imagesh.push(
                <img key={"h"+i} src={props.object.images.horizontal[i]} alt="" className="block w-full h-auto top-0 mb-2" />
            );
        }

        for(let i = 0; i < props.object.images.vertical.length; i++){
            imagesv.push(
                <img key={"v"+i} src={props.object.images.vertical[i]} alt="" className="block w-full h-auto top-0" />
            );
        }
    }

    return (
        <div className="flex relative mx-auto mt-5 flex-col md:flex-row h-auto pb-2 px-2 md:px-10 gap-2 md:gap-10">
            <div className="block relative m-auto flex-col items-start gap-2">
                {imagesh}
                </div>
                {imagesv.length?<div className="flex relative flex-col items-start">{imagesv}</div> : null}
            </div>
    );
}

export default Collage;