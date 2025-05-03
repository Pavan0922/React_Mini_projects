import image from  './image.png'
export default function Header() {
    return (
    <>
    <div className='flex justify-center items-center gap-3 p-5'>
        <img className='w-[40px]' src={image} alt="image" srcset="" />
        <h1 className='text-2xl'>Chef Claud</h1>
    </div>
    </>
)}