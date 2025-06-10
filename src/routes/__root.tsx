import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { AppSidebar } from './dashboard/-components/app-sidebar'

export const Route = createRootRoute({
	component: () => (
		<>
			<SidebarProvider>
				<AppSidebar />
				<SidebarInset>
					<header className='flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12'>
						<div className='flex items-center gap-2 px-4'>
							<SidebarTrigger className='-ml-1' />
							<Separator
								orientation='vertical'
								className='mr-2 data-[orientation=vertical]:h-4'
							/>
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className='hidden md:block'>
										<BreadcrumbLink href='#'>
											Building Your Application
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className='hidden md:block' />
									<BreadcrumbItem>
										<BreadcrumbPage>Data Fetching</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
						<Outlet />
					</div>
					<TanStackRouterDevtools />
				</SidebarInset>
			</SidebarProvider>

			{/* <div className='container pt-10'>
				<Outlet />
			</div>
			<TanStackRouterDevtools /> */}
		</>
	),
})
{
	/* <NavigationMenu className='p-4 h-fit'>
				<NavigationMenuList className='flex items-center gap-4'>
					<NavigationMenuItem>
						<h1 className='font-bold text-md'>
							Tanstack Query Project Starter
						</h1>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to='/'
							className='[&.active]:border-b-2 [&.active]:text-red-500 pb-1 border-red-500'
						>
							<NavigationMenuLink>Home</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to='/pokemon'
							className='[&.active]:border-b-2 [&.active]:text-red-500 pb-1 border-red-500'
							search={{ limit: 15, offset: 0 }}
						>
							<NavigationMenuLink>Pokemon</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link
							to='/dashboard'
							className='[&.active]:border-b-2 [&.active]:text-red-500 pb-1 border-red-500'
						>
							<NavigationMenuLink>Dashboard</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu> */
}
