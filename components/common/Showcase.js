import Image from '../core/Image'

const Showcase = ({ imageSrc }) => {
    return (
        <div className="z-10">
            <Image src={imageSrc} className="w-136" atl="Showcase item" />
        </div>
    )
}

export default Showcase