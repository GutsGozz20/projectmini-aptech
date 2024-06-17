
import { AiOutlineHome } from 'react-icons/ai'
import { FaRegHeart } from 'react-icons/fa'
import { MdExplore } from 'react-icons/md'
import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { SiFireship } from 'react-icons/si'
import { Link } from 'react-router-dom'
import NavbarItem from '../NavbarItem'
import { Flex } from 'antd'

const Sidebar = () => {
  return (
    <aside className=" navbar ">
      <Flex vertical={true} className=" space-y-8 text-3xl text-white">
        <Link to={`/`}><NavbarItem  type="nav-active" icon={<AiOutlineHome />} label="Home" /></Link>
        <Link to={`/popular`}><NavbarItem icon={<SiFireship />} label="Popular" /></Link>
        <Link to={`/now_playing`}><NavbarItem icon={<MdExplore />} label="Explore" /></Link>
        <Link to={`/movies`}><NavbarItem icon={<PiTelevisionSimpleBold />} label="Movies" /></Link>
        <Link to={`/favorite`}><NavbarItem icon={<FaRegHeart />} label="Favorite" /></Link>             
      </Flex>
    </aside>
  )
}

export default Sidebar
