import { Button } from "antd"
import { SearchOutlined } from '@ant-design/icons';

const Header = () => {
  return (
    <header>
      <div className='container mx-auto'>
        <div className="header_wrapper flex justify-between">
            <div className=" text-3xl font-bold text-white py-10">MOVIE<span className='text-yellow-500'>VENNIE</span></div>
            <div className="flex items-center space-x-8 my-8 mr-[155px]">
              <Button className="bg-zinc-600 text-xl px-6 py-6 text-white rounded-full flex items-center space-x-16 border-none ">
                <span >Search Movie </span>
                <SearchOutlined />
              </Button>
                <img src="https://media.vov.vn/sites/default/files/styles/large/public/2022-06/284802558_5631883726861604_3442669055581176487_n.jpg" alt="" className="h-[30px] w-[30px] rounded-full "/>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
