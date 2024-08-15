

export default function UsersLinks() {

  const links = [
    {
      id: 1,
      title: 'Instagram',
      link: 'https://www.instagram.com/deivid24745/',
      img: 'icons/instagram.svg',
    },
    {
      id: 2,
      title: 'Tiktok',
      link: 'https://www.tiktok.com/@david24745?lang=es',
      img: 'icons/tiktok.svg',
    },
    {
      id: 3,
      title: 'Github',
      link:'https://github.com/David2474',
      img: 'icons/github.svg',
    },
    {
      id: 4,
      title: 'Linkln',
      link:'https://www.linkedin.com/in/dev-david-gutierrez/',
      img: 'icons/linkedin.svg',
    },
    {
      id: 5,
      title: 'Portfolio',
      link:'https://davidgutierrez5.netlify.app/',
      img: 'icons/user.svg',
    }
  ] 

  return (
    <>
      {links.map((link) =>{
        return(
          <a 
            key={link.id}
            href={link.link}
            className="bg-Grey hover:bg-zinc-900 md:p-2 p-[10px]  md:w-11/12 w-5/6 md:text-base text-lg rounded-md flex justify-center items-center">
            
            <img src={link.img} alt="image icon" />
            <p className="mx-2">{link.title}</p>

          </a>
        )
      })}
    </>
  )
}



