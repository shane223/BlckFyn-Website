import * as React from "react"
import { cn } from "@/lib/utils"

export interface NativeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <select
                    className={cn(
                        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    {children}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        )
    }
)
NativeSelect.displayName = "NativeSelect"

export interface NativeSelectOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> { }

const NativeSelectOption = React.forwardRef<HTMLOptionElement, NativeSelectOptionProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <option ref={ref} className={className} {...props}>
                {children}
            </option>
        )
    }
)
NativeSelectOption.displayName = "NativeSelectOption"

export { NativeSelect, NativeSelectOption }
