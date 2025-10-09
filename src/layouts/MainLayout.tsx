import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r p-6 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Finance Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600"
            }
          >
            Transactions
          </NavLink>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <span className="font-medium text-gray-700">Welcome, User</span>
          <button className="text-sm text-blue-600 hover:underline">
            Logout
          </button>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
