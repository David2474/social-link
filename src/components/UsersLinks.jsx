

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
      link:'https://davidgutierrez5.netlify.app/'
    }
  ] 

  return (
    <>
      {links.map((link) =>{
        return(
          <p 
            key={link.id}
            className="bg-Grey hover:bg-zinc-900 md:p-2 p-[10px]  md:w-11/12 w-5/6 md:text-base text-lg rounded-md flex flex-col justify-center items-center">
            <a href={link.link}>{link.title}</a>
          </p>
        )
      })}
    </>
  )
}



