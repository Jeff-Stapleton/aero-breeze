
export function TableTabContainer({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav aria-label="Tabs" className="-mb-px flex space-x-8">
              {children}
            </nav>
          </div>
        </div>
      </div>
    )
  }
  
  type FuelLoadTableTabProps = {
    isActive?: boolean
    onClick: () => void
    children: React.ReactNode
  }
  
  export function TableTab({
    isActive,
    onClick,
    children,
  }: FuelLoadTableTabProps) {
    return (
        <div
            aria-current={isActive ? 'page' : undefined}
            onClick={onClick}
            className={isActive ? 
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium border-skyBlue-600 text-skyBlue-600' : 
                'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium border-transparent text-gray-500 hover:cursor-pointer hover:border-gray-300 hover:text-gray-700'
            }
        >
            {children}
        </div>
    )
  }