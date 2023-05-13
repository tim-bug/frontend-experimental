import {
  SalesNav,
  AggregatorNav,
  AgencyNav,
  DeveloperNav,
  ProjectNav,
  WhitelabelNav,
  AgentNav,
  CountryNav,
  RolesSVG,
  BuildingNav,
  DashboardNav,
} from "lib/Icons";
import { IRoles } from "./Interface";
import { memo } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const ADMINISTRATOR = [
  {
    category: "Transactions",
    description: "Unique Transaction Data",
    menu: [
      {
        name: "Sales",
        route: "/dashboard/sales?page=1&limit=10",
        initialRoute: "/dashboard/sales",
        icon: <SalesNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Developer",
    description: "Unique Developer Data",
    menu: [
      {
        name: "Aggregators",
        route: "/dashboard/aggregator?page=1&limit=10",
        initialRoute: "/dashboard/aggregator",
        icon: <AggregatorNav color="white" size={16} />,
      },
      {
        name: "Agencys",
        route: "/dashboard/agency?page=1&limit=10",
        initialRoute: "/dashboard/agency",
        icon: <AgencyNav color="white" size={16} />,
      },
      {
        name: "Developers",
        route: "/dashboard/developer?page=1&limit=10",
        initialRoute: "/dashboard/developer",
        icon: <DeveloperNav color="white" size={16} />,
      },
      {
        name: "Projects",
        route: "/dashboard/project?page=1&limit=10",
        initialRoute: "/dashboard/project",
        icon: <ProjectNav color="white" size={16} />,
      },
      {
        name: "White Label",
        route: "/dashboard/whitelabel?page=1&limit=10",
        initialRoute: "/dashboard/whitelabel",
        icon: <WhitelabelNav color="white" size={16} />,
      },
      {
        name: "Agent",
        route: "/dashboard/agent?page=1&limit=10",
        initialRoute: "/dashboard/agent",
        icon: <AgentNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Master Data",
    description: "Unique Master Data",
    menu: [
      {
        name: "Group / Roles",
        route: "/dashboard/group?page=1&limit=10",
        initialRoute: "/dashboard/group",
        icon: <RolesSVG color="white" size={16} />,
      },
      {
        name: "Country",
        route: "/dashboard/country?page=1&limit=10",
        initialRoute: "/dashboard/country",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "State",
        route: "/dashboard/state?page=1&limit=5",
        initialRoute: "/dashboard/state",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Region",
        route: "/dashboard/region?page=1&limit=10",
        initialRoute: "/dashboard/region",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Suburb / City",
        route: "/dashboard/suburb?page=1&limit=10",
        initialRoute: "/dashboard/suburb",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Building Type",
        route: "/dashboard/building?page=1&limit=10",
        initialRoute: "/dashboard/building",
        icon: <BuildingNav color="white" size={16} />,
      },
    ],
  },
];

export const AGENCY = [
  {
    category: "Transactions",
    description: "Unique Transaction Data",
    menu: [
      {
        name: "Sales",
        route: "/dashboard/sales?page=1&limit=10",
        initialRoute: "/dashboard/sales",
        icon: <SalesNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Developer",
    description: "Unique Developer Data",
    menu: [
      {
        name: "Aggregators",
        route: "/dashboard/aggregator?page=1&limit=10",
        initialRoute: "/dashboard/aggregator",
        icon: <AggregatorNav color="white" size={16} />,
      },
      {
        name: "Developers",
        route: "/dashboard/developer?page=1&limit=10",
        initialRoute: "/dashboard/developer",
        icon: <DeveloperNav color="white" size={16} />,
      },
      {
        name: "Projects",
        route: "/dashboard/project?page=1&limit=10",
        initialRoute: "/dashboard/project",
        icon: <ProjectNav color="white" size={16} />,
      },
      {
        name: "Agent",
        route: "/dashboard/agent?page=1&limit=10",
        initialRoute: "/dashboard/agent",
        icon: <AgentNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Master Data",
    description: "Unique Master Data",
    menu: [
      {
        name: "Group / Roles",
        route: "/dashboard/group?page=1&limit=10",
        initialRoute: "/dashboard/group",
        icon: <RolesSVG color="white" size={16} />,
      },
      {
        name: "Country",
        route: "/dashboard/country?page=1&limit=10",
        initialRoute: "/dashboard/country",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "State",
        route: "/dashboard/state?page=1&limit=5",
        initialRoute: "/dashboard/state",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Region",
        route: "/dashboard/region?page=1&limit=10",
        initialRoute: "/dashboard/region",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Suburb / City",
        route: "/dashboard/suburb?page=1&limit=10",
        initialRoute: "/dashboard/suburb",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Building Type",
        route: "/dashboard/building?page=1&limit=10",
        initialRoute: "/dashboard/building",
        icon: <BuildingNav color="white" size={16} />,
      },
    ],
  },
];

export const DEVELOPER = [
  {
    category: "Transactions",
    description: "Unique Transaction Data",
    menu: [
      {
        name: "Sales",
        route: "/dashboard/sales?page=1&limit=10",
        initialRoute: "/dashboard/sales",
        icon: <SalesNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Developer",
    description: "Unique Developer Data",
    menu: [
      {
        name: "Aggregators",
        route: "/dashboard/aggregator?page=1&limit=10",
        initialRoute: "/dashboard/aggregator",
        icon: <AggregatorNav color="white" size={16} />,
      },
      {
        name: "Agencys",
        route: "/dashboard/agency?page=1&limit=10",
        initialRoute: "/dashboard/agency",
        icon: <AgencyNav color="white" size={16} />,
      },

      {
        name: "Projects",
        route: "/dashboard/project?page=1&limit=10",
        initialRoute: "/dashboard/project",
        icon: <ProjectNav color="white" size={16} />,
      },

      {
        name: "Agent",
        route: "/dashboard/agent?page=1&limit=10",
        initialRoute: "/dashboard/agent",
        icon: <AgentNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Master Data",
    description: "Unique Master Data",
    menu: [
      {
        name: "Group / Roles",
        route: "/dashboard/group?page=1&limit=10",
        initialRoute: "/dashboard/group",
        icon: <RolesSVG color="white" size={16} />,
      },
      {
        name: "Country",
        route: "/dashboard/country?page=1&limit=10",
        initialRoute: "/dashboard/country",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "State",
        route: "/dashboard/state?page=1&limit=5",
        initialRoute: "/dashboard/state",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Region",
        route: "/dashboard/region?page=1&limit=10",
        initialRoute: "/dashboard/region",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Suburb / City",
        route: "/dashboard/suburb?page=1&limit=10",
        initialRoute: "/dashboard/suburb",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Building Type",
        route: "/dashboard/building?page=1&limit=10",
        initialRoute: "/dashboard/building",
        icon: <BuildingNav color="white" size={16} />,
      },
    ],
  },
];

export const AGGREGATOR = [
  {
    category: "Transactions",
    description: "Unique Transaction Data",
    menu: [
      {
        name: "Sales",
        route: "/dashboard/sales?page=1&limit=10",
        initialRoute: "/dashboard/sales",
        icon: <SalesNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Developer",
    description: "Unique Developer Data",
    menu: [
      {
        name: "Agencys",
        route: "/dashboard/agency?page=1&limit=10",
        initialRoute: "/dashboard/agency",
        icon: <AgencyNav color="white" size={16} />,
      },
      {
        name: "Developers",
        route: "/dashboard/developer?page=1&limit=10",
        initialRoute: "/dashboard/developer",
        icon: <DeveloperNav color="white" size={16} />,
      },
      {
        name: "Projects",
        route: "/dashboard/project?page=1&limit=10",
        initialRoute: "/dashboard/project",
        icon: <ProjectNav color="white" size={16} />,
      },
      {
        name: "Agent",
        route: "/dashboard/agent?page=1&limit=10",
        initialRoute: "/dashboard/agent",
        icon: <AgentNav color="white" size={16} />,
      },
    ],
  },
  {
    category: "Master Data",
    description: "Unique Master Data",
    menu: [
      {
        name: "Group / Roles",
        route: "/dashboard/group?page=1&limit=10",
        initialRoute: "/dashboard/group",
        icon: <RolesSVG color="white" size={16} />,
      },
      {
        name: "Country",
        route: "/dashboard/country?page=1&limit=10",
        initialRoute: "/dashboard/country",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "State",
        route: "/dashboard/state?page=1&limit=5",
        initialRoute: "/dashboard/state",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Region",
        route: "/dashboard/region?page=1&limit=10",
        initialRoute: "/dashboard/region",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Suburb / City",
        route: "/dashboard/suburb?page=1&limit=10",
        initialRoute: "/dashboard/suburb",
        icon: <CountryNav color="white" size={16} />,
      },
      {
        name: "Building Type",
        route: "/dashboard/building?page=1&limit=10",
        initialRoute: "/dashboard/building",
        icon: <BuildingNav color="white" size={16} />,
      },
    ],
  },
];

// const ComponentMenu: React.FC<IRoles> = ({ role, open, setOpen }) => {
//   const { state } = useCtx();
//   const router = useRouter();
//   const switcher = () => {
//     if (role === "Administrator") {
//       return ADMINISTRATOR;
//     }

//     if (role === "Aggregator") {
//       return AGGREGATOR;
//     }

//     if (role === "Agency") {
//       return AGENCY;
//     }

//     if (role === "Developer") {
//       return DEVELOPER;
//     }
//     return [];
//   };

//   return (
//     <>
//       <div className="px-2">
//         <div className="group relative w-full block border-b border-white/20 pb-2">
//           <div
//             className={`flex flex-row justify-between items-center duration-200 ${
//               open ? "opacity-0" : ""
//             }`}
//           >
//             <div className="pb-2 ">
//               <p className="uppercase text-sm font-bold text-secondary inline">
//                 Main Menu
//               </p>
//               <p className="m-0 text-white text-xs">Main Menus</p>
//             </div>
//           </div>
//           <input
//             disabled={open}
//             type="checkbox"
//             readOnly
//             // @ts-ignore
//             checked={open ? false : true}
//             className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
//           />

//           <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
//             <Link
//               href={`/dashboard`}
//               className={`flex hover:bg-white/20 active:scale-95 ${
//                 router?.pathname === "/dashboard"
//                   ? "bg-white/20 text-white"
//                   : null
//               } ${
//                 open ? "opacity-0" : "opacity-100"
//               } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
//             >
//               <button
//                 onClick={() => setOpen(true)}
//                 className=" w-full h-6 absolute lg:hidden"
//               ></button>
//               <div className="flex flex-row items-center gap-2">
//                 <DashboardNav color="white" size={17} />
//                 <p className="m-0">Dashboard</p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>

//       <div className="p-2">
//         <div className="group relative w-full block border-b border-white/20 pb-2">
//           <div
//             className={`flex flex-row justify-between items-center duration-200 ${
//               open ? "opacity-0" : ""
//             }`}
//           >
//             <div className="pb-2 ">
//               <p className="uppercase text-sm font-bold text-secondary inline">
//                 {"Menu"}
//               </p>
//               <p className="m-0 text-white text-xs">{"Menu"}</p>
//             </div>
//           </div>
//           <input
//             disabled={open}
//             type="checkbox"
//             readOnly
//             // @ts-ignore
//             checked={open ? false : true}
//             className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
//           />

//           <div className="peer-checked:max-h-full h-full space-y-2 max-h-0 overflow-hidden">
//             {state?.menu?.map((m: GroupAccessInterface, i: number) => {
//               return (
//                 <Link
//                   href={`/dashboard/${m?.menu}`}
//                   key={i}
//                   className={`flex hover:bg-white/20 active:scale-95 hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
//                   //  className={`flex hover:bg-white/20 active:scale-95
//                   // ${
//                   //   router?.pathname?.includes(`${m.initialRoute}`)
//                   //     ? "bg-white/20 text-white"
//                   //     : null
//                   // } ${
//                   //   open ? "opacity-0" : "opacity-100"
//                   // }
//                   //  hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
//                 >
//                   <button
//                     onClick={() => setOpen(true)}
//                     className=" w-full h-6 absolute lg:hidden"
//                   ></button>
//                   <div className="flex flex-row items-center gap-2">
//                     {/* {m?.icon} */}
//                     <p className="m-0 text-white capitalize">{m?.menu}</p>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const ComponentMenu: React.FC<IRoles> = ({ role, open, setOpen }) => {
  const router = useRouter();
  if (role === "Administrator") {
    return (
      <>
        <div className="p-2">
          <div className="group relative w-full block border-b border-white/20 pb-2">
            <div
              className={`flex flex-row justify-between items-center duration-200 ${
                open ? "opacity-0" : ""
              }`}
            >
              <div className="pb-2 ">
                <p className="uppercase text-sm font-bold text-secondary inline">
                  Main Menu
                </p>
                <p className="m-0 text-white text-xs">Main Menus</p>
              </div>
            </div>
            <input
              disabled={open}
              type="checkbox"
              readOnly
              checked={open ? false : true}
              className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
            />
            <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
              <Link
                href={`/dashboard`}
                className={`flex hover:bg-white/20 active:scale-95 ${
                  router?.pathname === "/dashboard"
                    ? "bg-white/20 text-white"
                    : null
                } ${
                  open ? "opacity-0" : "opacity-100"
                } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
              >
                <button
                  onClick={() => setOpen(true)}
                  className=" w-full h-6 absolute lg:hidden"
                ></button>
                <div className="flex flex-row items-center gap-2">
                  <DashboardNav color="white" size={17} />
                  <p className="m-0">Dashboard</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {ADMINISTRATOR.map((r, i) => {
          return (
            <div key={i} className="p-2">
              <div
                key={i.toString()}
                className="group relative w-full block border-b border-white/20 pb-2"
              >
                <div
                  className={`flex flex-row justify-between items-center duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  <div className="pb-2 ">
                    <p className="uppercase text-sm font-bold text-secondary inline">
                      {r.category}
                    </p>
                    <p className="m-0 text-white text-xs">{r.description}</p>
                  </div>
                </div>
                <input
                  disabled={open}
                  type="checkbox"
                  // @ts-ignore
                  checked={open ? false : true}
                  className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
                />

                <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden">
                  {r.menu.map((m, i) => {
                    return (
                      <Link
                        href={`${m.route}`}
                        key={m.route}
                        className={`flex hover:bg-white/20 active:scale-95 ${
                          router?.pathname?.includes(`${m.initialRoute}`)
                            ? "bg-white/20 text-white"
                            : null
                        } ${
                          open ? "opacity-0" : "opacity-100"
                        } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
                      >
                        <button
                          onClick={() => setOpen(true)}
                          className=" w-full h-6 absolute lg:hidden"
                        ></button>
                        <div className="flex flex-row items-center gap-2">
                          {m?.icon}
                          <p className="m-0">{m.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  if (role === "Aggregator") {
    return (
      <>
        <div className="group relative w-full block border-b border-white/20 pb-2">
          <div
            className={`flex flex-row justify-between items-center duration-200 ${
              open ? "opacity-0" : ""
            }`}
          >
            <div className="pb-2 ">
              <p className="uppercase text-sm font-bold text-secondary inline">
                Main Menu
              </p>
              <p className="m-0 text-white text-xs">Main Menus</p>
            </div>
          </div>
          <input
            disabled={open}
            type="checkbox"
            // @ts-ignore
            checked={open ? false : true}
            className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
          />

          <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
            <Link
              href={`/dashboard`}
              className={`flex hover:bg-white/20 active:scale-95 ${
                router?.pathname === "/dashboard"
                  ? "bg-white/20 text-white"
                  : null
              } ${
                open ? "opacity-0" : "opacity-100"
              } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
            >
              <button
                onClick={() => setOpen(true)}
                className=" w-full h-6 absolute lg:hidden"
              ></button>
              <div className="flex flex-row items-center gap-2">
                <DashboardNav color="white" size={17} />
                <p className="m-0">Dashboard</p>
              </div>
            </Link>
          </div>
        </div>
        {AGGREGATOR.map((r, i) => {
          return (
            <div key={i}>
              <div
                key={i.toString()}
                className="group relative w-full block border-b border-white/20 pb-2"
              >
                <div
                  className={`flex flex-row justify-between items-center duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  <div className="pb-2 ">
                    <p className="uppercase text-sm font-bold text-secondary inline">
                      {r.category}
                    </p>
                    <p className="m-0 text-white text-xs">{r.description}</p>
                  </div>
                </div>
                <input
                  disabled={open}
                  type="checkbox"
                  // @ts-ignore
                  checked={open ? false : true}
                  className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
                />

                <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden">
                  {r.menu.map((m, i) => {
                    return (
                      <Link
                        href={`${m.route}`}
                        key={m.route}
                        className={`flex hover:bg-white/20 active:scale-95 ${
                          router?.pathname?.includes(`${m.initialRoute}`)
                            ? "bg-white/20 text-white"
                            : null
                        } ${
                          open ? "opacity-0" : "opacity-100"
                        } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
                      >
                        <button
                          onClick={() => setOpen(true)}
                          className=" w-full h-6 absolute lg:hidden"
                        ></button>
                        <div className="flex flex-row items-center gap-2">
                          {m?.icon}
                          <p className="m-0">{m.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  if (role === "Agency") {
    return (
      <>
        <div className="group relative w-full block border-b border-white/20 pb-2">
          <div
            className={`flex flex-row justify-between items-center duration-200 ${
              open ? "opacity-0" : ""
            }`}
          >
            <div className="pb-2 ">
              <p className="uppercase text-sm font-bold text-secondary inline">
                Main Menu
              </p>
              <p className="m-0 text-white text-xs">Main Menus</p>
            </div>
          </div>
          <input
            disabled={open}
            type="checkbox"
            // @ts-ignore
            checked={open ? false : true}
            className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
          />

          <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
            <Link
              href={`/dashboard`}
              className={`flex hover:bg-white/20 active:scale-95 ${
                router?.pathname === "/dashboard"
                  ? "bg-white/20 text-white"
                  : null
              } ${
                open ? "opacity-0" : "opacity-100"
              } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
            >
              <button
                onClick={() => setOpen(true)}
                className=" w-full h-6 absolute lg:hidden"
              ></button>
              <div className="flex flex-row items-center gap-2">
                <DashboardNav color="white" size={17} />
                <p className="m-0">Dashboard</p>
              </div>
            </Link>
          </div>
        </div>
        {AGENCY.map((r, i) => {
          return (
            <div key={i} className="p-2">
              <div
                key={i.toString()}
                className="group relative w-full block border-b border-white/20 pb-2"
              >
                <div
                  className={`flex flex-row justify-between items-center duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  <div className="pb-2 ">
                    <p className="uppercase text-sm font-bold text-secondary inline">
                      {r.category}
                    </p>
                    <p className="m-0 text-white text-xs">{r.description}</p>
                  </div>
                </div>
                <input
                  disabled={open}
                  type="checkbox"
                  // @ts-ignore
                  checked={open ? false : true}
                  className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
                />

                <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden">
                  {r.menu.map((m, i) => {
                    return (
                      <Link
                        href={`${m.route}`}
                        key={m.route}
                        className={`flex hover:bg-white/20 active:scale-95 ${
                          router?.pathname?.includes(`${m.initialRoute}`)
                            ? "bg-white/20 text-white"
                            : null
                        } ${
                          open ? "opacity-0" : "opacity-100"
                        } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
                      >
                        <button
                          onClick={() => setOpen(true)}
                          className=" w-full h-6 absolute lg:hidden"
                        ></button>
                        <div className="flex flex-row items-center gap-2">
                          {m?.icon}
                          <p className="m-0">{m.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  if (role === "Developer") {
    return (
      <>
        <div className="group relative w-full block border-b border-white/20 pb-2">
          <div
            className={`flex flex-row justify-between items-center duration-200 ${
              open ? "opacity-0" : ""
            }`}
          >
            <div className="pb-2 ">
              <p className="uppercase text-sm font-bold text-secondary inline">
                Main Menu
              </p>
              <p className="m-0 text-white text-xs">Main Menus</p>
            </div>
          </div>
          <input
            disabled={open}
            type="checkbox"
            // @ts-ignore
            checked={open ? false : true}
            className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
          />

          <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
            <Link
              href={`/dashboard`}
              className={`flex hover:bg-white/20 active:scale-95 ${
                router?.pathname === "/dashboard"
                  ? "bg-white/20 text-white"
                  : null
              } ${
                open ? "opacity-0" : "opacity-100"
              } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
            >
              <button
                onClick={() => setOpen(true)}
                className=" w-full h-6 absolute lg:hidden"
              ></button>
              <div className="flex flex-row items-center gap-2">
                <DashboardNav color="white" size={17} />
                <p className="m-0">Dashboard</p>
              </div>
            </Link>
          </div>
        </div>
        {DEVELOPER.map((r, i) => {
          return (
            <div key={i} className="p-2">
              <div
                key={i.toString()}
                className="group relative w-full block border-b border-white/20 pb-2"
              >
                <div
                  className={`flex flex-row justify-between items-center duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                >
                  <div className="pb-2 ">
                    <p className="uppercase text-sm font-bold text-secondary inline">
                      {r.category}
                    </p>
                    <p className="m-0 text-white text-xs">{r.description}</p>
                  </div>
                </div>
                <input
                  disabled={open}
                  type="checkbox"
                  // @ts-ignore
                  checked={open ? false : true}
                  className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
                />

                <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden">
                  {r.menu.map((m, i) => {
                    return (
                      <Link
                        href={`${m.route}`}
                        key={m.route}
                        className={`flex hover:bg-white/20 active:scale-95 ${
                          router?.pathname?.includes(`${m.initialRoute}`)
                            ? "bg-white/20 text-white"
                            : null
                        } ${
                          open ? "opacity-0" : "opacity-100"
                        } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
                      >
                        <button
                          onClick={() => setOpen(true)}
                          className=" w-full h-6 absolute lg:hidden"
                        ></button>
                        <div className="flex flex-row items-center gap-2">
                          {m?.icon}
                          <p className="m-0">{m.name}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  }

  return (
    <>
      <div className="group relative w-full block border-b border-white/20 pb-2">
        <div
          className={`flex flex-row justify-between items-center duration-200 ${
            open ? "opacity-0" : ""
          }`}
        >
          <div className="pb-2 ">
            <p className="uppercase text-sm font-bold text-secondary inline">
              Main Menu
            </p>
            <p className="m-0 text-white text-xs">Main Menus</p>
          </div>
        </div>
        <input
          disabled={open}
          type="checkbox"
          // @ts-ignore
          checked={open ? false : true}
          className="peer absolute top-0 inset-x-0 opacity-0 w-full h-10 z-10 cursor-pointer"
        />

        <div className="peer-checked:max-h-96 h-auto space-y-2 max-h-0 overflow-hidden duration-1000">
          <Link
            href={`/dashboard`}
            className={`flex hover:bg-white/20 active:scale-95 ${
              router?.pathname === "/dashboard"
                ? "bg-white/20 text-white"
                : null
            } ${
              open ? "opacity-0" : "opacity-100"
            } hover:text-white rounded-md text-gray-200 text-sm font-semibold items-start flex-col gap-2 p-2`}
          >
            <button
              onClick={() => setOpen(true)}
              className=" w-full h-6 absolute lg:hidden"
            ></button>
            <div className="flex flex-row items-center gap-2">
              <DashboardNav color="white" size={17} />
              <p className="m-0">Dashboard</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default memo(ComponentMenu);
