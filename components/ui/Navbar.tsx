import { LogOut, Moon, Settings, Sun, User } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link.js'

const Navbar = () => {
    return (
        <nav className='flex p-4 items-center justify-between'>
            BRAND

            <div className='flex items-center justify-between gap-4'>
                <Link href=''>Dashboard</Link>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Moon />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuItem><Sun /> Light</DropdownMenuItem>
                        <DropdownMenuItem><Moon /> Dark</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><User /> Profile</DropdownMenuItem>
                        <DropdownMenuItem><Settings /> Settings</DropdownMenuItem>
                        <DropdownMenuItem variant='destructive'><LogOut /> Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Navbar