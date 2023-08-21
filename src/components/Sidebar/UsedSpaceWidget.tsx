export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700">
          Used space
        </span>

        <p>Your team has used 80% of your available space. Need more?</p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-5/6 rounded-full bg-violet-600" />
      </div>

      <div className="space-x-3">
        <button className="rounded p-0.5 text-sm font-medium text-violet-500 outline-none hover:text-violet-700 focus-visible:border-violet-700 focus-visible:ring-1 focus-visible:ring-violet-700">
          Dismiss
        </button>

        <button className="rounded p-0.5 text-sm font-medium text-violet-700 outline-none hover:text-violet-900 focus-visible:border-violet-700 focus-visible:ring-1 focus-visible:ring-violet-700">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
