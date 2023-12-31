export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-violet-700 dark:text-zinc-100">
          Used space
        </span>

        <p className="text-sm/5 text-violet-500 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100 dark:bg-zinc-600">
        <div className="h-2 w-5/6 rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>

      <div className="space-x-3">
        <button className="rounded p-0.5 text-sm font-medium text-violet-500 outline-none hover:text-violet-700 focus-visible:border-violet-700 focus-visible:ring-1 focus-visible:ring-violet-700 dark:text-violet-300 dark:hover:text-violet-200 dark:focus-visible:border-violet-500 dark:focus-visible:ring-violet-500">
          Dismiss
        </button>

        <button className="rounded p-0.5 text-sm font-medium text-violet-700 outline-none hover:text-violet-900 focus-visible:border-violet-700 focus-visible:ring-1 focus-visible:ring-violet-700 dark:text-zinc-300 dark:hover:text-zinc-100 dark:focus-visible:border-violet-500 dark:focus-visible:ring-violet-500">
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
