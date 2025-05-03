import Image from 'next/image';

export default function ProductDetailPage({ params }) {
    const { slug } = params;

    // Mocked product for demo (replace with fetch logic)
    const product = {
        title: 'Embroidered Polo',
        price: 1749,
        oldPrice: 2499,
        gender: 'Boy',
        sizes: ['5-6 Y', '7-8 Y', '9-10 Y', '11-12 Y', '13-14 Y'],
        images: [
            '/icons/shopWomenImage.webp',
            '/icons/shopWomenImage.webp',
            '/icons/shopWomenImage.webp',
            '/icons/shopWomenImage.webp',
        ],
        color: 'Mustard',
    };

    return (
        <div className="flex flex-col lg:flex-row w-full px-6 py-12 gap-6 overflow-hidden">
            {/* Images */}
            <div className='flex flex-col items-center w-6/12 h-screen'>
                <div className="grid grid-cols-2 gap-4 w-full h-[25vh]">
                    {product.images.map((img, idx) => (
                        <Image
                            key={idx}
                            src={img}
                            alt={product.title}
                            width={300}
                            height={400}
                            className="object-cover w-full"
                        />
                    ))}
                </div>
            </div>
            

            {/* Details */}
            
            <div className="flex flex-col w-full lg:w-1/2">
                <h2 className="text-2xl font-semibold">{product.title}</h2>
                <div className="text-sm text-gray-700">SKU: PJS502-SY6-MST</div>
                <div className="flex items-center gap-2 mt-2">
                    <span className="line-through text-gray-400">Rs.{product.oldPrice}</span>
                    <span className="font-bold text-lg">Rs.{product.price}</span>
                    <span className="text-xs bg-black text-white px-2 py-0.5 rounded-full">Sale</span>
                </div>

                <div className="mt-4">
                    <div className="font-semibold mb-1">SIZE</div>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map(size => (
                            <div
                                key={size}
                                className="border px-4 py-2 text-sm cursor-pointer hover:bg-black hover:text-white"
                            >
                                {size}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4">
                    <div className="font-semibold mb-1">COLOR: {product.color}</div>
                    <div className="w-6 h-6 rounded-full border" style={{ backgroundColor: '#E1B023' }} />
                </div>

                <div className="mt-4">
                    <div className="font-semibold mb-1">GENDER</div>
                    <div className="border px-3 py-1 inline-block">Boy</div>
                </div>

                <button className="mt-6 bg-black text-white py-3 px-6 font-semibold">
                    ADD TO CART
                </button>
            </div>
        </div>
    );
}
