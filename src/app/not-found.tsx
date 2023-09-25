import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='flex flex-col items-center justify-center my-16'>
      <h1 className='text-4xl mb-5'>404 Not Found</h1>
      <Link href="/" className='underline text-gray_800 font-medium'>Go Home</Link>
    </section>
  )
}

export default NotFound
