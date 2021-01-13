import Link from 'next/link'
import Image from '../core/Image'

const DisplayMedium = ({ link, title, subtitle, imageSrc }) => (
    <div className="mb-4 lg:mb-0 bg-light p-8 pb-0 hover:bg-light-200">
        <Link href={`${link}`}>
            <a aria-label={title}>
                <div className="flex flex-column justify-center items-center h-56">
                    <Image alt={title} src={imageSrc} className="w-3/5" />
                </div>
                <div className="mb-8">
                    <p className="text-xl font-semibold mb-1">{title}</p>
                    <p className="text-xs text-gray-700">{subtitle}</p>
                </div>
            </a>
        </Link>
    </div>
)

export default DisplayMedium