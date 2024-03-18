"use client";
import classNames from "classnames";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  AssignToIcon,
  BacklogIcon,
  NoPriorityIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  InProgressIcon,
  LabelIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
  HighIcon,
  MediumIcon,
  LowIcon,
  AddLabels,
} from "@/components/logos/command-bar";
import { CpuIcon, DollarSignIcon, InspectIcon } from "lucide-react";
import { FaOilCan } from "react-icons/fa";

const commandOptions = [
  {
    label: "Assign to..",
    icon: AssignToIcon,
    subOptions: [
      { label: "Self", icon: PersonIcon },
      { label: "Family Member", icon: PersonIcon },
      { label: "Service Provider", icon: PersonIcon },
    ],
  },
  {
    label: "View Analytics",
    icon: InspectIcon,
    subOptions: [
      { label: "Fuel Efficiency", icon: InspectIcon },
      { label: "Maintenance History", icon: InspectIcon },
      { label: "Usage Patterns", icon: InspectIcon },
    ],
  },
  {
    label: "Manage Finances",
    icon: DollarSignIcon,
    subOptions: [
      { label: "Expense Tracking", icon: DollarSignIcon },
      { label: "Insurance Management", icon: DollarSignIcon },
      { label: "Budgeting Tools", icon: DollarSignIcon },
    ],
  },
  {
    label: "Track Mileage",
    icon: FaOilCan,
    subOptions: [
      { label: "Trip Logs", icon: FaOilCan },
      { label: "Mileage Trends", icon: FaOilCan },
      { label: "Fuel Consumption", icon: FaOilCan },
    ],
  },
  {
    label: "AI Features",
    icon: CpuIcon,
    subOptions: [
      { label: "Predictive Maintenance", icon: CpuIcon },
      { label: "Driver Behavior Analysis", icon: CpuIcon },
      { label: "Route Optimization", icon: CpuIcon },
    ],
  },
] as const;


export const CommandMenu = () => {
  const [opened, setOpened] = useState(false);
  const [selectedOption, setSetSelectedOption] = useState<number | null>(null);
  const commandMenuRef = useRef<HTMLDivElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const toggleCommandMenu = (e: MouseEvent) => {
      if (!commandMenuRef.current) return;
      const isMenuButton =
        e.target instanceof Element &&
        e.target.classList.contains("command-menu-button");
      const clickedOutside =
        !isMenuButton && !commandMenuRef.current?.contains(e.target as Node);

      setOpened(clickedOutside ? false : true);
      if (clickedOutside) setSearchValue("");
    };

    window.addEventListener("click", toggleCommandMenu);

    return () => {
      window.removeEventListener("click", toggleCommandMenu);
    };
  }, []);

  const currentOptions = useMemo(() => {
    const options =
      selectedOption === null
        ? commandOptions
        : commandOptions[selectedOption].subOptions;

    // If no search value is provided, we return all options.
    if (searchValue === "") return options;

    // If a search value is provided, we do a simple search based on that input.
    return [...options].filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [selectedOption, searchValue]);

  useEffect(() => {
    if (!commandMenuRef.current) return;
    commandMenuRef.current.classList.remove("animate-bounce");
    commandMenuRef.current.clientWidth;
    commandMenuRef.current.classList.add("animate-bounce");
  }, [selectedOption]);

  return (
    <div className={classNames(opened && "opened")} ref={commandMenuRef}>
      <div
        className={classNames(
          "absolute left-[calc(50%+7.5rem)] flex w-[90vw] max-w-[64rem] -translate-x-1/2 flex-col items-start rounded-xl border border-transparent-white bg-transparent-white shadow-[rgb(0_0_0_/_35%)_0px_7px_32px] transition-[transform,opacity] md:left-1/2",
          opened && "translate-y-[12.8rem] opacity-100 md:translate-y-[2.4rem]",
          !opened && "translate-y-[12.8rem] opacity-60"
        )}
      >
        <span className="ml-4 mt-2 bg-white/[0.05] px-2 text-xs leading-10 text-white/50">
          LIN-111 Walkway lightning
        </span>
        <input
          placeholder="Type a command or search..."
          className="w-full bg-transparent p-5 text-lg outline-none"
          value={searchValue}
          onChange={(ev) => setSearchValue(ev.target.value)}
        />
        <div className="flex w-full flex-col text-sm text-off-white">
          {currentOptions.map(({ label, icon: Icon, ...menuItem }, index) => (
            <button
              key={label}
              onClick={(ev) => {
                const clickedRootItem = "subOptions" in menuItem;
                setSetSelectedOption(clickedRootItem ? index : null);
                setSearchValue("");
                if (!clickedRootItem) {
                  setOpened(false);
                  // We stop propagation to prevent the click event from
                  // bubbling up to the window and triggering toggleCommandMenu.
                  // This should be prevented because if that funtion ran, it would
                  // oterwise reopen the menu again, because it registers a click
                  // INSIDE the menu.
                  ev.stopPropagation();
                }
              }}
              className="command-menu-button flex h-[4.6rem] w-full items-center gap-3 px-5 first:bg-white/[0.15] hover:bg-white/[0.05]"
            >
              <Icon />
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
