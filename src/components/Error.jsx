export default function Error({ children }) {
  return (
    <div className='bg-red-700 text-center uppercase p-3 mb-3 font-bold rounded-md text-white'>
      {children}
    </div>
  )
}
