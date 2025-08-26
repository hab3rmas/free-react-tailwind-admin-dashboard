import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";

export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* Customers Metric */}
      <div className="glass-card group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-14 h-14 glass-container rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <GroupIcon className="size-7" style={{ color: 'var(--glass-accent)' }} />
          </div>
          <div className="glass-badge-success text-xs font-semibold">
            <ArrowUpIcon className="w-3 h-3" />
            +11.01%
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--glass-text-primary)' }}>
            3,782
          </h3>
          <p className="text-sm font-medium" style={{ color: 'var(--glass-text-secondary)' }}>
            Active Customers
          </p>
        </div>
      </div>

      {/* Orders Metric */}
      <div className="glass-card group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-14 h-14 glass-container rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <BoxIconLine className="size-7" style={{ color: 'var(--glass-warning)' }} />
          </div>
          <div className="glass-badge-error text-xs font-semibold">
            <ArrowDownIcon className="w-3 h-3" />
            -9.05%
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--glass-text-primary)' }}>
            5,359
          </h3>
          <p className="text-sm font-medium" style={{ color: 'var(--glass-text-secondary)' }}>
            Total Orders
          </p>
        </div>
      </div>

      {/* Revenue Metric */}
      <div className="glass-card group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-14 h-14 glass-container rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <svg className="size-7" style={{ color: 'var(--glass-success)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <div className="glass-badge-success text-xs font-semibold">
            <ArrowUpIcon className="w-3 h-3" />
            +23.5%
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--glass-text-primary)' }}>
            $45,920
          </h3>
          <p className="text-sm font-medium" style={{ color: 'var(--glass-text-secondary)' }}>
            Monthly Revenue
          </p>
        </div>
      </div>

      {/* Growth Metric */}
      <div className="glass-card group">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-14 h-14 glass-container rounded-2xl group-hover:scale-110 transition-transform duration-300">
            <svg className="size-7" style={{ color: 'var(--glass-accent)' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
          </div>
          <div className="glass-badge-success text-xs font-semibold">
            <ArrowUpIcon className="w-3 h-3" />
            +15.3%
          </div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-2xl font-bold tracking-tight" style={{ color: 'var(--glass-text-primary)' }}>
            89.2%
          </h3>
          <p className="text-sm font-medium" style={{ color: 'var(--glass-text-secondary)' }}>
            Growth Rate
          </p>
        </div>
      </div>
    </div>
  );
}
