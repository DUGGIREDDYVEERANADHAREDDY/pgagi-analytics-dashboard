import { Switch, ResponsiveSidebar, Header1 } from "components";
import React, { useState, useEffect, useRef } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-gray-900", "text-white");
      document.body.classList.remove("bg-white", "text-black");
      sidebarRef.current?.classList.add("bg-gray-900", "text-white");
      sidebarRef.current?.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.add("bg-white", "text-black");
      document.body.classList.remove("bg-gray-900", "text-white");
      sidebarRef.current?.classList.add("bg-white", "text-black");
      sidebarRef.current?.classList.remove("bg-gray-900", "text-white");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      <div className="w-full max-w-md space-y-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-medium">Dark Mode</span>
          <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={`relative inline-flex items-center h-6 w-11 transition-colors duration-300 ${
              darkMode ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                darkMode ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </Switch>
        </div>
        <div ref={sidebarRef} className="hidden"> {/* Sidebar placeholder */}</div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300">
            More settings coming soon!
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Stay tuned for additional options and features.
          </p>
        </div>
      </div>
      {/* Pass the darkMode prop to ResponsiveSidebar */}
    
    </div>
  );
}

export default Settings;
