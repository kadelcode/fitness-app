// Import the getServerSession function from the next-auth library.
// This function is used to retrieve the session information on the server side.
import { getServerSession } from 'next-auth'

// Import the authentication options configured for your application
// These options typically include settings for authentication providers, callbacks, etc.
import { authOptions } from '@/lib/auth-options'

// Import the redirect function from the next/navigation module.
// This function is used to redirect the user to a different page.
import { redirect } from 'next/navigation'

// Import the DashboardShell component, which is likely a layout component
// that wraps the content of the dashboard with a consistent shell or structure
import DashboardShell from '@/components/DashboardShell';

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Dashboard",
  description: "BoomFit User Dashboard",
};


// Define the DashboardLayout component as an asynchronous function.
// This component takes 'children' as a prop, which represents the content to be rendered within the dashboard layout.
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    // Retrieve the session information using getServerSession and the authOptions.
    // This will check if the use is authenticated.
    const session = await getServerSession(authOptions);

    // If there is no session (i.e., the user is not authenticated),
    // redirect the user to the login page.
    if (!session) {
        redirect("/login");
    }

    // If the user is authenticated, render the DashboardShell component
    // with the 'children' content passed to it.
    return (
        <DashboardShell>{children}</DashboardShell>
    )
}