// ICONS
import { LuBird } from "react-icons/lu";
// components
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useState } from "react";


const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [isSignup, setIsSignup] = useState(true);
  function toggleModal(): void {
    setModal(!modal);
  }
  return (
    <>
      <nav className="navbar h-14 bg-black border-b-2">
        <div className="h-full w-full flex flex-nowrap items-center justify-between gap-5 px-5">
          <section>
            <a href="" className="flex flex-nowrap items-center gap-2">
              <LuBird className="text-2xl text-green-500" />
              <h1 className="text-white text-xl font-medium tracking-wide" style={{ fontFamily: "Dancing Script, cursive" }}>StoryTeller</h1>
            </a>
          </section>
          <section>
            <Button onClick={toggleModal} className={"bg-green-600 text-white py-1 px-4 rounded-full"}>
              <h1 className="text-xs font-medium leading-6 tracking-wide capitalize">Create Account</h1>
            </Button>
          </section>
        </div>
      </nav>


      {/* Modal Implement */}
      <Modal isOpen={modal} onClose={toggleModal}>
        {
          isSignup ?
            <div className="mt-10 flex flex-col gap-3">
              <input type="text" name="fullname" placeholder="fullname" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <input type="text" name="email" placeholder="email" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <input type="text" name="password" placeholder="password" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <input type="text" name="confirm password" placeholder="confirm password" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <Button onClick={() => { }} type="submit" className="mt-5 text-xs tracking-wider font-medium bg-black text-white px-5 py-3 rounded-md">
                Sign Up
              </Button>
              <div className="flex flex-nowrap items-center justify-center gap-2">
                <h1 className="text-[13px] font-medium text-gray-500">Already have an account ?</h1>
                <Button onClick={() => setIsSignup(false)} type="button" className="text-sm tracking-wider font-semibold text-gray-700 capitalize">
                  signin
                </Button>
              </div>
            </div>
            :
            <div className="mt-10 flex flex-col gap-3">
              <input type="text" name="email" placeholder="email" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <input type="text" name="password" placeholder="password" className="text-sm font-medium p-2 border border-gray-300 w-full rounded focus:outline-none" />
              <Button onClick={() => { }} type="submit" className="mt-5 text-xs tracking-wider font-medium bg-black text-white px-5 py-3 rounded-md">
                Sign In
              </Button>
              <div className="flex flex-nowrap items-center justify-center gap-2">
                <h1 className="text-[13px] font-medium text-gray-500">Don't have an account ?</h1>
                <Button onClick={() => setIsSignup(true)} type="button" className="text-sm tracking-wider font-semibold text-gray-700 capitalize">
                  Signup
                </Button>
              </div>
            </div>
        }
      </Modal>
    </>

  )
}
export default Navbar;