import { Outlet } from "react-router-dom"
import { ErrorBoundary } from "./ErrorBoundary"

export const ErrorLayout = () => {
    return <ErrorBoundary>
        <Outlet />
    </ErrorBoundary>
}