import { ModeToggle } from '@/components/ModeToggle'
import { Separator } from '@/components/ui/separator'

const Header = () => {
  return (
    <header className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
      <div className="">
        <h1 className="">Social Media Dashboard</h1>
        <h2 className="">Total Followers: 23,004</h2>
      </div>
      <Separator className='lg:hidden'/>
      <div className="">
        <ModeToggle />
      </div>
      <Separator className='hidden lg:block'/>
    </header>
  )
}
export default Header
