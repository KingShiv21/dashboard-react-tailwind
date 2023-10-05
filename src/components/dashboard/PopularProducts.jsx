
const popularProducts = [
	{
		id: '3432',
		product_name: 'Macbook M1 Pro 14"',
		product_thumbnail: "./photo-1.jpg",
		product_price: '$1499.00',
		product_stock: 341
	},
	{
		id: '7633',
		product_name: 'Samsung Galaxy Buds 2',
		product_thumbnail:  "./photo-4.jpg",
		product_price: '$399.00',
		product_stock: 24
	},
	{
		id: '6534',
		product_name: 'Asus Zenbook Pro',
		product_thumbnail:  "./photo-2.jpg",
		product_price: '$899.00',
		product_stock: 56
	},
	{
		id: '9234',
		product_name: 'LG Flex Canvas',
		product_thumbnail:  "./photo-3.jpg" ,
		product_price: '$499.00',
		product_stock: 98
	},
	{
		id: '4314',
		product_name: 'Apple Magic Touchpad',
		product_thumbnail:  "./photo-4.jpg" ,
		product_price: '$699.00',
		product_stock: 0
	},
	{
		id: '4342',
		product_name: 'Nothing Earbuds One',
		product_thumbnail:  "./photo-5.jpg",
		product_price: '$399.00',
		product_stock: 453
	}
]


const setColor = (stockAmt) =>{
if (stockAmt >= 100) {
	return "text-green-500"
}
else if (stockAmt >= 50) {
	return "text-yellow-500"
} else {
	return "text-red-500"
} 
}

function PopularProducts() {
	return (
		<div className=' bg-white h-[22rem] w-full sm:w-[20rem] flex flex-col'>
			<h1 className='  pt-4 text-gray-700 font-medium tece text-center justify-between'>Popular Products</h1>
			<div className='  px-1 my-2'>
				{popularProducts.map((product)=>(

				<div key={product.id} className=' flex flex-row  items-center '>
					<img src={product.product_thumbnail} alt="" className=' w-10 h-10' />
					<div className=' flex flex-col text-left w-full mx-2 '>
						<h1 className=' font-bold'>{product.product_name}</h1>
						<p className={ setColor(product.product_stock) }>{product.product_stock === 0 ? "Out of Stock" : product.product_stock + " in Stock"}</p>
					</div>
					<div className='text-sm text-gray-500 mr-auto mb-5' >{product.product_price}</div>
				</div>

				))}
			</div>
		</div>
	)
}

export default PopularProducts
