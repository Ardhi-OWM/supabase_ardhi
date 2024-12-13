"use client";

import { UserPen } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Button } from "@/components/ui/button"
import {
    DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

function Profile() {
    const handleSignOut = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error('Error signing out:', error.message);
                alert('Failed to sign out. Please try again.');
            } else {
                alert('Signed out successfully.');
                window.location.href = '/signin'; // Replace '/signin' with your login route
            }
        } catch (error) {
            console.error('Unexpected error during sign-out:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    const handleDeleteProfile = async () => {
        const confirmDelete = window.confirm(
            'Are you sure you want to delete your profile? This action cannot be undone.'
        );

        if (!confirmDelete) return;

        try {
            const user = await supabase.auth.getUser(); // Get the current user
            if (!user?.data?.user) {
                alert('No user is currently logged in.');
                return;
            }

            // Delete the user's profile from the database
            const { error } = await supabase
                .from('profiles') // Replace 'profiles' with your user table name
                .delete()
                .eq('id', user.data.user.id); // Match the user's ID

            if (error) {
                console.error('Error deleting profile:', error.message);
                alert('Failed to delete profile. Please try again.');
                return;
            }

            // Sign the user out after deleting the profile
            await supabase.auth.signOut();
            alert('Profile deleted successfully.');
            window.location.href = '/signup'; // Replace '/signup' with your signup route
        } catch (error) {
            console.error('Unexpected error during profile deletion:', error);
            alert('An unexpected error occurred. Please try again.');
        }
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"> <UserPen /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
                <DropdownMenuLabel>
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <button onClick={handleSignOut} > Logout </button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <button onClick={handleDeleteProfile} className='text-red-500' > Delete Account </button>
                    </DropdownMenuItem>
                </DropdownMenuGroup>

            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default Profile;
