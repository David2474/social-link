

export default function UsersLinks() {

  const links = [
    {
      id: 1,
      title: 'Instagram',
      link: 'https://www.instagram.com/deivid24745/'
    },
    {
      id: 2,
      title: 'Tiktok',
      link: 'https://www.tiktok.com/@david24745?lang=es'
    },
    {
      id: 3,
      title: 'Github',
      link:'https://github.com/David2474'
    },
    {
      id: 4,
      title: 'Linkln',
      link:'https://www.linkedin.com/in/dev-david-gutierrez/'
    },
    {
      id: 5,
      title: 'Portfolio',
      link:'https://65c023f3ccf320bd34db2b03--porfolio-david.netlify.app/'
    }
  ] 

  return (
    <>
      {links.map((link) =>{
        return(
          <p 
            key={link.id}
            className="bg-Grey md:p-2 p-[10px] md:w-11/12 w-5/6 rounded-md flex flex-col justify-center items-center">
            <a href={link.link}>{link.title}</a>
          </p>
        )
      })}
    </>
  )
}



