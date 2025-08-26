import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import { useState } from "react";
import { Dropdown } from "../ui/dropdown/Dropdown";
import { DropdownItem } from "../ui/dropdown/DropdownItem";
import { MoreDotIcon } from "../../icons";

export default function MonthlyTarget() {
  const series = [75.55];
  const options: ApexOptions = {
    colors: ["#007AFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "radialBar",
      height: 330,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -85,
        endAngle: 85,
        hollow: {
          size: "80%",
        },
        track: {
          background: "rgba(255, 255, 255, 0.1)",
          strokeWidth: "100%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: "36px",
            fontWeight: "600",
            offsetY: -40,
            color: "var(--glass-text-primary)",
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      type: "solid",
      colors: ["#007AFF"],
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };
  
  const [isOpen, setIsOpen] = useState(false);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function closeDropdown() {
    setIsOpen(false);
  }

  return (
    <div className="glass-card">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-lg font-semibold" style={{ color: 'var(--glass-text-primary)' }}>
            Monthly Target
          </h3>
          <p className="mt-1 text-sm" style={{ color: 'var(--glass-text-secondary)' }}>
            Target you've set for each month
          </p>
        </div>
        <div className="relative">
          <button className="glass-btn p-2" onClick={toggleDropdown}>
            <MoreDotIcon className="size-5" style={{ color: 'var(--glass-text-tertiary)' }} />
          </button>
          <Dropdown
            isOpen={isOpen}
            onClose={closeDropdown}
            className="glass-dropdown w-40 p-2"
          >
            <DropdownItem
              onItemClick={closeDropdown}
              className="glass-nav-item text-sm"
            >
              View More
            </DropdownItem>
            <DropdownItem
              onItemClick={closeDropdown}
              className="glass-nav-item text-sm"
            >
              Delete
            </DropdownItem>
          </Dropdown>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="max-h-[330px]" id="chartDarkStyle">
          <Chart
            options={options}
            series={series}
            type="radialBar"
            height={330}
          />
        </div>
        <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-[95%] glass-badge-success">
          +10%
        </span>
      </div>
      
      <p className="mx-auto mb-6 w-full max-w-[380px] text-center text-sm" style={{ color: 'var(--glass-text-secondary)' }}>
        You earn $3287 today, it's higher than last month. Keep up your good work!
      </p>

      <div className="flex items-center justify-center gap-8 px-6 py-4 glass-container rounded-xl">
        <div className="text-center">
          <p className="mb-1 text-xs font-medium" style={{ color: 'var(--glass-text-tertiary)' }}>
            Target
          </p>
          <p className="flex items-center justify-center gap-1 text-lg font-bold" style={{ color: 'var(--glass-text-primary)' }}>
            $20K
            <svg className="w-4 h-4" fill="var(--glass-error)" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.26816 13.6632C7.4056 13.8192 7.60686 13.9176 7.8311 13.9176C7.83148 13.9176 7.83187 13.9176 7.83226 13.9176C8.02445 13.9178 8.21671 13.8447 8.36339 13.6981L12.3635 9.70076C12.6565 9.40797 12.6567 8.9331 12.3639 8.6401C12.0711 8.34711 11.5962 8.34694 11.3032 8.63973L8.5811 11.36L8.5811 2.5C8.5811 2.08579 8.24531 1.75 7.8311 1.75C7.41688 1.75 7.0811 2.08579 7.0811 2.5L7.0811 11.3556L4.36354 8.63975C4.07055 8.34695 3.59568 8.3471 3.30288 8.64009C3.01008 8.93307 3.01023 9.40794 3.30321 9.70075L7.26816 13.6632Z"/>
            </svg>
          </p>
        </div>

        <div className="w-px h-8" style={{ backgroundColor: 'var(--glass-border)' }}></div>

        <div className="text-center">
          <p className="mb-1 text-xs font-medium" style={{ color: 'var(--glass-text-tertiary)' }}>
            Revenue
          </p>
          <p className="flex items-center justify-center gap-1 text-lg font-bold" style={{ color: 'var(--glass-text-primary)' }}>
            $15.1K
            <svg className="w-4 h-4" fill="var(--glass-success)" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"/>
            </svg>
          </p>
        </div>

        <div className="w-px h-8" style={{ backgroundColor: 'var(--glass-border)' }}></div>

        <div className="text-center">
          <p className="mb-1 text-xs font-medium" style={{ color: 'var(--glass-text-tertiary)' }}>
            Today
          </p>
          <p className="flex items-center justify-center gap-1 text-lg font-bold" style={{ color: 'var(--glass-text-primary)' }}>
            $3.3K
            <svg className="w-4 h-4" fill="var(--glass-success)" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M7.60141 2.33683C7.73885 2.18084 7.9401 2.08243 8.16435 2.08243C8.16475 2.08243 8.16516 2.08243 8.16556 2.08243C8.35773 2.08219 8.54998 2.15535 8.69664 2.30191L12.6968 6.29924C12.9898 6.59203 12.9899 7.0669 12.6971 7.3599C12.4044 7.6529 11.9295 7.65306 11.6365 7.36027L8.91435 4.64004L8.91435 13.5C8.91435 13.9142 8.57856 14.25 8.16435 14.25C7.75013 14.25 7.41435 13.9142 7.41435 13.5L7.41435 4.64442L4.69679 7.36025C4.4038 7.65305 3.92893 7.6529 3.63613 7.35992C3.34333 7.06693 3.34348 6.59206 3.63646 6.29926L7.60141 2.33683Z"/>
            </svg>
          </p>
        </div>
      </div>
    </div>
  );
}