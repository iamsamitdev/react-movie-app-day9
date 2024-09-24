import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTachometerAlt, faUser, faSignOutAlt, faFilm, faFileVideo } from "@fortawesome/free-solid-svg-icons"
import { authLogout } from "@/services/authUserAPI"

function SidebarBack() {

  // สร้าง function สำหรับการ Logout
  const signOut = () => {
    authLogout()
      .then(() => {
        // ลบข้อมูลทั้งหมดใน localStorage
        localStorage.clear()
        // Redirect ไปหน้า Login
        window.location.href = "/login"
      })
  }


  return (
    <aside className="bg-sidebar min-h-screen w-72 hidden sm:block shadow-md relative">
      <div className="p-6">
        <NavLink to="/backend/dashboard" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">
          Movies App
        </NavLink>
      </div>
      <nav className="text-white text-base font-semibold pt-3">
        <NavLink
          to="/backend/dashboard"
          className={({ isActive }) =>
            `flex items-center text-white py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
          }
        >
          <FontAwesomeIcon icon={faTachometerAlt} /> &nbsp; Dashboard
        </NavLink>

        <NavLink
          to="/backend/movies"
          className={({ isActive }) =>
            `flex items-center text-white py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
          }
        >
          <FontAwesomeIcon icon={faFilm} /> &nbsp; Movies
        </NavLink>

        <NavLink
          to="/backend/genres"
          className={({ isActive }) =>
            `flex items-center text-white py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
          }
        >
          <FontAwesomeIcon icon={faFileVideo} /> &nbsp; Genres
        </NavLink>

        <NavLink
          to="/backend/users"
          className={({ isActive }) =>
            `flex items-center text-white py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`
          }
        >
          <FontAwesomeIcon icon={faUser} /> &nbsp; Users
        </NavLink>
      </nav>
      
      {/* เมนู Logout ไว้ล่างสุด */}
      <nav className="absolute bottom-0 w-full">
        <button
          onClick={signOut}
          className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item w-full text-left"
        >
          <FontAwesomeIcon icon={faSignOutAlt} /> &nbsp; Logout
        </button>
      </nav>

    </aside>
  )
}

export default SidebarBack
