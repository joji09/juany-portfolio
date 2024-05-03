export const Title = ({children, justify=null}) => (
    <div
    className={`relative flow flex-wrap h-auto w-full text-${justify || 'center'} font-bold py-6`}>
        <div className="w-full px-3 md:px-6 py-2">
            <div className="font-bold text-3xl text-red-400 mb-4">{children}</div>
            <hr className={`${justify === 'left' ? 'mr-auto' : 'm-auto'} self-center w-1/2 border-2 bg-gray-200 rounded-full mt-1`} />
        </div>
    </div>
)

export const TextElement = ({title, c, underline=false, children}) => (
    <div className={`relative px-3 md:px=6 py-3 ${c ? 'text-center' : 'text-left'}`}>
        {title ? <div className="font-bold text-2xl text-red-200 mb-2 z-20">{title}</div> : null}
        <p className={`text-gray-200 font-normal text-lg md:text-x1 z-20 overflow-hidden ${underline ? 'underline' : ''}`}>{children}</p>
    </div>
)

